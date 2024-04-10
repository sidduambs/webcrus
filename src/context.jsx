import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

// Create context for global state
const AppContext = React.createContext();

// Define API URLs
const API_URLS = [
    "https://basic-api-for-sample-checks.onrender.com/",
    "https://basic-api-for-sample-checks.onrender.com/",
    "https://basic-api-for-sample-checks.onrender.com/",
    "https://basic-api-for-sample-checks.onrender.com/",
    "https://basic-api-for-sample-checks.onrender.com/",
    "https://basic-api-for-sample-checks.onrender.com/",
    "https://basic-api-for-sample-checks.onrender.com/",
];

// Initial state
const initialState = {
    name: "",
    image: "",
    services: [],
    apiData: {
        api1: [],
        api2: [],
        api3: [],
        api4: [],
        api5: [],
        api6: [],
        api7: []
    }
};

// AppProvider component to manage global state
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to fetch data from API
    const fetchDataFromAPI = async (url, apiIndex) => {
        try {
            const response = await axios.get(url);
            dispatch({ type: `SET_API_${apiIndex + 1}_DATA`, payload: response.data });
        } catch (error) {
            console.error(`Error fetching data from API ${apiIndex + 1}:`, error);
        }
    };

    // UseEffect to fetch data from all APIs when component mounts
    useEffect(() => {
        API_URLS.forEach((url, index) => fetchDataFromAPI(url, index));
    }, []);

    // Dispatching action to update state for home page
    const updateHomePage = () => {
        dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Karnataka Police",
                image: "./images/policecop.svg",
            }
        });
    };

    return (
        <AppContext.Provider value={{ ...state, updateHomePage }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to access global context
const useGlobalContext = () => {
    return useContext(AppContext);
};

// MyComponent
const MyComponent = () => {
    // Access global context
    const { apiData } = useGlobalContext();

    // Destructure API data
    const { api1, api2, api3, api4, api5, api6, api7 } = apiData;

    return (
        <div>
            {/* Display data from API 1 */}
            <h2>Data from API 1</h2>
            <ul>
                {api1.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

            {/* Display data from API 2 */}
            <h2>Data from API 2</h2>
            <ul>
                {api2.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

            {/* Display data from API 3 */}
            <h2>Data from API 3</h2>
            <ul>
                {api3.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

            {/* Display data from API 4 */}
            <h2>Data from API 4</h2>
            <ul>
                {api4.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

            {/* Display data from API 5 */}
            <h2>Data from API 5</h2>
            <ul>
                {api5.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

            {/* Display data from API 6 */}
            <h2>Data from API 6</h2>
            <ul>
                {api6.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>

            {/* Display data from API 7 */}
            <h2>Data from API 7</h2>
            <ul>
                {api7.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export { AppProvider, useGlobalContext, MyComponent };