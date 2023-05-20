import os
import openai
import requests
import json
#import chardet
openai.api_key=os.getenv("OPENAI_API_KEY")
openai.organization=os.getenv("OPENAI_ORGANIZATION")
def complete(answer):
    result=openai.Completion.create(
        engine="text-davinci-003",
        prompt=answer,
    )
    return result['choices'][0]['text']
def chatgpt(request):
    if request.method == 'POST':
        request_data = request.get_json()
        user_message = request_data['message']
        bot_message = complete(user_message)
        return {'message': bot_message}