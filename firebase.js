import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth , GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBNOZ9hkuaLD3hNrjFLxVbBKiIuDdm-4Tc",
    authDomain: "tryit-login.firebaseapp.com",
    projectId: "tryit-login",
    storageBucket: "tryit-login.appspot.com",
    messagingSenderId: "680207162458",
    appId: "1:680207162458:web:a55f0232e03be5bc258c63"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();


  const googleLogin = document.getElementById("google-login");
  googleLogin.addEventListener("click" , function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href= "../loggedin.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  })
