// import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Card from "../components/Card";
// import Footer from "../components/Footer";


// const home = () => {
//   const [search,setsearch] =useState(" ")
//   const [foodcat, setfoodcat] = useState([]);
//   const [fooditem, setfooditems] = useState([]);
//   const loaddata = async () => {
//     let response = await fetch("http://localhost:5005/api/display/fooddata", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     response = await response.json();
//     console.log(response[0], response[1]);
//     setfooditems(response[0]);
//     setfoodcat(response[1]);
//   };
//   useEffect(() => {
//     loaddata();
//   }, []);

//   return (
//     <div>

//       <div>
//         <Navbar />
//       </div>


//       <div>
//       <div id="carouselExampleFade" class="carousel slide carousel-fade" style={{objectFit:"contain !important"}} >
//       <div>
//         <div className='carousel-caption' style={{zIndex:"10"}}>
//         <div className="d-flex justify-content-center" role="search" value={search} onChange={(e)=>setsearch(e.target.value)}>
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success text-white bg-success"  type="submit">Search</button>
//     </div>
//         </div>
//       </div>
//   <div className="carousel-inner" id='carousel'>
//     <div class="carousel-item active">
//       <img src="https://picsum.photos/100/60/?Burger" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://picsum.photos/200/300/?pizza" class="d-block w-100"style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://picsum.photos/200/300/?paneer" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//     </div>
//       </div>


      

//       <div>
//         <Footer />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default home;






import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [search, setsearch] = useState("");
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
    setfooditems(response[0]); // food items array
    setfoodcat(response[1]);   // category array
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ objectFit: "contain !important" }}
      >
        <div>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div
              className="d-flex justify-content-center"
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/100/60/?Burger"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/300/?pizza"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/300/?paneer"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
      </div>

      {/* Food Cards */}
      <div className="container">
        {foodcat.length > 0 ? (
          foodcat.map((cat) => (
            <div key={cat._id} className="row mb-3">
              <div className="fs-3 m-3">{cat.CategoryName}</div>
              <hr />
              {fooditem
                .filter(
                  (item) =>
                    item.CategoryName === cat.CategoryName &&
                    item.name
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item._id}
                    className="col-12 col-md-6 col-lg-3"
                  >
                    <Card
                      fooditem={item}
                      options={item.options[0]} // Adjust if options is an object already
                    />
                  </div>
                ))}
            </div>
          ))
        ) : (
          <p className="text-center mt-5">Loading...</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
