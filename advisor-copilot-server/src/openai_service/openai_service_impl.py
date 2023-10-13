from utilities import encrypt_decrypt as utils
import openai

"""OPEN AI API SECRET KEY b'gAAAAABlKOLsEyF-c8WuRkCHdrTG0qlisBiobnYRbbv_TFyA_PkQQ1o9ybtjnkX2EFIqHiVs4AIwyIaWI9B80_HcJb-sF7yvA_KzDPQmuGjkIzkcsh_2mOFkBIZ4fXIAVEuJ1Hc8N-RbnLIA697Q3S8thzdbzq1otQ==' """

def init_open_ai():
    # key = utils.load_key()
    # openai_key = utils.decrypt_message(b'gAAAAABlKP_k0iOnooI_msdFwyVXsUWwFzqbLdRwytRAc1mnddeaMDH07tunLsLLK1-PjO8BPWuqzisn2Gb5Udyx4HkcCI6xVLM5WSoH2r5BndBiaIVc6b8Obzv5idBDZLP-nfj8MKDqNZmTTnAy4_j592Irr1kaHQ==', "6fgcCbyeAP2fUj8BLuXHVU04hL2iruIA7DfJHPHoLW8=")
    openai.api_key = "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"


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