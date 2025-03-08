// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchBar = () => {
//     const [ error, setError ] = useState('');
//     const navigate = useNavigate();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [manualLocation, setManualLocation] = useState('');
    
//     const getLocation = (onSuccess) => {
//     if (navigator.geoLocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//             const { latitude, longitude } = position.coords;
//             onSuccess(latitude, longitude);
//         },
//         (err) => {
//     setError('Unable to retrieve location')
//     console.error('Error with geolocation', error);
//         }
//     )
//     } else {
//         setError('GeoLocation not supported by browser')
//     }
// };
//    const handleSearch = () => {
//         fetch(`api/search?term=${searchTerm}&latitude=${lat}&longitude=${long}`)
//         .then((response) => response.json())
//         .then((data) => {
//             navigate('/search-results',{ state: { restaurants: data } })
//         })
// };
// const handleManualSearch = () => {
//         fetch(`/api/search?term=${term}&location=${manualLocation}`)
//         .then((response) => response.json())
//         .then((data) => {
//             navigator('/search-results',{ state: { restaurants: data }})
//         })
// };

// return { handleSearch, handleManualSearch ,getLocation, error }
// };
// export default SearchBar;