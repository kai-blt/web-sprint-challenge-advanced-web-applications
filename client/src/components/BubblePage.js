import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axios/axiosWithAuth";
import { getColors } from '../api/getColors';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  //update color handler
  const updateColors = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res => {
      console.log(res.data);
      setColorList(res.data)
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
   getColors()
    .then(res => {
      console.log(res)
      setColorList(res.data)
    });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
