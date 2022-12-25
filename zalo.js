const dec2hex =(dec)=> {
  return ('0' + dec.toString(16)).substr(-2)
}
const generateRandomString=()=> {
  var array = new Uint32Array(43/2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join('');
}
const verifier = generateRandomString();
console.log(verifier)

function generateCodeChallenge(code_verifier) {
  return code_challenge = base64URL(CryptoJS.SHA256(code_verifier))
}
function base64URL(string) {
  return string.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

var challenge = generateCodeChallenge(verifier);
console.log(challenge);

function  LoginZalo() {
  localStorage.setItem('verifier', verifier);
  window.location.href=(`https://oauth.zaloapp.com/v4/permission?app_id=2173105301572134127&redirect_uri=https://thanhngandev26122000.000webhostapp.com/userForm.html&code_challenge=${challenge}&state=thanhngan`
 )
}
