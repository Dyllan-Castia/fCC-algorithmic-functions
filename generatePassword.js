function generatePassword(len) {
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

let result = "";

for (let i = 0; i < len; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);

  result += chars[randomIndex];
}
return result;
}

const password = generatePassword(12);

console.log("Generated password: " + password);
//Generated password: YpC6wm7z)gju
