from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main_page():
  statement = "Hello World"
  # html files need to be in the templates folder
  return render_template("./index.html", statement = statement)

@app.route("/second_page/<new_statement>")
def second_page(new_statement):
  return render_template("second_page.html", statement = new_statement)

if __name__ == "__main__":
  app.run(debug=True)