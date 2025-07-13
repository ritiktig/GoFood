import React,{ useEffect,useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
function Card(props) {
let dispatch = useDispatchCart();
let data=useCart()


const priceRef=useRef();
  let options=props.options
  let priceoptions =Object.keys(options)
  let fooditem =props.fooditem
  const [qty,setqty] =useState(1)
  const [size,setsize]=useState("")
  // const handleaddtocart= async()=>{
  //   let food =null;
  //   // 
  //   for(const item of data){
  //     // previousoly stored item is present when we are adding the same item again, then we will increase the quantity of that item
  //     if(item.id === props.fooditem._id){
  //       // storing that item in food variable
  //       food =item;
  //       break;
  //     }
  //   }
  //   // condation check when food is not empty then two condation arise one to 
  //   // to update the quantity of the item in the present item in the cart and second to add the new item when the size is changed 
  //   // food is not empty means we are trying to add new item then it check for the two condation one to update the quantity and second to add new item
  //   if (food){
  //     // check for the size if same then change the quantity 
  //     if(food.size === size){
  //       await dispatch({type:"UPDATE",id:fooditem._id,price:finalPrice,qty:qty})
  //       return
  //     }
  //     // if the size is changed then add new item 
  //     else if(food.size !== size){
  //       await dispatch({type:"ADD",
  //               id:fooditem._id, name:fooditem.name,price: finalPrice,qty:qty,size:size,img:fooditem.img})
  //               await console.log(data);
  //               return
  //     }
    
      
  //   }
  //   await dispatch({type:"ADD",
  //               id:fooditem._id, name:fooditem.name,price: finalPrice,qty:qty,size:size,img:fooditem.img})
  //               await console.log(data);
  //   }


  // chatgpt handleclick function

  const handleaddtocart = async () => {
  let food = null;

  // Search for the same item with the same size
  for (const item of data) {
    if (item.id === fooditem._id && item.size === size) {
      food = item;
      break;
    }
  }

  // If found, update quantity and price
  if (food) {
    await dispatch({
      type: "UPDATE",
      id: fooditem._id,
      price: finalPrice,
      qty: qty,
      size: size, // include size if your reducer checks it
    });
  } else {
    // New item (either different id or same id but different size)
    await dispatch({
      type: "ADD",
      id: fooditem._id,
      name: fooditem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: fooditem.img,
    });
  }

  console.log("Cart Data:", data);
};


let finalPrice = parseInt(qty) * parseInt(options[size]);


useEffect(()=> {
    setsize(priceRef.current.value)
  }, [])
  
  
  

  
  return (
    <div>
      <div>
        <div
          className="card m-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={fooditem.img} style={{ marginLeft:"70px", height:"150px", width:"150px",objectFit:"fill"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fooditem.name}</h5>
          
            <div className="container w-100">
              <select className="m-2 h-100 bg-success bg-success rounded" onChange={(e)=> setqty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option Key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success  bg-success rounded" ref={priceRef} onChange={(e)=> setsize(e.target.value)}>
                {priceoptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="d-inline h-100 fs-5">
                {finalPrice}/-
                </div>
            </div>
            <hr></hr>
            <button className={'btn btn-success justify-center ms-2'} onClick={handleaddtocart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
