"use server";

import crypto from "node:crypto";

/**
 * 
 * @param {string} PRIVATE_KEY 
 * @returns { { key: string } | { error: string }  }
 */
export async function convert_PKCS1_to_PKCS8(PRIVATE_KEY) {
  try {
    const pkcs8_key = crypto.createPrivateKey(PRIVATE_KEY).export({
      type: "pkcs8",
      format: "pem",
    });
  
    return {
      key: pkcs8_key
    };
  } catch (error) {
    console.log(error);
    return {
      error: error.message
    }
  }
};