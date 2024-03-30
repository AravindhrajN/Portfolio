import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';

const Faceproducts=()=>{

     const[getlist,setlist]=useState([{name:"",price:"",des:"",id:null}]);
  
    useEffect(()=>{
     const fetchData=async()=>{
          try{
            const response=await axios.get("http://localhost:8081/api/fproduct")
             setlist(response.data)
          }catch(error){
            console.error('Error fetching data:', error);
          }
         
     }

     
    
   
fetchData();  },[]);


    return(
        <div className="Face_products">
            <div className="Face_products_list_wrapper">
            <div className="Face_products_list ">
            <div className="Face_products_contents_wrapper">
               
                {getlist.map(item => (
      
             <div key={item.id} className="Face_products_contents" id="Face_products_content">
                 <h3>{item.name}</h3>

            <div className="Fproducts_image_wrapper">
            <Card className="text-white front-face" >
            <Card.Img src={`http://localhost:8081/api/fimg/${item.id}`} alt={item.name} />
            <Card.ImgOverlay ><Card.Title className="Card-Title ">Rs:{item.price}</Card.Title></Card.ImgOverlay> 
            </Card>
            <div className="back-face">
            <h6>Description:</h6><q className="face_des overflow-auto"  >{item.des}</q> 
            </div>
            </div>
           
            <div className="Fproducts_buttons">
                <button>BUY</button>
                <button>CART</button>
            </div>
       </div> 
        
            ))}
              
            </div>
            </div>
            </div>
        </div>
    )
}

export default Faceproducts;