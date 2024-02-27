import React, { useEffect } from "react";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {

  const dispatch = useDispatch();
  

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email,displayName } = user;
        dispatch(addUser({ uid:uid,email:email,displayName:displayName}));
       
      } else {
        dispatch(removeUser());
       
      }
    });
  },[])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
