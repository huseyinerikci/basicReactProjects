import React from "react";
import UpdateProfile from "../components/UpdateProfile";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="bg-indigo-400 w-full h-[600px]  max-h-screen  text-white  grid place-items-center mt-14 gap-y-4 py-9 rounded relative">
      <p className="absolute left-5 top-5">
        <Link
          to={-1}
          className="hover:text-sm transition cursor-pointer border p-2"
        >
          Back
        </Link>
      </p>
      <UpdateProfile />
    </div>
  );
};

export default Settings;
