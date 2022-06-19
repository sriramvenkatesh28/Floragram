import React, { useState, useEffect } from 'react'
import { doc, getDoc, collection,getDocs  } from "firebase/firestore";
import { db } from "../firebase"
import Dropdown from "../components/Dropdown"
import axios from '../axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCityData, setSelectedCityData] = useState([]);

  const getSoilData = async () => {
    const docs = collection(db, "soil_data");

    const citiesQuerySnapshot = await getDocs(docs);
    const citiesArray = citiesQuerySnapshot.docs.map(doc => doc.id);
    setCities(citiesArray);
  }

  const getSelectedCitySoilData = async (city) => {
    const docRef = doc(db, "soil_data", city);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSelectedCityData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getSoilData();
  }, []);

  useEffect(() => {
    if(selectedCity) {
      getSelectedCitySoilData(selectedCity);
    }
  },[selectedCity]);

  const handleCitySelection = (event) => {
    setSelectedCity(event.target.value);
  };

  const sendToServer = async () => {
    try {
      const response = await axios.post("/city-data", selectedCityData);
      console.log(response);
    } catch(error) {
      console.error(error.message);
    }
  }
  
  return (
    <div  style={{padding: '2rem'}}>
      <Dropdown label="City" options={cities} value={selectedCity} onChange={handleCitySelection} />
      <div style={{marginTop: '2rem'}}>
        <p>Nitrogen: {selectedCityData.N}</p>
        <p>Phosphorus: {selectedCityData.P}</p>
        <p>Humidity: {selectedCityData.humidity}</p>
        <p>Potassium: {selectedCityData.K}</p>
        <p>Temperature: {selectedCityData.temperature}</p>
        <p>pH: {selectedCityData.ph}</p>
        <p>Rainfall: {selectedCityData.rainfall}</p>
      </div>
      <button onClick={sendToServer}>Send to Server</button>
    </div>
  )
}

export default Home

// GET
// /get-data
// FE hits /get-data
// Server will have a function to handle this route to fetch the data and send it back to FE