import React from 'react'

const Firebase = () => {
  
 async function  fun(){
   const res=  await fetch("https://fir-react-6a0d8-default-rtdb.firebaseio.com/mydata.json",{
        method:"POST",
        header:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({name:"name"})
    })
 
}



 
fun();
 
 
    return (
    <>
    This is a firebase 

    </>
  )
}

export default Firebase