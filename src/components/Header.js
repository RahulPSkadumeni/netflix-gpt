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
        console.log("remove user from store");
        dispatch(removeUser());
        navigate("/"); //header inside body, so navigate works, in every page , when user not present  redirect to the login page
      }
    });

    // un Subscribe when component unmount
    return () => unSubscribe();
  });
  return (
    <div className="w-full flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 ">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 ">
          <div>
          
          {user.photoURL?(<img className="h-12 w-12 m-3" src={(user?.photoURL)} alt="" />):(<img className="h-12 w-12 m-3" src={userAvatar} alt="" />)}
            <h4 className="text-white">{(user?.displayName)}</h4>
          </div>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
