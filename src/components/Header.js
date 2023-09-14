import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userAvatar } from "../utils/constants";
import {  toggleGptSearchButton } from "../utils/gptSlice";
import { SupportedLanguages } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
import gptSlice from './../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch=useSelector((store)=>store.gpt.showGptSearch)
  console.log("firstMMMMMMMMMMMMMMMMMM",gptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //removed navigate("/") because in header useEffect if user null it will navigate to "/"
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        
        dispatch(removeUser());
        navigate("/"); //header inside body, so navigate works, in every page , when user not present  redirect to the login page
      }
    });

    // un Subscribe when component unmount
    return () => unSubscribe();
  },[]);

 const  handleGptSearch=()=>{

  dispatch(toggleGptSearchButton())
 }
 const handleLanguage=(e)=>{
  e.preventDefault()
  dispatch(changeLanguage(e.target.value))
  
 }
  return (
    <div className="w-full flex justify-between absolute px-8 py-2 bg-gradient-to-tl from-black z-10 ">
      <img className="ml-16 w-36" src={logo} alt="logo" />
      {user && (
        <div className="flex pr-2 text-center h-16  ">
         {gptSearch &&<select className=" p-2 mt-2  bg-gray-400 rounded-lg text-white " onChange={handleLanguage}>
           
           {SupportedLanguages?.map((SupportedLanguages)=>(
            <option className=" text-white" key={SupportedLanguages.identifier} value={SupportedLanguages.identifier}>{SupportedLanguages.name}</option>))
           }
            </select>} 
          <button className="py-2 px-4 font-semibold bg-orange-600 rounded-lg mx-4 mt-2 text-white" onClick={()=>handleGptSearch()}> {gptSearch?("Home Page"):  ("GPT- Search")}</button>
          <div>
          
          {user.photoURL?(<img className="h-14 w-14 rounded-lg  m-2" src={(user?.photoURL)} alt="" />):(<img className="h-14 w-14 rounded-lg  m-2" src={userAvatar} alt="" />)}
            {/* <h4 className="text-white m-2">{(user?.displayName)}</h4> */}
          </div>
          <button  className="bg-red-600 font-semibold py-2 px-4 rounded-lg mx-4 mt-2 text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
