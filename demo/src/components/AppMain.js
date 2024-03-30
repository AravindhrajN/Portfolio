import Listitem from "./List-item";
import Main2 from "./AppMain-2";
import Footermain from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const Main=()=>{

      window.addEventListener('scroll', function() {
            var scrolled = window.scrollY;
            var parallax = document.querySelector('.card');
            var parallaxContent = document.querySelector('.card-img-overlay');
            parallax.style.transform = 'translateY(' + (scrolled * -0.4) + 'px)';
            parallaxContent.style.transform = 'translateY(' + (scrolled * 0.6) + 'px)';
        });
        

 return(
 <>
        <div className='Main ' >
        <div className="card bg-dark text-white card-main-1">
  <div className="card-img-overlay card-img-overlay-main mt-10">
    <h5 className="card-title card-main-1-title">All Skin <em style={{fontFamily:'"CenturyOldStyleItalic","Times New Roman",serif'}}>essence ---</em></h5>
    <p className="card-text card-main-1-text ">Revitalize your skin with our essential skincare lineup, meticulously chosen to combat dryness and embrace hydration. As the cold weather sets in, our hand-picked essentials provide a protective barrier,
 leaving your skin supple and radiant. Elevate your routine with nourishing formulas, ensuring your skin receives the love it deserves.
 Say goodbye to dryness; say hello to essential hydration.</p>
    <p className="card-text card-main-1-text ">Scroll Down</p>
  </div>
  <img src="./pictures/pexels-sora-shimazaki-5938648.jpg" className="card-img-main" alt="card_img"/>
</div>
<section >
            <Listitem/>
           </section>
           <section>
            <Main2/>
           </section>
         
            <Footermain />
           
        </div>    

         
           
           </>
      

     )
}

export default Main;