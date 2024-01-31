from flask import Flask
from flask import render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/welcome')

def welcome():
    return "<marquee><h1>Hello<h1/><marquee/>"

@app.route('/home')
def home():
    return "<h1>welcome to home page<h1/>"

@app.route('/user/<name>')
def username(name):
    return name

# @app.route('/connect/<name>')
# def renderHTML(name):
#     return render_template("index.html",name = name,)

@app.route('/userpage/<name>')
def renderHTML(name):
    userlist = ["renisha","delma","abisha","sheik","shali","divya"]
    return render_template("index.html",name = name,userlist = userlist)

# @app.route("/todo")
# def todo():
#     return render_template("todo.html")

# if __name__ == "__main__":
#     app.run(debug=True)
