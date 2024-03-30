
import './App.css';

function App() {
 


  return (
    <div className="App">
      <header>
        <div className="logo_holder">
          <img src="tea_logo.png"  alt="tea_logo" width="40px" height="40px" /><h4>Tea World</h4>
        </div>
        <nav className="main_menu">
        <ul>
          <li><button>Home</button></li>
          <li><button>Tea</button>
              <ul className="drop_menu">
                <li>Normal_tea</li>
                <li>Masala_tea</li>
                <li>Lemon_tea</li>
                <li>black_tea</li>
                <li>Ginger_tea</li>
                <li>peppermint_tea</li>
              </ul>
          </li>
          <li><button>Snacks</button></li>
          <li><button>Our Choices</button></li>
        </ul>
      </nav>
      <div className="cart_holder">
        <img src="cart.png" alt="cart"/>
      </div>
      </header>
   
      <section className="content_1">
       
        <div className="content_write_1">
        <h1>Choose Fresh <br></br>Taste Tea</h1>
        <button>Buy Now</button>
        </div>
        <div className="slide_img">
          <img src="chai_2.png" alt="img"/>
          <img src="chai_4.png" alt="img"/>
        </div>
      </section>
      <section className="content_2">
        <div className='row'>
          <div className='col-1'>
              <ul>
                <li>
                <h2>We offer You The Best We Have</h2>
                </li>
                <li><h2> You Chose The  <span >Masala_tea</span></h2></li>
              </ul>
                 <div className="multi_img"><img src="multi_1.jpg" alt="multi_1"></img></div>
          </div>
          <div className='col-2'>
          <h2>Choose Your Tea</h2>
          <div className="row-2">
            <div className="img"><img src="75ml.png" alt="75ml" /></div>
            <div className="img"><img src="150ml.png" alt="150ml" /></div>
            <div className="img"><img src="300ml.png" alt="300ml" /></div>
            <div className="img-price"><p> Rs.20</p></div>
            <div className="img-price"><p> Rs.40</p></div>
            <div className="img-price"><p> Rs.60</p></div>
           
          </div>
        <div className="quantity"><p>Enter The Quantity</p><input type="number" id="quantity"  placeholder="1" min="1" max="10" />
</div>  
       <div>
        <h3>You Selected Item: </h3>
        <ul>
          <li>Chai Name</li>
          <li>Chai ML</li>
          <li>Chai Quantity</li>
       
        </ul>
       </div>
       <div className="buy_cart">
         <button>Buy</button>
         <button>Cart</button>
       </div>
          </div>

        </div>
 
      </section>
      
      <section className="content_3">
        <h2>chance to have an amazing morning 
        </h2>

      </section>
      <section className="content_4">
        <h2>our customer review this month 
        </h2>

      </section>
      <section className="content_5">
        <h2>Subscribe to get updates news </h2>

      </section>
      <footer className="site_footer">
        <h2><small>Copyright &copy; 2024</small></h2>

      </footer>
      
      
    </div>
  );
}

export default App;
