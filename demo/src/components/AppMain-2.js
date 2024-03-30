import { useState } from "react"





 
const Newarrival= () =>{
    return(
    <img src="./pictures/newarrival-1.png"
      alt="hairserum"
      style={{width: '50%'
    }}
    />);
   
};
const Bestselling= () =>{
    return(
    <img src="./pictures/bestsell-1.png"
      alt="bodycream"
      className="bodycream"
      style={{width: '70%',borderRadius:'50%'
    }}
   
    />);
   
};





const Main2=()=>{

    const[clicked,setclicked]=useState(false);
    const handleButtonClick=(value)=>{
        setclicked(value);
   }

return(<>
<div className="main2">
    <h2>Explore our products</h2>
    <div className="content-2">
    <div className="button-wrapper-2 ">
       <div className="products-highlight"> <span><button className="Newarrival   " onClick={()=>{handleButtonClick(false)}} >New Arrivals</button></span>
        <button className="Bestselling  " onClick={()=>{handleButtonClick(true)}} >Best Selling</button></div>
    </div>
    <div className="main2-subcontent-2">
      <div className="main2-l-img" style={{width:'50%'}}>
        <img src="./pictures/main2-l-img.png"  style={{width:'60%'}}alt="l-img"/>
      </div>
    <div className='img-wrapper'>
      <div className="img-contain">
    {clicked ? <Bestselling /> : <Newarrival />}
    </div>
    </div>
    <div className="main2-r-img" style={{width:'50%'}}>
    <img src="./pictures/main2-r-img.png" style={{width:'60%'}}  alt="r-img"/>
    </div>
    </div>
    </div>

</div>
</>)
}
export default Main2;