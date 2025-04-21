import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/appContext";

export const Header = () => {
  const { removeBg } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between  max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      <div>
        <h1 className="text-4xl xl:text-5xl font-bold text-neutral-700 leading-tight">
          Remove The <br className="max-md:hidden" />
          <span className="bg-gradient-to-r  from-violet-600 to-fuchsia-500 bg-clip-text text-transparent  mr-2">
            Background
          </span>
          form <br className="max-md:hidden " />
          Images For Free.
        </h1>
        <div>
          <input
            type="file"
            name=""
            id="upload1"
            accept="image/*"
            onChange={(e) => removeBg(e.target.files[0])}
            hidden
          />{" "}
          <label
            htmlFor="upload1"
            className="mt-8 inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto  hover:scale-105 transition-all duration-700"
          >
            <img src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-sm">Upload Your Image</p>
          </label>
        </div>
      </div>
      <div className="w-full  max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};
