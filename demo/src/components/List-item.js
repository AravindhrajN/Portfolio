
const Listitem=()=>{
   
    return(
      <div className="container-lg-3 clearfix">
  <div className="row gx-0 clearfix" >
    <div className="col-6 col-lg-3 bg-success clearfix" ><div className="card  border-1 border-success card-main " >
  <img src="./pictures/Sunscreen-1.png" className="card-img-top "   alt="sunscreen"/>
  <div className="card-body "  >
    <h5 className="card-title text-success " >Sunscreen </h5>
    <p className="card-text">Say Hello to the Sun, Our Natural Sunscreen to protect us from sunlight </p>
    <a href="www.google.com" className="btn btn-danger">Click Me</a>
  </div>
</div></div>
    <div className="col-6  col-lg-3  bg-dark clearfix "><div className="card border-1 border-dark card-main"  >
  <img src="./pictures/soap-1.png" className="card-img-top"  alt="soap"/>
  <div className="card-body" >
  <h5 className="card-title  ">Soap</h5>
    <p className="card-text"> Say Bye to Dust, Our Skin Care Beauty Bar, which makes you dust-free from day</p>
    <a href="www.google.com" className="btn btn-danger">Click Me</a>
  </div>
</div></div>
    <div className="col-6  col-lg-3   bg-secondary clearfix "><div className="card border-1 border-secondary card-main "  >
  <img src="./pictures/Moisturizer-1.png" className="card-img-top" alt="moisturizer"/>
  <div className="card-body" >
    <h5 className="card-title  text-secondary">Moisturizer</h5>
    <p className="card-text">Be fresh with our moisturizer; it prevents dryness and makes you chill.</p>
    <a href="www.google.com" className="btn btn-danger">Click Me</a>
  </div>
</div></div>
    <div className="col-6 col-lg-3    bg-warning "><div className="card border-1 border-warning card-main"  >
  <img src="./pictures/bodyscrub-1.png" className="card-img-top" alt="bodyscrub-1"/>
  <div className="card-body" >
    <h5 className="card-title  text-warning">Scrub</h5>
    <p className="card-text">Don't worry about darkness on your skin; our scrub products help you from it.</p>
    <a href="www.google.com" className="btn btn-danger">Click Me</a>
  </div>
</div></div>
  </div>
 
</div>
)
}

export default Listitem;