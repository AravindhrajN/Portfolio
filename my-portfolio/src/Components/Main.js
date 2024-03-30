import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./contact";
import Sidebar from "./Side-bar";
import Navi from "./Navi"; 
import { useState } from "react";


const Main=()=>{

const [data,setdata]=useState('about');


const handleclick1=(name)=>{
     setdata(name)
     console.log(data);
}
const mainview=(data1)=>{
    switch(data1){
        case 'about': return <About/>;
        
        case 'resume':return <Resume/>;
        
        case 'project':return <Project/>;
        
        case 'contact':return <Contact/>;
        
        default:
       
    }
}



    return(
      
      <header className="main-header">
    
          
         
            <div className="container-fulid  main-conatiner" style={{maxWidth:'auto'}}>
                <div className="row g-0 ">
                    <div className="col-12 col-md-4 "><Sidebar/></div>
                    <div className="col-12 col-md-8 border border-primary" style={{listStyle:'none'}}><ul className="p-5" style={{listStyle:'none'}}>
                    <li className="p-1 bg-light"  style={{border:'2px solid red',borderRadius:'10px'}}><Navi handleclick={handleclick1}/></li>
                    <li className="  bg-light   mt-5 " style={{border:'2px solid red',borderRadius:'50px'}}>{mainview(data)}</li>
                    </ul>
                    </div>
                    </div>  
                    </div>  
       
        </header>
      


    );
}

export default Main;