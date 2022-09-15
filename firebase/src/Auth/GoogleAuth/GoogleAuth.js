import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRef } from "react";
const provider = new GoogleAuthProvider();


 
export  const  GoogleAuth=()=>{
    const para=useRef(null);
const auth = getAuth();
    const user = auth.currentUser;

if (user) {
 console.log(user); 
} else {
console.log("No user found ");

}


 
 
    function signUp(){  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //  console.log("Users",user,"Token",token);
     console.log("Photos ",user.photoURL);
      window.open(user.photoURL);

       var link = document.createElement('a');
       link.href = user.photoURL;
       link.download = 'Download.jpg';
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);

       para.current.innerHTML=user.displayName
       para.current.innerHTML+="<br/>";
       para.current.innerHTML+=user.email;
       para.current.innerHTML+="<br/>";
       para.current.innerHTML+=user.emailVerified;   
  }).catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
  return(<>
  
   <input type="button"  value="SignUp with google" onClick={_=>signUp()} />
    <p ref={para}></p>

  </>)

}