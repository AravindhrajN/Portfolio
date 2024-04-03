const Project=()=>{
      
    return(<>
    <div className="project-conatiner p-3">
    <h2 className=" project-title p-4">Project</h2>
    <p className="infodet">Hover the image to view  details</p>
    <div className="row pro-container  mt-5 mb-3">
    <div className="col-sm-4 col-6 g-1 wrapper bg-secondary">
        <img src="./facemask.png"  className=" bg-secondary"  alt="projectimg"/>
              </div>
       
        <p  className=" para col-sm-4 col-6 g-1 p-2">It is identifying the people who are not wearing a face mask in crowded 
Places By using Open CV.
           </p>
           <div className="col-sm-4 col-12 p-1 prosubtitle "> <a className="alink" href="https://github.com/AravindhrajN/OpenCV_app.git"> <p className="linktopro p-3"> FACE MASK DETECTION </p> </a></div>
      
     
          
    </div>
    <div className="row pro-container mt-5 ">
    <div className="col-sm-4 col-6 g-1 p wrapper bg-secondary">
        <img src="./shoepro.png"  className="p-2 bg-secondary"  alt="projectimg"/>
              </div>
       
        <p  className=" para col-sm-4  col-6 g-0 p-2">Web development app using the Spring Boot framework with postgreSQL.
           </p>
           <div className="col-sm-4 col-12 p-1 prosubtitle "><a className="alink" href="https://shoe-makers.onrender.com"  ><p className="linktopro p-3">FOOTWEAR SALES APP</p></a> </div>
      
     
          
    </div>
    <div className="row pro-container mt-5 mb-3">
    <div className="col-sm-4 col-6  g-1 wrapper bg-secondary"> 
        <img src="./secondproject.png"  className="p-2 bg-secondary"  alt="projectimg"/>
              </div>
       
        <p  className=" para col-sm-4 col-6 g-1 p-2">It is a front-end web development app using Reactjs
           </p>
           <div className="col-sm-4 col-12 p-1 prosubtitle "> 
       <a className="alink  " href="./project"  id="link" ><p className="linktopro p-3 ">WOMEN'S BEAUTY PRODUCTS SALES APP</p></a></div> 
      
     
          
    </div>
    </div>

    </>)



}
export default Project;
