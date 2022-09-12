import {db }from './connection';

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

  const user_ref=collection(db,"Users")


class crud{
  
    add =(data)=>{
         return addDoc(user_ref,data);
     }

   updateUser = (id, data) => {
        const userDoc = doc(db, "Users", id);
        return updateDoc(userDoc, data);
      };
    
    deleteUser = (id) => {
        const userDoc = doc(db, "Users", id);
        return deleteDoc(userDoc);
      };
      
      getAllUsers = () => {
        return getDocs(user_ref);
      };
    

      getData = (id) => {
        const bookDoc = doc(db, "Users", id);
        return getDoc(bookDoc);
      };



}

export  default     new  crud();