import React from "react";
import BreweryItem from "./BreweryItem";

const BreweryList = () => {
    return ( 
        <>
        <h2>Brewery List</h2>
        <BreweryItem location = "Glasgow">I love Glasgow!</BreweryItem>
        <BreweryItem location = "London">I love London!</BreweryItem>
        <BreweryItem location = "Manchester">I love MCR!</BreweryItem>
        </>
     );
}
 
export default BreweryList;