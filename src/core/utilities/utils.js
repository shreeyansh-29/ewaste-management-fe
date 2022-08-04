import CryptoJS from "crypto-js";
const index = require("../config/index") || {};

export const encryptData = (data) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), index.salt).toString();

export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, index.salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};
