


const Navi=({handleclick})=>{




  const handleClickButton = (name) => {
    const id1=name;
    const elements = document.getElementsByClassName('bts-navi');
    const elements1 = document.getElementsByClassName('avg');
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'white';
        elements[i].style.color = 'grey';
        var ele=elements1[i];
       ele.style.fill = 'grey';
        
    }
    document.getElementById(id1).style.backgroundColor='#D70040';
    document.getElementById(id1).style.color='white';
    const svgIcon = document.getElementById(`icon-${id1}`);
    svgIcon.style.fill = 'white';

   

  
    
 
   
    handleclick(name); 
  };

    return(

        <ul className="nav nav-pills bg-light ">
  <li className="nav-item    ">
    <button className="  bts-navi  bts-navi-current"  id='about'   onClick={ () => handleClickButton("about") }><svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#abadb0"  className='avg p-2'id="icon-about" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg><span>About</span></button>
  </li>
  <li className="nav-item  ">
    <button className="nav-link   bts-navi"  id='resume' onClick={ () =>handleClickButton("resume")}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 384 512"><path fill="#abadb0" className='avg' id="icon-resume" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z"/></svg><span>Resume</span></button>
  </li>
  <li className="nav-item  ">
    <button className="nav-link   bts-navi" id='project' onClick={ () => handleClickButton("project")}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 640 512"><path fill="#abadb0" className='avg' id="icon-project" d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span>Project</span></button>
  </li>
  <li className="nav-item  ">
    <button className="nav-link  bts-navi" id='contact'  onClick={ () => handleClickButton("contact")}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 576 512"><path fill="#abadb0"  className='avg' id="icon-contact" d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/></svg><span>Contact</span></button>
  </li>
</ul>
    )

}
export default Navi;