import crypto from "node:crypto";

const getHash256 = (str) => {
  const hash = crypto.createHash("sha256");
  hash.update(str);
  return hash.digest("hex");
};

export default getHash256;
