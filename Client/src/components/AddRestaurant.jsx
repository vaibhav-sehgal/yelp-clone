import React, { useState, useContext } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantContext";

const AddRestaurant = () => {
  
    const{addRestaurants}=useContext(RestaurantsContext);
    const[name,setName]=useState("")
    const[location,setLocation]=useState("")
    const[priceRange,setPriceRange]=useState("Price Range")

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
           const response= await RestaurantFinder.post("/",{
               name:name ,
               location:location,
               price_range:priceRange

            })
            addRestaurants(response.data.data.resta)
            console.log(response);

        } catch (error) {
            
        }

    }

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              
              value={name}
              onChange={e=> setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={e=> setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={e=> setPriceRange(e.target.value)}
              className="custom-select "
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary mr-sm-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
