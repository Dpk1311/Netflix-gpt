import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValid } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LoginBackgroundImgURL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const dispatch = useDispatch();

  const toggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    // console.log(Email.current.value);
    // console.log(Password.current.value);
    const message = isValid(Email.current.value, Password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //SignupLogic
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
             
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Signup Logic
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover w-screen"
          src={LoginBackgroundImgURL}
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-3/12 w-[70%] md:p-12 p-5 absolute bg-black my-36 md:my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold md:text-3xl text-xl py-2 md:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="md:p-4 p-2 md:my-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={Email}
          type="text"
          placeholder="Email Address"
          className="md:p-4 p-2 md:my-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={Password}
          type="password"
          placeholder="Password"
          className="md:p-4 p-2 md:my-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-600 font-semibold">{errorMessage}</p>
        <button
          className="md:my-6 my-3 md:p-6 p-3 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="md:p-2 p-1 md:m-2 m-1 cursor-pointer" onClick={toggle}>
          {isSignInForm
            ? "New to NetFlix? SignUp Here"
            : "Already have a Accout? SignIn Here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
