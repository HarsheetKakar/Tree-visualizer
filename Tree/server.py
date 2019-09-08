"""
A Tree Algorithm visualization webapp
"""
from flask import Flask,render_template,request,url_for
from random import shuffle
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/tree',methods=['POST','GET'])
def tree():
    if request.method == 'POST':
        result = list(map(int,request.form['array'].split(',')))
        shuffle(result)
        return render_template("tree.html", result = result)

if __name__ == '__main__':
    app.run(debug = True)
