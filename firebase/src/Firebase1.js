import React ,{useState,useEffect} from 'react'
import { useFormik } from 'formik';
import services from './services'
 

const Firebase1 = () => {
const [crud,setCrud]= useState(false);

 useEffect(()=>getAllData(),[]);

 const [fileds,setfield]=useState([]);

 const initialValues={ name:"", id:"",address:"" }

 const onSubmit=(e)=>snedToFirebase(formik.values);
 const formik=useFormik({initialValues, onSubmit});

 console.log("formik data ",formik);


  function  snedToFirebase(data){
      services.add(data);  // is for adding filed into firebase   
     getAllData();
   }
//  for sending data to server we dont need any promises or async and await 


 async function getAllData (){
  let  info = await services.getAllUsers();
  // console.log("MY DATA",info.docs[0].data(),"ID is :",info.docs[0].id);
  // console.log("fteched data ",info) 
 const  data=info.docs.map(e=>{
     return {...e.data(),key:e.id}
});
    // console.log(info)
     setfield([...data]); 
    //  setfield([...info])
     return ;

}
const del=  async ()=>{

 let key=formik.values.id;
 await services.deleteUser(key);
 getAllData();

}

const update=async ()=>{

  let key=formik.values.id;
  await services.updateUser(key,formik.values);
  getAllData();
//  console.log("Formik object ",formik);
formik.resetForm();
}

const getData= async ()=>{
  let id=formik.values.id; 
  const info=  await  services.getData(id)
   console.log("datas",info.data()) 

   setfield([info.data()])

}

const login=()=>{

  const email=formik.values.address;
  const pswd=formik.values.id;


}




return (
    <>
   {crud && ( <>
    <form onSubmit={formik.handleSubmit} >
    <input type="text"  placeholder='Enter first name '  name="name" 
    onChange={formik.handleChange}
    value={formik.values.name}
    onBlur={formik.handleBlur}
   
   />
   
   <br/>
   <input type="text"  placeholder='Enter Address '  name="address" 
   onChange={formik.handleChange}
   value={formik.values.address}
   onBlur={formik.handleBlur}
   />
   

   <br/>
   <input type="text" placeholder='ID ' name="id"   
   onChange={formik.handleChange}
   value={formik.values.id}
   onBlur={formik.handleBlur}
   />
    <br/>
  <input type="submit" value="store " /> 
  <input type="button" value="getAllData" onClick={()=>{getAllData()}} />
  <input type="button" value="delete" onClick={()=>{del()}} /> 
  <input type="button" value="update" onClick={()=>{update()}}/>
  <input type="button" value="getData" onClick={()=>{getData()}}/>
    </form>
 
 <div>
 {
  fileds.map(e=>{
    return (<>
        {JSON.stringify(e)}
          <hr/>
    </>)
  })
 }
 
 </div>
</>
)}
 <input type="button" value="crud Operation" onClick={()=>{setCrud(true)}} /> 
   </>
  )
}

export default Firebase1


