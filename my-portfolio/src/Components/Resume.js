

const Resume=()=>{
    return(
      
        <> 
    <div className="resume-container ">
        <h2 className="pt-1 ps-4 resume-title ">Resume</h2>
        <div className="container ps-4">
  <div className="row " style={{alignItems:'center'}}>
    <div className="col col-sm-6 ">
        <h4 className="pt-3 pb-3">Education</h4>
        <div className="card card-edu mb-4  p-3">
            <h6 className="ps-1 p-1">2019-2023</h6>
            <p className="ps-1">Computer Science
            <span className="ps-1 text-muted lh-1">-VEC ,,<br/>Ambattur-Chennai</span></p>
        </div>
  <div className="card-middle mb-4 p-3">
    <h6 className="ps-1 p-1">2018-2019</h6>
  <p className="ps-1">HSC
   <span className="ps-1 text-muted lh-1"> - LKM school,,<br/>Orathanadu-Thanjavur</span></p>
  </div>
  <div className="card  card-edu mb-4 p-3">
    <h6 className="ps-1 p-1">2016-2017</h6>
  <p className="ps-1 ">SSLC
   <span className="ps-1 text-muted lh-1 "> - LKM school,,<br/>Orathanadu-Thanjavur</span></p>
    </div>
</div>
    
    <div className="col col-sm-6 ps-3 "  >
        <div className="card ex-card pt-5  pb-5 ps-2 " >
  <div className="card-body pt-2 p-3">
    <h4 className="card-title pb-2 p-1">Experience</h4>
    <h6 className="card-subtitle mb-2 p-1 text-muted">Salang Consultants</h6>
    <p className="card-text p-2 ">15 days of internship and training on Java (31- Dec-2021).</p>
    <a href="./intern certificate.pdf " target="_blank" className="card-view ms-2">View</a>
  
  </div>
</div>
    </div></div>
    <div className="row m-4 ms-0 mb-2" style={{alignItems:'center'}}>
    <div className="col ">
        <h4>Working skill</h4>
        <div className="workingskill-container">
          <div className="skillset  p-2">
           <div className="row"> <div className=" col-6 skilltitle ">Programming</div>
            <div className=" col-6 percent">80%</div></div>
            <div className="progress  " >
  <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>
           
</div>
<div className="skillset  p-2">
  <div className=" row " >
            <div className=" col-6 skilltitle" >Web Development</div>
            <div className=" col-6 percent">85%</div> </div>
            <div className="progress " >
  <div className="progress-bar bg-info" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          
</div>
<div className="skillset p-2">
<div className="row">
            <div className="col-6 skilltitle">DataBase</div>
           <div className="col-6 percent">75%</div></div>
           <div className="progress "  >
  <div className="progress-bar bg-warning" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
   </div>
<div className="skillset p-2">
  <div className="row">
            <div className="col-6 skilltitle">Git</div>
            <div className="col-6 percent ">65%</div></div>
            <div className="progress " >
  <div className="progress-bar bg-danger" role="progressbar" style={{width: "65%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
    </div>
    
  </div>
  <div className="col mb-6 m-2  pb-5"><h4 className=" ps-3" >Knowledges</h4>
  <div className=" container-md-6 knowledgesets p-3 pt-1 ">
    <div className="row p-2 g-3">
    <div className="  col-12  col-md-6  p-1 " ><span  >1)React</span></div>
    <div className=" col-12  col-md-6  p-1 " ><span   >
    2)Spring Boot</span></div>
    <div className=" col-12  col-md-6  p-1  "  >  <span   >3)Firebase</span></div>
    <div className=" col-12  col-md-6  p-1  "  >  <span   >4)Data Structure</span></div>
    </div>


  
  
  </div>
  </div>
  </div>
  </div>
  </div>
        </>
    );

}
export default Resume;