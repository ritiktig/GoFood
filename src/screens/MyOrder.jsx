// import React, { useState } from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// const MyOrder = () => {
//   const [orderData, setOrderData] = useState("")
//   return (
//     <>
//     <div>
//       <Navbar/>
//     </div>

// <div className='container'>

//   <div className='row'>

//     {orderData !== {} ? Array(orderData).map(data =>{
//       return (
//         data.orderData ? 
//           data.orderData.order_data.slice(0).reverse().map((item) =>{
//             return(
//               item.map((arrayData) =>{
//                 return(
//                   <div >
//                     { arrayData.Order_date ? <div class ='m-auto mt-5'>

//                       {data =arrayData.Order_date}
//                       <hr />
//                       </div>:
//                       <div className='col-12 col-md-6 col-lg-3' >
//                         <div className='card mt-3' style={{width="16rem", maxHeight: "360px"}}>\
//                           <img src={arrayData.img} className='card-img-top' alt="..." style={{height: "120px", objectFit: "fill"}}/>
//                           <div className='card-body'>
//                             <h5 className='card-title'>{arrayData.name}</h5>
//                             <div className='container w-100 p-0' style={{height: "38px"}}>
//                               <span className='m-1'>{arrayData.qty}</span>
//                               <span className='m-1'>{arrayData.size}</span>
//                               <span className='m-1'>{data}</span>
//                               <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                 ₹ {arrayData.price}/-
//                               </div>

//                             </div>

//                           </div>
//                         </div>
//                       </div>

//                       }
//                     </div>
//                 )
//               })
//             )
//           }) : ""
//       )
//     }) : ""}

//   </div>



// </div>



//     <div>
//       <Footer/>
//     </div>
//     </>
//   )
// }

// export default MyOrder




// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";


// const MyOrder = () => {
//   const [orderData, setOrderData] = useState([]);

//   const fetchMyOrder =async ()=>{
//     console.log(localStorage.getItem("userEmail"))
//     await fetch("http://localhost:5005/api/orderdata/myOrderData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
       
//       },
//       body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
//     })
//       .then(async (res) =>{
//         let response = await res.json()
//         console.log("Raw order data from api :",response)
//         await setOrderData(response.orderData)
//       })
//   }
// useEffect(()=>{
//   fetchMyOrder();
// },[])
//   return (
//     <>
//       <Navbar />

//       <div className="container">
//         <div className="row">
//           {orderData && orderData.length > 0 ? (
//             orderData.map((data, index) =>
//               data.orderData
//                 ? data.orderData.order_data
//                     .slice(0)
//                     .reverse()
//                     .map((item, i) =>
//                       item.map((arrayData, j) => {
//                         if (arrayData.Order_date) {
//                           return (
//                             <div
//                               key={`date-${index}-${i}-${j}`}
//                               className="m-auto mt-5"
//                             >
//                               <h5>{arrayData.Order_date}</h5>
//                               <hr />
//                             </div>
//                           );
//                         } else {
//                           return (
//                             <div
//                               key={`card-${index}-${i}-${j}`}
//                               className="col-12 col-md-6 col-lg-3"
//                             >
//                               <div
//                                 className="card mt-3"
//                                 style={{
//                                   width: "16rem",
//                                   maxHeight: "360px",
//                                 }}
//                               >
//                                 <img
//                                   src={arrayData.img}
//                                   className="card-img-top"
//                                   alt={arrayData.name}
//                                   style={{
//                                     height: "120px",
//                                     objectFit: "fill",
//                                   }}
//                                 />
//                                 <div className="card-body">
//                                   <h5 className="card-title">
//                                     {arrayData.name}
//                                   </h5>
//                                   <div
//                                     className="container w-100 p-0"
//                                     style={{ height: "38px" }}
//                                   >
//                                     <span className="m-1">{arrayData.qty}</span>
//                                     <span className="m-1">{arrayData.size}</span>
//                                     <span className="m-1">
//                                       {arrayData.date}
//                                     </span>
//                                     <div className="d-inline ms-2 h-100 w-20 fs-5">
//                                       ₹ {arrayData.price}/-
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         }
//                       })
//                     )
//                 : null
//             )
//           ) : (
//             <p className="text-center mt-5">No orders found.</p>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default MyOrder;


import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MyOrder = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    await fetch("http://localhost:5005/api/orderdata/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
    })
      .then(async (res) => {
        let response = await res.json();
        setOrderData(response.orderData || []);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "red" }}>
          My Orders
        </h2>

        {orderData.length > 0 ? (
          orderData.map((data, index) => (
            <div
              key={index}
              className="mb-5 p-4 shadow rounded"
              style={{ backgroundColor: "#fff8f0" }}
            >
              <h4 className="fw-bold text-primary">
                Order #{index + 1}
              </h4>

              {data.order_data && data.order_data.length > 0 ? (
                data.order_data.map((orderItems, i) => (
                  <div key={i} className="mb-4">
                    {orderItems[0]?.Order_date && (
                      <h6 className="mt-3 text-muted">
                        📅 Date:{" "}
                        {new Date(
                          orderItems[0].Order_date
                        ).toLocaleDateString()}
                      </h6>
                    )}

                    <div className="row g-3 mt-2">
                      {orderItems
                        .filter((item) => !item.Order_date)
                        .map((item, j) => (
                          <div
                            key={j}
                            className="col-12 col-sm-6 col-md-4 col-lg-3"
                          >
                            <div
                              className="card h-100 shadow-sm"
                              style={{
                                borderRadius: "10px",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={item.img}
                                className="card-img-top"
                                alt={item.name}
                                style={{
                                  height: "150px",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="card-body">
                                <h6 className="card-title fw-bold">
                                  {item.name}
                                </h6>
                                <p className="mb-1">
                                  Qty: <strong>{item.qty}</strong>
                                </p>
                                <p className="mb-1">
                                  Size: <strong>{item.size}</strong>
                                </p>
                                <p className="mb-1 text-success fw-bold">
                                  ₹ {item.price}/-
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>No items found for this order.</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center mt-5">No orders found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyOrder;



