import React from 'react'

function Crosule() {
  return (
    <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" style={{objectFit:"contain !important"}} >
      <div>
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success"  type="submit">Search</button>
    </form>
        </div>
      </div>
  <div className="carousel-inner" id='carousel'>
    <div class="carousel-item active">
      <img src="https://picsum.photos/100/60/?Burger" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/200/300/?pizza" class="d-block w-100"style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/200/300/?paneer" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    


  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Crosule
