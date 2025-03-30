from django.http import StreamingHttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json
import google.generativeai as genai
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

@csrf_exempt
@require_POST
def chat_endpoint(request):
    try:
        data = json.loads(request.body)
        messages = data.get('messages', [])

        # ✅ Updated System Prompt to keep responses focused on the platform
        system_prompt = """
        You are HiveHelper, an AI assistant for DevHive. DevHive is a platform that helps developers 
        find project teammates by analyzing their resumes, GitHub profiles, and skills. Users can:
        
        1️⃣ Upload their resumes to check compatibility scores with others.  
        2️⃣ Swipe to choose potential project partners based on skills and interests.  
        3️⃣ Get project recommendations (from SIH API and trending GitHub repos).  
        4️⃣ Chat and collaborate with matched users, including screen sharing & calls.

        📌 Your responses **MUST** be related to these features.  
        ❌ Do NOT answer general programming questions like "How do I center a div in CSS?"  
        ✅ Instead, guide users on using DevHive effectively.  

        Example responses:  
        - **User:** "How can I find a project partner?"  
          **You:** "Upload your resume, check compatibility scores, and swipe to choose teammates!"  
        - **User:** "Give me a React project idea"  
          **You:** "Sure! Based on your skills, here are some trending open-source projects..."  

        If a question is **not** related to DevHive, politely guide them back to relevant topics.
        """

        gemini_messages = [{"role": "user", "parts": [{"text": system_prompt}]}]

        for message in messages:
            role = "model" if message.get("type") == "bot" else "user"
            gemini_messages.append({
                "role": role,
                "parts": [{"text": message.get("content", "")}]
            })

        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content(gemini_messages, stream=True)

        def event_stream():
            full_response = ""  # To store the complete response
            for chunk in response:
                if hasattr(chunk, "text"):
                    full_response += chunk.text  # Collecting complete text
            yield f"data: {json.dumps({'response': full_response})}\n\n"

        return StreamingHttpResponse(event_stream(), content_type='text/event-stream')

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
