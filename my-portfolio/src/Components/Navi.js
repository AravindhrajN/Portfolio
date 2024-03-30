


const Navi=({handleclick})=>{




  const handleClickButton = (name) => {
    const id1=name;
    const elements = document.getElementsByClassName('bts-navi');
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'white';
        elements[i].style.color = 'black';
        
    }
    document.getElementById(id1).style.backgroundColor='#D70040';
    document.getElementById(id1).style.color='white';

  
    
 
   
    handleclick(name); 
  };

    return(

        <ul className="nav nav-pills border border-dark">
  <li className="nav-item   border border-2 border-primary">
    <button className="  bts-navi  bts-navi-current"  id='about'   onClick={ () => handleClickButton("about")}>About</button>
  </li>
  <li className="nav-item  ">
    <button className="nav-link   bts-navi"  id='resume' onClick={ () =>handleClickButton("resume")}>Resume</button>
  </li>
  <li className="nav-item  ">
    <button className="nav-link   bts-navi" id='project' onClick={ () => handleClickButton("project")}>Project</button>
  </li>
  <li className="nav-item  ">
    <button className="nav-link  bts-navi" id='contact'  onClick={ () => handleClickButton("contact")}>Contact</button>
  </li>
</ul>
    )

}
export default Navi;