from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_URI'] = "mongodb://root:123456@localhost:27017/osr_web"

mongo = PyMongo(app)

@app.route('/')
def index():
    return 'hello, world!'

@app.route('/test')
def test():
    onlines_users = mongo.db.system.users.find()
    return str(onlines_users)

@app.route('/find')
def find():
    user = mongo.db.post.find_one()
    return str(user)

if __name__ == '__main__':
    app.run(debug=True,port=7777,host='0.0.0.0')



