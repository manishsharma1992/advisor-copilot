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

# # Encrypt the API key
# api_key = "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"
# encrypted_api_key = encrypt_message(api_key, key)
# print(f"Encrypted: {encrypted_api_key}")

# # Decrypt the API key
# decrypted_api_key = decrypt_message(encrypted_api_key, key)
# print(f"Decrypted: {decrypted_api_key}")