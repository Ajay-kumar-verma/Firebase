import React from 'react'
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './connection';

import { useFormik } from 'formik';
function EmailAndpswd(){
 const initialValues={ email:"", password:""}
    // const onSubmit=(e)=>snedToFirebase(formik.values);
    const formik=useFormik({initialValues, onSubmit:null});
    // console.log("formik data ",formik);
   
function  SignUp(){
const email=formik.values.email;
const password=formik.values.email;

createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    console.log(userCredential); 
    console.log("User sign in done ",userCredential.user)
    const user = userCredential.user;
   })
  .catch((error) => {
    console.log(error);
     console.log("Errors ",error);   
 });
 
  console.log("This is a Sign in form ");
    // services.add(data);getAllData(); 

}
 
function SignIn(){
    const email=formik.values.email;
    const password=formik.values.email;
    signInWithEmailAndPassword(auth,email,password).then(
     userCredential=>{
      console.log("login successfully",userCredential)                                               
    }).catch(
     er=>{
        console.log("Error ",er);
     }

    )

}


return(<>
 
  <form onSubmit={formik.handleSubmit} >
  <br/>
   <input type="email"  placeholder='Enter email '  name="email" 
   onChange={formik.handleChange}
   value={formik.values.email}
   onBlur={formik.handleBlur}
   />
   
   <br/>
   <input type="text" placeholder='password ' name="password"   
   onChange={formik.handleChange}
   value={formik.values.password}
   onBlur={formik.handleBlur}
   />
   <br/>
  <input type="button" value="SignIn" onClick={()=>{SignIn()}} />
  <input type="button" value="SignUp" onClick={()=>{SignUp()}} /> 
   </form>
 



    </>)
}

export default EmailAndpswd;



// // Initialize Firebase


// class EmailAndPswd{
   
//  signUp(email,password){  
//     auth = getAuth();
//  }

// }


// export default new EmailAndPswd();



