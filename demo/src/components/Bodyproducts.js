import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';

const Bodyproducts=()=>{

    const[getlist,setlist]=useState([{name:"",price:"",des:"",id:null}]);


    useEffect(()=>{
        const fetchData=async()=>{
             try{
               const response=await axios.get("http://localhost:8081/api/bproduct")
                setlist(response.data)
             }catch(error){
               console.error('Error fetching data:', error);
             }
            
        }
   
        
       
      
   fetchData();  },[]);





    return(
        <div className="Body_products">
            <div className="Bproducts_list_wrapper">
                <div className="Bproducts_list">
                <div className="Body_products_content_wrapper">
                {getlist.map(item => (
      
      <div key={item.id} className="Body_products_contents" id="Body_products_content">
      

     <div className="Bproducts_image_wrapper">
     <Card className="text-white front-face_2" >
     <Card.Img src={`http://localhost:8081/api/bimg/${item.id}`} alt={item.name} />
     </Card>
     <div className="back-face_2">
     <p>Description:</p><p className="body_des overflow-auto">{item.des}</p> 
     </div>
     </div>
     <h3>{item.name}</h3>
     <p className="price">Rs:{item.price}</p>
     <div className="Bproducts_buttons">
         <button>BUY</button>
         <button>CART</button>
     </div>
</div> 
 
     ))}
            
            </div></div>
            </div>
        </div>
    )
}
export default Bodyproducts;