import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo_Url } from "../utils/constants";
import { gpttoggleview } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const showgpt = useSelector((store) =>store.gpt.gptToggle)

  const handleGptToggle = ()=>{
dispatch(gpttoggleview())
  }

  return (
    <div className="flex flex-col md:flex-row justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 text-white">
      <img
        className="w-44"
        src={Logo_Url}
        alt="logo"
      />
      {user && (
        <div className="flex justify-between p-4">
          <button className="mx-2 px-2 bg-amber-700 rounded-lg" onClick={handleGptToggle}>{showgpt ? "Home Page" : "GPT Search"}</button>
          <p className="m-2">Hi,{user.displayName}</p>
          {/* <img 
            alt="usericon"
            src="https://occ-0-4157-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          /> */}
          <button className="whitespace-nowrap ml-2" onClick={logoutHandler}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
