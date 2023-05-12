import React from "react";

const BreweryItem = ({location, children}) => {
    return ( 
        <>
        <h4>{location}</h4>
        <p>{children}</p>
        </>
     );
}
 
export default BreweryItem;