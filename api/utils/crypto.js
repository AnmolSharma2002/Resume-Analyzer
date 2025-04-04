const crypto = require("crypto");

const ENCRPTIONKEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32);

const IV_LENGTH = 16; // For AES, this is always 16

const encrypt = (text) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRPTIONKEY),
    iv
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return { content: encrypted, iv: iv.toString("hex") }; // ✅ Return as object
};

const decrypt = ({ iv, content }) => {
  if (!iv || !content) {
    throw new Error("Invalid encrypted text provided for decryption");
  }

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRPTIONKEY),
    Buffer.from(iv, "hex")
  );

  let decrypted = decipher.update(content, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

module.exports = { encrypt, decrypt };
