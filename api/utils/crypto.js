const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const secretKey = process.env.CRYPTO_SECRET;
const ivLength = 16;

const encrypt = (text) => {
  if (!text) throw new Error("Text is undefined or empty");

  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(secretKey, "hex"),
    iv
  );
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

const decrypt = ({ iv, content }) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey, "hex"),
    Buffer.from(iv, "hex")
  );

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(content, "hex")),
    decipher.final(),
  ]);

  return decrypted.toString();
};

module.exports = { encrypt, decrypt };
