import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";


const home = () => {
  const [search,setsearch] =useState(" ")
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditems] = useState([]);
  const loaddata = async () => {
    let response = await fetch("http://localhost:5005/api/display/fooddata", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response[0], response[1]);
    setfooditems(response[0]);
    setfoodcat(response[1]);
  };
  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>

      <div>
        <Navbar />
      </div>


      <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" style={{objectFit:"contain !important"}} >
      <div>
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <div className="d-flex justify-content-center" role="search" value={search} onChange={(e)=>setsearch(e.target.value)}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success"  type="submit">Search</button>
    </div>
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
      </div>


      <div className="container">
        {foodcat.length > 0 &&
          
          foodcat.map((data) => ( <div className='row mb-3'>
            <div key={data._id} className="fs-3 m-3">
              {data.CategoryName}
             
            </div>
            <hr />
              {fooditem.length >0 &&
              fooditem
              .filter((item)=> item.CategoryName === data.CategoryName  && (item.name.toLowerCase().includes(search.toLowerCase())))
              .map((filteritems)=>(
                  <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                    <Card fooditem={filteritems}
                    options={filteritems.options[0]}
                    
                    ></Card>
                    </div>
              ))
            }

            </div>

          ))}
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default home;
