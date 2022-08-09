// convert keys to begin lowercase
const obj = {};
let newKeysObj = {};
Object.keys(obj).forEach((key) => {
  newKeysObj[key] = key[0].toLowerCase() + key.substring(1);
});
