export const generateKeyPair = async () => {
  return await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  );
};

export const encryptMessage = async (publicKey, message) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    data,
  );
};

export const decryptMessage = async (privateKey, encryptedMessage) => {
  const decrypted = await window.crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    encryptedMessage,
  );
  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
};
