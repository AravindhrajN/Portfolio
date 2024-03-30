import React, { useState} from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [listdata, setlistData] = useState([]);
  const[user,setuser]=useState({name:'',email:''});

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data');
        setlistData(response.data);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const senddata= async () =>{
      try{
       
        const sendresponse=await axios.post('http://localhost:8080/api/send',user)
        console.log(sendresponse.data);
        window.alert(user);
        
      }
      catch(error){
        console.log('error occur on the sending data'+error);
        window.alert("nosend");
      }
    }
 
const handlechange=(event)=>{
      const{name,value}=event.target;
      setuser(prevuser=>({ ...prevuser,[name]:value}));
}

 
  return (<>
    <div>
      <h1>Data from Spring Boot:</h1>
      <ul>
        {listdata.map(item => (
          <ul className='row'><li key={item.id}>NAME: {item.name}
           EMAIL:{item.email}</li></ul>
        ))}
      </ul>
    
      <button onClick={fetchData}>click</button><br/>
  
    </div>
    <div>
       <form ><h2>send to server</h2>
     <label>NAME</label> <input type="text" value={user.name}  name='name'  onChange={handlechange}/><br/>
     <label>EMAIL</label> <input type="text"  value={user.email} name='email' onChange={handlechange}/> <br/> 
    <button onClick={senddata}>button</button></form>
    </div>
    </>
  );
};

export default MyComponent;
