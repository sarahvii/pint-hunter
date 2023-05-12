import React, { useState } from "react";
import BreweryList from "../components/BreweryList";

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

        return ( 
            <>
            <h1>Pint Finder Box</h1>
            <BreweryList breweryItems={breweryItems}/>
            </>
        );


}
 
export default PintFinderBox;