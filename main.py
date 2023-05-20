import os
import requests

def call_chatgpt_api(message):
    api_url = os.getenv('CHATGPT_API_URL')  # 从环境变量中获取ChatGPT API的URL
    api_key = os.getenv('CHATGPT_API_KEY')  # 从环境变量中获取ChatGPT API的密钥

    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }

    data = {
        'messages': [{'role': 'system', 'content': 'You are a user'}, {'role': 'user', 'content': message}]
    }

    response = requests.post(api_url, headers=headers, json=data)
    response_data = response.json()

    bot_message = response_data['choices'][0]['message']['content']
    return bot_message

def chatgpt(request):
    if request.method == 'POST':
        request_data = request.get_json()
        user_message = request_data['message']
        bot_message = call_chatgpt_api(user_message)
        return {'message': bot_message}
