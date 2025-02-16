from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import mysql.connector
import os

app = Flask(__name__)
CORS(app)
load_dotenv()

# establishing connection between server and database
connection = mysql.connector.connect(
    user = os.getenv('DB_USER'),
    password = os.getenv('DB_PASSWORD'),
    host =  os.getenv('DB_HOST'),
    database =  os.getenv('DB_NAME')
)

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json
    name = data['name']
    email = data['email']
    message = data['message']

    if not name or not email or not message:
        return jsonify({"msg": "All field are required", "reponse": "failure"}), 400
    try: 
        cursor = connection.cursor()
        query = "INSERT INTO USER_FEEDBACK (user_name, user_feedback, user_email)values(%s, %s, %s)" 
        cursor.execute(query, (name,message,email)) 
        connection.commit()
    except mysql.connector.Error as err:
        return jsonify({"msg": str(err), "response": "failure"}), 500

    return jsonify({"msg" : "Message sent succefully", "response" : "success"}), 200
if __name__ == '__main__':
    app.run(debug=True)