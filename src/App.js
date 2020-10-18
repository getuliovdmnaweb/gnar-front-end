import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [yards, setYards] = useState([]);
  useEffect(()=> {
    const getYards = async () => {
     const response = await axios.get('http://localhost:8080/uploads')
     setYards(response.data);
    }
    getYards();
  },[yards])
  return <div>{JSON.stringify(yards)}</div>;
}

export default App;
