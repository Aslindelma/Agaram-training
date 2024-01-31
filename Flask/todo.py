from flask import Flask, render_template, request


app = Flask(__name__)

list=[]

@app.route("/todo",methods=['GET','POST'])
def todo():
    
    if request.method == 'POST' and request.form['item_name'] != "":
        list.append(request.form['item_name'])
    return render_template("todo.html",itemlist=list)

@app.route("/delete/<item>",methods=['GET','POST'])
def delete(item):
    list.remove(item)
    return render_template("todo.html",itemlist=list)

@app.route("/update/<key>",methods=['GET','POST'])
def update(key):
    if request.method == 'POST' and request.form['update_item'] != "":
        list[int(key)] = request.form['update_item']
        return render_template("todo.html",itemlist=list)
    else:
        return render_template("updatetodo.html",value = list[int(key)])

if __name__ == "__main__":
    app.run(debug=True)
