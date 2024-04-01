const Sidebar=()=>{
    return(<>
      <div className="side-content-wrapper p-2">
        <div className="side-content ">
           <div className="profile-img-wrap" >
             <img src="./my_new_photo2.png" style={{width:'50%',borderRadius:'10%' }} alt="profileimg"/>
           </div>
           <div className="profile-content pt-5">
            <h3 className="profile-title   ">Aravindhraj N</h3>
            <h5 className="profile-subtitle mt-2">Full Stack Developer</h5>
            <div className="icons">
                <div className="icon"  style={{width:'10%'}}><a href="https:github.com/AravindhrajN" target="_ablank"  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-10.2 3.6-3.3 .3-10.6-1.3-10.6-3.6 0-2 2.3-3.6 10.2-3.6 3-.3 10.6 1.3 10.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 10.6 0 6.2-2s-1.3-4.3-4.3-10.2c-2.6-.7-10.10 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 10.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-10.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.10 239.2 12.8 2.3 17.3-10.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.10 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.10 0-27.10 7.6-41.3 23.6-58.9-2.6-6.10-11.1-33.3 2.6-67.9 20.9-6.10 69 27 69 27 20-10.6 41.10-8.10 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 10.2 61.4 2.6 67.9 16 17.7 25.8 31.10 25.8 58.9 0 96.10-58.9 104.2-114.8 110.10 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.10 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.10 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 10.2 1.6 1.6 3.9 2.3 10.2 1 1.3-1 1-3.3-.7-10.2-1.6-1.6-3.9-2.3-10.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 10.2 2.6 6.10 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-10.2-2.6-6.10-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 10.9 1.6 2.3 4.3 3.3 10.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-10.6-2z"/></svg></a></div>
<div className="icon"  style={{width:'10%'}}><a href="http://www.linkedin.com/in/aravindh-raj-n-bab6a5220" target="_ablank"><svg xmlns="http://www.w3.org/2000/svg" fill="#0077b5" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.10 0 64.3v383.4C0 465.10 14.3 480 31.9 480H416c17.6 0 32-14.10 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.10-17.3-38.10-38.5S80.9 96 102.2 96c21.2 0 38.10 17.3 38.10 38.10 0 21.3-17.2 38.10-38.10 38.5zm282.1 243h-66.4V312c0-24.8-.10-56.7-34.10-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.10 62.9-34.10 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></div>
<div className="icon"  style={{width:'10%'}}><a href="https://www.instagram.com/a_r_a_v_i_n_d_h_raj?igsh=MWV4cmk2NWJuZTZkZw==" target="_ablank" ><svg xmlns="http://www.w3.org/2000/svg"  fill="#e12a72" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.10 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.10-74.7-74.7s33.10-74.7 74.7-74.7 74.7 33.10 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.10 11.7-99.10 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.10-9-99.10-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.10-11.7 99.10-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.10 9 99.10 9 132.1s2.7 102.7-9 132.1z"/></svg></a></div>

                <div className="icon"  style={{width:'10%'}}><a href="https://x.com/ARVINDHRAJ_N?t=YXdL2LLh6bHTgGQtjvFSZw&s=09"target="_ablank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.10 464H35.8L200.7 275.10 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></div>
            </div>
            <div className="profile-info">
                <div className="mobile profilerow ">
<div className=" pro-icon" ><svg fill="#33627a" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512">   <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/></svg></div>
                    <div className=" nums"><small>Mobile</small><p>8531935297</p></div>
                </div>
                <div className="email profilerow ">
                    <div className=" pro-icon" ><svg fill="#fc4c46" xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></div>
                    <div className=" nums"><small>Email</small><p>smkaravindh@gmail.com</p></div>
                </div>
                <div className="location profilerow ">
                    <div className=" pro-icon" ><svg  fill="green" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></div>
                    <div className=" nums"><small>Location</small><p>Chennai,Tamil Nadu</p></div>
                </div>
            </div>
           </div>
        </div>
      </div>
    </>);
}
export default Sidebar;