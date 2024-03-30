


const Contact=()=>{
  const submitted=(event)=>{
    event.preventDefault();
    if(document.forms["myForm"]["name"].value==''){
      return window.alert("Enter the name");
    }
    else if(document.forms["myForm"]["email"].value==''){
      return window.alert("Enter the email");
    }
    else if(document.forms["myForm"]["textarea"].value==''){
      return window.alert("Enter the message");
    }else
    return window.alert("i will contact you soon");
   }
    return(
        <><h2 className="contact-title p-4 ">Contact</h2>
        <h6 className="contact-subtitle p-1 px-4">I'm Always Free To Discussing Product
development work or partnerships.</h6>
<form  onSubmit={submitted}  name="myForm">
        <div className="contactform mb-3">
  <label for='name' className="form-label me-2"  >Name</label>
  <input type="text" name="name" id="name" placeholder="Name"/>
</div>
<div className="contactform mb-3">
  <label for='email' className="form-label me-2" >Email</label>
  <input type="email" name="email" id="email" placeholder="www.@email.com"/>
</div>
<div className="contactform mb-3">
 
  <textarea rows={4} cols={30} name="textarea" id="textarea" placeholder="mesaage me" />
</div>
<input type="submit" className="p-2 submit-contact"/>
</form>


   
  
        </>
    )
}
export default Contact;