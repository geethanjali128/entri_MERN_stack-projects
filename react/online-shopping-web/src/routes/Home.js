import React from 'react';
import   './Home.css'



  const Home = ({productItems,handleCartProducts}) => {
  
  return (
    <div>
      <div>
     <div
  id="carouselExampleIndicators"
  className="carousel slide mb-2 "
  data-bs-ride="carousel"
  
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={require('./images/img1.jpg') }  style={{height: "450px",}}  className="d-block w-100" alt="first" />
    </div>
    <div className="carousel-item" data-bs-interval="2000 ">
<img src={require("./images/img2.jpg")}   style={{height: "450px"}}  className="d-block w-100" alt="second" />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={require("./images/img3.jpg")}   style={{height: "450px"}}  className="d-block w-100" alt="third " />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
   <div className='row-container'  >{
  productItems.map((product)=>(
      <div className="card col-4"  key={product.id} style={{width: "18rem"}}>
  <img src={product.img} className="card-img-top"  alt="product"/>
  <div class="card-body"style={{textAlign: "center"}}>
    <h5 class="card-title" >{product.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" onClick={()=>handleCartProducts(product)} class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    ))
            
   } </div>
           
  </div>

  )
}

export default Home;
