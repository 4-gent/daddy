from flask import Flask, request, jsonify, session  # Import Flask and related modules for handling requests and responses
from flask_cors import CORS  # Import CORS for handling Cross-Origin Resource Sharing
from flask_bcrypt import Bcrypt  # Import Bcrypt for hashing passwords
from connect import db, users, input_db, responses, scenes  # Import database connection and users collection
from bot import father
import os
from bson import ObjectId
from dotenv import load_dotenv
from itertools import zip_longest
import requests

load_dotenv()

STABILITY_API_KEY = os.getenv('STABILITY_API_KEY')

app = Flask(__name__)  # Create a Flask application instance
CORS(app, origins=['http://localhost:3000'], supports_credentials=True)  # Enable CORS for the specified origin

bcrypt = Bcrypt(app)  # Initialize Bcrypt with the Flask app

app.secret_key = 'fuckyou'

# app.permanent_session_lifetime = timedelta(days=7)

@app.route('/login', methods=['POST'])  # Define the login route with GET and POST methods
def login():
    if request.method == 'POST':  # Check if the request method is POST
        data = request.get_json()  # Get JSON data from the request
        user = users.find_one({'username': data['username']})  # Find the user in the database by username

        if user and bcrypt.check_password_hash(user['password'], data['password']):  # Check if user exists and password matches
            session['user_id'] = str(user['_id'])
            return jsonify({'message': 'Login successful'}), 200  # Return success message with status code 200
        else:
            return jsonify({'message': 'Invalid username or password'}), 401  # Return failure message with status code 401
    else:
        return jsonify({'message': 'Method not allowed'}), 405  # Return method not allowed message with status code 405

@app.route('/register', methods=['POST'])  # Define the register route with GET and POST methods
def register():
    if request.method == "POST":  # Check if the request method is POST
        data = request.get_json()  # Get JSON data from the request
        
        new_user = {  # Create a new user dictionary with hashed password
            'username': data['username'],
            'password': bcrypt.generate_password_hash(data['password']).decode('utf-8'),
            'first_name': data['firstname'],
            'last_name': data['lastname'],
            'email': data['email'],
            'parent': data['parent'],
            'gender': data['gender'],
            'age': data['age']
        }

        if users.find_one({'username': data['username']}) is None:  # Check if the username is not already taken
            users.insert_one(new_user)  # Insert the new user into the database
            return jsonify({'message': 'User created'}), 200  # Return success message with status code 200
        else:
            return jsonify({'message': 'Username already exists'}), 409  # Return conflict message with status code 409
    else:
        return jsonify({'message': 'Method not allowed'}), 405  # Return method not allowed message with status code 405

@app.route('/background', methods=['GET'])  # Define the image route with GET and POST methods
def background():
    if request.method == 'GET':
        user = users.find_one({'_id': ObjectId(session['user_id'])})

        scene = scenes.find_one({'scene_owner': session['user_id']}, sort=[('_id', -1)])

        print(user)
        print(user['parent'])
        print(scene)

        if user:
            new_back_image = user['parent'] + "_" + "start"
            if scene:
                new_back_image = user['parent'] + "_" + scene['scene']
            return jsonify(new_back_image), 200
        else:
            return jsonify({'message': 'User not found'}), 404

    else:
        return jsonify({'message': 'Server-side Error'}), 405

@app.route('/prompt', methods=['GET', 'POST'])
def prompt():
    if request.method == 'POST':
        data = request.get_json()

        user = users.find_one({'_id': ObjectId(session['user_id'])})

        new_input = {
            'input': data['input'],
            'firstname': user['first_name'],
            'lastname': user['last_name'],
            'gender': user['gender'],
            'parent': user['parent'],
            'age': user['age']
        }

        new_input_string = new_input['input'] + ' ' + new_input['firstname'] + ' ' + new_input['lastname'] + ' ' + str(new_input['age']) + ' ' + new_input['gender'] + ' ' + new_input['parent']

        response = father(new_input_string)

        response_parts = response.split(':')

        print(response)
        print(response_parts[0])
        print(response_parts[1])
        
        scenes.insert_one({'scene_owner': session['user_id'], 'scene': response_parts[0]})

        return jsonify(response_parts[1]), 200
    else:
        return jsonify({'message': 'Server-side Error'}), 405
    
@app.route('/message', methods=['GET', 'POST'])  # Define the logout route with GET method
def message():
    if request.method == 'POST':
        data = request.get_json()

        user = users.find_one({'_id': ObjectId(session['user_id'])})

        new_message = {
            'message_owner': session['user_id'],
            'message': data['input'],
            'firstname': user['first_name'],
            'lastname': user['last_name'],
            'age': user['age'],
            'parent': user['parent'],
            'gender': user['gender']
        }

        new_message_string = new_message['message'] + ' ' + new_message['firstname'] + ' ' + new_message['lastname'] + ' ' + str(new_message['age']) + ' ' + new_message['gender'] + ' ' + new_message['parent']

        response = father(new_message_string)

        response = response.split(':')[1]

        new_response = {
            'response_owner': session['user_id'],
            'response': response
        }

        print(new_message)
        input_db.insert_one(new_message)
        responses.insert_one(new_response)

        return jsonify({'message': 'Message stored successfully'}), 200
    else:
        return jsonify({'message': 'Server-side Error'}), 405

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'GET':
        message_responses = list(responses.find({'response_owner': session['user_id']}))
        message_input = list(input_db.find({'message_owner': session['user_id']}))
        for message in message_responses + message_input:
            message['_id'] = str(message['_id'])  # Convert ObjectId to string
        
        combined_messages = []

        for response, input_msg in zip_longest(message_responses, message_input):
            if input_msg:
                combined_messages.append(input_msg)
            if response:
                combined_messages.append(response)

        return jsonify(combined_messages), 200
    else:
        return jsonify({'message': 'Server-side Error'}), 405

if __name__ == '__main__':  # Check if the script is run directly (not imported)
    app.run(debug=True, port=4000)  # Run the Flask app in debug mode on port 4000