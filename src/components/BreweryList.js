import React from "react";
import BreweryItem from "./BreweryItem";

const BreweryList = ({breweryItems}) => {

    const breweryItemNodes = breweryItems.map(breweryItem => {
        return (
            <BreweryItem location = {breweryItem.location}>{breweryItem.text}</BreweryItem>
        );
    });


    return ( 
        <>
        <h2>Brewery List</h2>
        {breweryItemNodes}
        </>
     );
}
 
export default BreweryList;