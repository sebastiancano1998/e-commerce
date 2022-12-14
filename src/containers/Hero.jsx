import React from "react";
import { useSelector } from "react-redux";
import HeroCard from "../../public/assets/logos/hero-card.jpeg";
import LoginButton from "../atoms/Buttons/LoginButton";
import SignupButton from "../atoms/Buttons/SignupButton";

const Hero = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className="flex w-full pt-20 text-p5">
      <div className=" w-11/12 m-auto py-20 flex flex-col justify-center items-center  gap-12 sm:py-40 xl:w-1/2  ">
        <div className="self-center px-10 xl:px-0 ">
          <h1 className='text-black text-medium  xl:text-start xl:pl-12  lg:text-6xl xl:text-5xl  sm:text-5xl text-center after:content-["everything\00a0you\00a0want"] after:text-p2'>
            A place where you can find&nbsp;
          </h1>
        </div>
        <p className="text-lpink text-sm  xl:text-start   text-center sm:text-base sm:px-12">
        </p>
        {!currentUser&& (
          <div className=" flex gap-4 max-w-xs  items-center justify-center w-3/4 xl:self-start xl:pl-12">
            <LoginButton></LoginButton>
            <SignupButton></SignupButton>
          </div>
        )}
      </div>
      <div className="hidden xl:flex items-center xl:w-1/2 ">
        <img src={HeroCard} className="rounded-xl w-4/5 m-auto"></img>
      </div>
    </div>
  );
};

export default Hero;
