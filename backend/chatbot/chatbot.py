import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_FILE_PATH = os.path.join(BASE_DIR, 'DevHive.json')

with open(JSON_FILE_PATH, 'r', encoding='utf-8') as file:
    chatbot_data = json.load(file)

print("Loaded chatbot intents structure:", json.dumps(chatbot_data["intents"], indent=2))  # Debugging

def chatbot(user_input):
    """ Improved chatbot logic with debugging """
    user_input = user_input.lower()
    
    for intent in chatbot_data["intents"]:
        print(f"Checking intent: {intent}")  # Debugging
    
        for pattern in intent["patterns"]:
            print(f"Comparing: '{pattern.lower()}' with '{user_input}'")  # Debugging
            if pattern.lower() in user_input:
                print(f"Match found! Returning: {intent['responses'][0]}")  # Debugging
                return intent["responses"][0]  # Return first response
    
    print("No match found, returning default response.")  # Debugging
    return "Sorry, I don't understand that."
