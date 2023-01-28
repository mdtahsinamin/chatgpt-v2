import { getAuth } from "firebase/auth";
import React from "react";
import app from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(app);
const UserProfile = ({ toggle }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div
      className={`flex gap-5 items-center ${
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-white rounded-xl p-2"
      }`}
    >
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img
          src={user.photoURL}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="text-xl text-black">{user?.displayName}</h3>
        <span className="text-[0.75rem] opacity-60 text-black">
          {user?.email}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
