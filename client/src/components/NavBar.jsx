import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/appContext";
import { useEffect } from "react";
export const NavBar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);
  return (
    <div className="flex items-center justify-between mx-4 lg:mx-44 py-3">
      <Link to="/">
        {" "}
        <img className="w-32 lg:w-44" src={assets.logo} alt="Logo" />
      </Link>

      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <>
          {" "}
          <button
            onClick={() => openSignIn()}
            className="bg-zinc-800 text-white flex items-center gap-4  px-4 py-2 sm:px-8 sm:py-3  text-sm rounded-full"
          >
            Get Started{" "}
            <img className="w-3 sm:w-4 " src={assets.arrow_icon} alt="icon" />
          </button>
        </>
      )}
    </div>
  );
};
