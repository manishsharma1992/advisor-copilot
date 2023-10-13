from cryptography.fernet import Fernet

# Function to encrypt a message
def encrypt_message(message, key):
    encoded_message = message.encode()
    f = Fernet(key)
    encrypted_message = f.encrypt(encoded_message)
    return encrypted_message

# Function to decrypt an encrypted message
def decrypt_message(encrypted_message, key):
    f = Fernet(key)
    decrypted_message = f.decrypt(encrypted_message).decode()
    return decrypted_message

# # Generate and write a new key
# write_key()

# # Load the key
# key = load_key()

# Encrypt the API key
# api_key = ""
# encrypted_api_key = encrypt_message(api_key, "t7H7Xt7-u9CHqJIE5a6RNN751UYnlKWldZEVCA6clx0=")
# print(f"Encrypted: {encrypted_api_key}")

# # Decrypt the API key
# decrypted_api_key = decrypt_message(encrypted_api_key, "t7H7Xt7-u9CHqJIE5a6RNN751UYnlKWldZEVCA6clx0=")
# print(f"Decrypted: {decrypted_api_key}")