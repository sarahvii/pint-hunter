import React from "react";

const BreweryItem = ({location, children}) => {
    return ( 
        <>
        <h3>Brewery Item</h3>
        <h4>{location}</h4>
        <p>{children}</p>
        </>
     );
}
 
export default BreweryItem;