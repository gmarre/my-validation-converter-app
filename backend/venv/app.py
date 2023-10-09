from flask import Flask, request, jsonify
from docx import Document
from flask_cors import CORS  # Ajoutez cette ligne

app = Flask(__name__)
CORS(app)

@app.route('/create-docx', methods=['POST'])
def create_docx():
    data = request.json
    text_content = data.get('content', 'Hello, this is your docx content.')
    document = Document()
    document.add_paragraph(text_content)

    docx_path = 'output.docx'
    document.save(docx_path)
    return jsonify({'success': True, 'path': docx_path})

if __name__ == '__main__':
    app.run(debug=True)
