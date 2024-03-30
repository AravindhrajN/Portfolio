const About=()=>{
    return(<>
    <h2 className="pt-4 pb-2 ps-4 about-title mb-2">About</h2>
    <p className=" ps-4 about-subtitle"> I'm Aravindhraj N, a full-stack developer based in Chennai, Tamil Nadu, working in web development. I enjoy turning complex problems into simple, beautiful, and intuitive designs. I aim to develop full-stack apps that require proficiency in both front-end and back-end technologies.</p>
    <div className="whatido">
        <h4 className="p-3">What I Do!</h4>
        <div className="row gy-3" style={{alignItems:"baseline"}}>
  <div className="col"> <div className="card m-2">
    
    <div className="card-body p-3 ">
        <div className="about-card">
    <img className="card-img-top mb-2" src="./Front.png" style={{width:'25%'}} alt="card cap"/>
      <h5 className="card-title-3 p-3"> Front-End Development</h5></div>
     <p className="card-text p-3">
     As a Frontend Developer proficient , I possess a deep understanding of modern web development principles and practices.
     and also solid foundation in web technologies such as HTML5, CSS3, and JavaScript ES6+, enabling me to integrate frontend components seamlessly with backend services and APIs.
     I am also adept at utilizing modern development tools and libraries, including React and React Router. 
        </p>
    </div>
   
  </div></div>
  <div className="col">
  <div className="card">
    <div className="card-body p-3">
    <div className="about-card">
    <img className="card-img-top mb-2" src="./Back.png" style={{width:'25%'}} alt="card cap"/>
      <h5 className="card-title-3 p-3"> Back-End Development</h5></div>
     <p className="card-text p-3">
     As a skilled backend developer proficient in Spring Boot, I possess extensive expertise in building robust and scalable web applications. Leveraging my comprehensive understanding of Java programming and the Spring framework, I have successfully developed and maintained backend systems that power various web-based solutions. My experience includes designing and implementing RESTful APIs, integrating with databases such as MySQL</p>
    </div>

  </div>
  </div>
  <div className="w-100"></div>
  <div className="col">
  <div className="card">

    <div className="card-body p-3">
    <div className="about-card">
    <img className="card-img-top mb-2" src="./Full.png" style={{width:'25%'}} alt="card cap"/>
      <h5 className="card-title-3 p-3"> Full-Stack Development</h5></div>
     
      <p className="card-text p-3">
       
As a full-stack developer, I excel in leveraging cutting-edge technologies to deliver seamless web applications. Proficient in React and Spring Boot, I craft intuitive user interfaces and robust backend systems. With expertise in tools like VSCode, Eclipse, and Git, I ensure efficient development workflows and collaborative code management. My commitment to quality extends to comprehensive testing practices, ensuring the reliability and scalability of every project.</p>
      
    </div>

  </div>
  </div>
  <div className="col">
  <div className="card">
   
    <div className="card-body p-3">
    <div className="about-card">
    <img className="card-img-top mb-2" src="./Ex.png" style={{width:'25%'}} alt="card cap"/>
      <h5 className="card-title-3 p-3"> Project Experience</h5></div>
     <p className="card-text p-3">I've worked on different kinds of projects, like building websites and analyzing data. I can build real-world projects to apply my skills and demonstrate my capabilities . My project are personal projects, contributions to open-source projects.</p>
    </div>

  </div>
  </div>
</div>
</div>    
   
    </>
    );
}
export default About;