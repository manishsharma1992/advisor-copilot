from utilities import encrypt_decrypt as utils
import openai

def init_open_ai():
    openai_key = utils.decrypt_message(b'gAAAAABlKSnfTs57OJmaTvHugMv_rZ5llRFlVzwKEfHWJMo14flGtriyyBM_iGa40RLuKdJnBFsXimBiHKPzOOBTYlZVRYbnz419Bq6ILGpIrr4ObuvYfspKiQVXiuedwKRCHx3uG6HuV8MdopHpKxef4l10pet1aA==', "t7H7Xt7-u9CHqJIE5a6RNN751UYnlKWldZEVCA6clx0=")
    openai.api_key = openai_key


def ask_gpt(query):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages = [
            {'role': 'user', 'content': query}
        ],
        temperature=0.2,
        max_tokens=1024,
        frequency_penalty=0.0
    )
    return response