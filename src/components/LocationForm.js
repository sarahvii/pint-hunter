import React, { useState } from "react";

const LocationForm = ({onLocationSubmit}) => {

    const [location, setLocation] = useState("");
    const [text, setText] = useState("");

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const locationToSubmit = location.trim();
        const textToSubmit = text.trim();
        if (!locationToSubmit || ! textToSubmit) {
            return
        }
        
        onLocationSubmit({
            location: locationToSubmit,
            text: textToSubmit
        });

        setLocation("");
        setText("");
    }

    return (
        <form className="brewery-form" onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="enter location"
            value={location}
            onChange={handleLocationChange}
            />
            <input
            type="text"
            placeholder="I love..."
            value={text}
            onChange={handleTextChange}
            />
            <input
            type="submit"
            value="post"
            />
        </form>

    )
}

export default LocationForm;