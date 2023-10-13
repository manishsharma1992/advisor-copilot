#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from entities.request_prompt import requestPrompt
from utilities import encrypt_decrypt as utils
from openai_service import openai_service_impl as gpt_service
from flask import Flask, json, jsonify, request
from flask_cors import CORS
from types import SimpleNamespace

"""Module documentation goes here."""

app = Flask(__name__)
CORS(app)
gpt_service.init_open_ai()

@app.route("/ask_gpt", methods=["POST"])
def ask_my_query():
    query = request.data
    x = json.loads(query, object_hook=lambda d: SimpleNamespace(**d))
    answer = gpt_service.ask_gpt(x.content)
    return jsonify({
        "responseData": answer
    })

if __name__ == '__main__':
    app.run(debug=True)

