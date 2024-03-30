

const Footermain=()=>{


return(
   <>
   <footer className="main-footer text-bg-dark px-2 py-3  small">
    <div className="container ">
        <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="brand-name">Women's Beauty</div>
                    <address className="small text-secondary">
                       Dummy street,Dummy city,<br/>
                       Dummy country,<br/>
                       Dummy pincode<br/>
                    </address>
                    <p className="small text-secondary">
                        dummy223@gmail.com
                    </p>
                </div>
               
                <div className="col-md-6 ">
                    <h6 className="pt-3">Follow us</h6>
                    <p>
                        <a href="facebook.com" className=" btn btn-primary rounded-pill px-md-3 d-inline-flex align-items-center me-md-2">
                        <i class="fa-brands fa-facebook me-md-2"></i>
                        <span className="d-md-block d-none ">Facebook</span></a>
                        <a href="facebook.com" className=" btn btn-secondary rounded-pill px-md-3 d-inline-flex align-items-center me-md-2">
                        <i class="fa-brands fa-twitter me-md-2"></i>
                        <span className="d-md-block d-none">X</span>
                        </a>
                        <a href="facebook.com" className=" btn btn-danger rounded-pill px-md-3 d-inline-flex align-items-center me-md-2">
                       <i class="fa-brands fa-youtube me-md-2 center"></i>
                        <span className="d-md-block d-none">YouTube</span>
                        </a>
                        <a href="facebook.com" className=" btn btn-light rounded-pill px-md-3 d-inline-flex align-items-center me-md-2">
                        <div className="insta me-md-2"><i className="fa-brands fa-instagram fa-lg p-1 " ></i></div>
                        <span className="d-md-block d-none">Instagram</span>
                        </a>
                    </p>
                </div>

    </div>
    </div>
   <div className="copy " style={{margin:'auto'}}><p style={{textAlign:'center'}}>Copyrights &copy; 2024 All Right Reserved</p></div>
   </footer>

   </>
)
}
export default Footermain;