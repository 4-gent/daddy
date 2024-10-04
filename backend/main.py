from flask import Flask, request, jsonify  # Import Flask and related modules for handling requests and responses
from flask_cors import CORS  # Import CORS for handling Cross-Origin Resource Sharing
from flask_bcrypt import Bcrypt  # Import Bcrypt for hashing passwords
from connect import db, users  # Import database connection and users collection

app = Flask(__name__)  # Create a Flask application instance
CORS(app, origins=['http://localhost:3000'])  # Enable CORS for the specified origin

bcrypt = Bcrypt(app)  # Initialize Bcrypt with the Flask app

@app.route('/login', methods=['POST'])  # Define the login route with GET and POST methods
def login():
    if request.method == 'POST':  # Check if the request method is POST
        data = request.get_json()  # Get JSON data from the request
        user = users.find_one({'username': data['username']})  # Find the user in the database by username

        if user and bcrypt.check_password_hash(user['password'], data['password']):  # Check if user exists and password matches
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
            'password': bcrypt.generate_password_hash(data['password']).decode('utf-8')
        }

        if users.find_one({'username': data['username']}) is None:  # Check if the username is not already taken
            users.insert_one(new_user)  # Insert the new user into the database
            return jsonify({'message': 'User created'}), 200  # Return success message with status code 200
        else:
            return jsonify({'message': 'Username already exists'}), 409  # Return conflict message with status code 409
    else:
        return jsonify({'message': 'Method not allowed'}), 405  # Return method not allowed message with status code 405

if __name__ == '__main__':  # Check if the script is run directly (not imported)
    app.run(debug=True, port=4000)  # Run the Flask app in debug mode on port 4000