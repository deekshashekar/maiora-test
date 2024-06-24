import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3000", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("API call failed", error);
    }
  };
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
