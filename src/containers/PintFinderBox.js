import React, { useState } from "react";
import BreweryList from "../components/BreweryList";
import LocationForm from "../components/LocationForm";

const PintFinderBox = () => {

    const [breweryItems, setBreweryItems] = useState(
        [
            {
                id: 1,
                location: "Glagsow",
                text: "I love Glasgow!"
            },
            {
                id: 2,
                location: "Liverpool",
                text: "I love Liverpool!"
            },
            {
                id: 3,
                location: "Manchester",
                text: "I love MCR!"
            }

        ]

    )

    const addBreweryItem = (submittedBreweryItem) => {
        submittedBreweryItem.id = Date.now();
        const updatedBreweryItems = [...breweryItems, submittedBreweryItem];
        setBreweryItems(updatedBreweryItems);
    }

        return ( 
            <>
            <h1>Pint Finder Box</h1>
            <BreweryList breweryItems={breweryItems}/>
            <LocationForm onLocationSubmit={(breweryItem) => addBreweryItem(breweryItem)}/>
            </>
        );


}
 
export default PintFinderBox;