const Project=()=>{

    return(<>
    <h2 className="pt-1 ps-4 project-title ">Project</h2>
    <div className="row pro-container  mt-5 mb-3">
    <div className="col-lg-4 col-12 g-1 wrapper bg-secondary">
        <img src="./facemask.png"  className=" bg-secondary"  alt="projectimg"/>
              </div>
       
        <p  className=" para col-lg-4 col-12 g-1 p-2">It is identifying the people who are not wearing a face mask in crowded 
Places By using Open CV
           </p>
           <div className="col-lg-4 col-12 p-1 "> <div className="linktopro1  bg-success p-2"><a href="https://motherbeauty.vercel.app/"  className="linktopro"> FACE MASK DETECTION  </a></div></div>
      
     
          
    </div>
    <div className="row pro-container mt-5 ">
    <div className="col-lg-4 col-12 g-1 p wrapper bg-secondary">
        <img src="./shoepro.png"  className="p-2 bg-secondary"  alt="projectimg"/>
              </div>
       
        <p  className=" para col-lg-4  col-12 g-0 p-2">It is a web development app using the Spring Boot framework by Java
           </p>
           <div className="col-lg-4 col-12 p-1"><div className="linktopro1  bg-success p-1"><a href="https://motherbeauty.vercel.app/"  className="linktopro p-0">FOOTWEAR SALES APP</a></div> </div>
      
     
          
    </div>
    <div className="row pro-container m-2 mt-5 mb-3">
    <div className="col-lg-4 col-12  g-1 wrapper bg-secondary">
        <img src="./secondproject.png"  className="p-2 bg-secondary"  alt="projectimg"/>
              </div>
       
        <p  className=" para col-lg-4 col-12 g-1 p-2">It is a front-end web development app using Reactjs
           </p>
           <div className="col-lg-4 col-12 "> <div className="linktopro1  bg-success p-2"><a href="https://motherbeauty.vercel.app/"  className="linktopro">WOMEN'S BEAUTY PRODUCTS SALES APP</a></div> </div>
      
     
          
    </div>
   

    </>)



}
export default Project;