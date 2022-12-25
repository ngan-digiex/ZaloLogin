const userName = document.getElementById('userName');
const userId = document.getElementById('userId');
const avatar = document.getElementById('avatar');
var code_verifier = localStorage.getItem('verifier');
var access_token ;
const params = new URL(window.location).searchParams;
const code = params.get('code');

console.log(code_verifier);

fetch(`https://oauth.zaloapp.com/v4/access_token?code=${code}&app_id=2173105301572134127&grant_type=authorization_code&code_verifier=${code_verifier}`,{
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'secret_key': 'mYrP70NqprDMEsSQKfJV',
        }
}).then( (response)=> response.json())
.then((res)=>{
    access_token = res.access_token;
    getDataByAccessToken(access_token);
})


function getDataByAccessToken(access_token) {
    fetch(`https://graph.zalo.me/v2.0/me?fields=id,name,picture`,{
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'access_token': access_token,
        }
}).then( (response)=> response.json())
.then((res)=>{
    avatar.src = res.picture.data.url,
    userId.value = res.id,
    userName.value = res.name
})
}
