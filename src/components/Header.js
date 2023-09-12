import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userAvatar } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="w-full flex justify-between absolute px-8 py-2 bg-gradient-to-tl from-black z-10 ">
      <img className="ml-16 w-36" src={logo} alt="logo" />
      {user && (
        <div className="flex pr-2 text-center h-16  ">
          <div>
          
          {user.photoURL?(<img className="h-8 w-8 m-2" src={(user?.photoURL)} alt="" />):(<img className="h-12 w-12 m-3" src={userAvatar} alt="" />)}
            {/* <h4 className="text-white m-2">{(user?.displayName)}</h4> */}
          </div>
          <button  className="bg-red-600 rounded-lg p-1 m-4 font-semibold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
