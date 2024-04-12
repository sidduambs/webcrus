import React from "react";
import { useGlobalContext } from "../context"; // Update the path based on your file structure

const MyComponent = () => {
    // Access global context
    const { apiData } = useGlobalContext();

    // Destructure API data
    const { api1 } = apiData;

    return (
        <div>
            {/* Display data from API 1 */}
            <h2>Data from API 1</h2>
            <ul>
                {api1.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
