from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import CustomUser, Resume
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import RegisterSerializer, ResumeSerializer
from rest_framework.authentication import TokenAuthentication

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        print("Received data:", request.data)  # Debugging statement
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({"message": "User registered successfully", "token": token.key}, status=status.HTTP_201_CREATED)
        else:
            print("Errors:", serializer.errors)  # Debugging statement
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        print(f"Email: {email}, Password: {password}")  # Debugging statement
        user = authenticate(request, email=email, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'email': user.email}, status=status.HTTP_200_OK)
        print("Invalid Credentials")  # Debugging statement
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

class ResumeUploadView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        file = request.FILES.get("file")
        if file:
            resume = Resume.objects.create(user=request.user, file=file)
            resume_data = {
                "id": resume.id,
                "name": resume.file.name,
                "uploaded_at": resume.uploaded_at,
                "is_default": resume.is_default,
                "size": resume.file.size,
            }
            return Response({"message": "Resume uploaded successfully!", "resume": resume_data}, status=status.HTTP_201_CREATED)
        return Response({"error": "No file uploaded"}, status=400)