import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import pic from "../images/avatar1.png";
import pic2 from "../images/Avatar2.png";
import pic3 from "../images/Avatar3.png";
import pic4 from "../images/Avatar4.png";
import pic5 from "../images/Avatar5.png";
import pic6 from "../images/Avatar6.png";
import pic7 from "../images/Avatar7.png";

const leaderboard = () => {
  
  return (
    <div className="flex md:max-w-screen-sm min-h-screen flex-col  my-auto mx-auto py-2 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10">
        <h1 className="font-bold text-center text-2xl my-5">Leaderboard</h1>
        {/* profile  */}
        <div className="bg-blue-500 rounded-md max-w-screen-sm h-48 flex flex-col justify-center items-center">
          <div className=" rounded-full">
            <Image src={pic} alt="My Image" className="w-20 h-20" />
          </div>
          <p className="text-white font-bold ">You</p>
          <p className="text-white ">3rd</p>
        </div>
        {/* List leaderboard */}
        <div>
          <p className="font-bold my-10 text-lg"> Leaderboard</p>

          <div className="md:max-w-screen-sm bg-blue-500 my-2  flex flex-row justify-between items-center px-5 py-3 rounded-md">
            <div className="flex flex-row items-center ">
              <Image src={pic2} alt="My Image" className="w-10 h-10" />
              <p className="font-bold text-white pl-10">Kevin</p>
            </div>
            <p className="font-bold text-white">1st</p>
          </div>
          {/* user 1 */}
          <div className="md:max-w-screen-sm bg-blue-500 flex my-2 flex-row justify-between items-center px-5 py-3 rounded-md">
            <div className="flex flex-row items-center ">
              <Image src={pic3} alt="My Image" className="w-10 h-10" />
              <p className="font-bold text-white pl-10">Mengly</p>
            </div>
            <p className="font-bold text-white">2nd</p>
          </div>
          {/* user 2 */}
          <div className="md:max-w-screen-sm bg-green-500 flex my-2 flex-row justify-between items-center px-5 py-3 rounded-md">
            <div className="flex flex-row items-center ">
              <Image src={pic} alt="My Image" className="w-10 h-10" />
              <p className="font-bold text-white pl-10">You</p>
            </div>
            <p className="font-bold text-white">3rd</p>
          </div>
        </div>
        {/* user 5 */}
        <div className="md:max-w-screen-sm bg-blue-500 flex my-2 flex-row justify-between items-center px-5 py-3 rounded-md">
          <div className="flex flex-row items-center ">
            <Image src={pic5} alt="My Image" className="w-10 h-10" />
            <p className="font-bold text-white pl-10">Dara</p>
          </div>
          <p className="font-bold text-white">4th</p>
        </div>
        {/* user 6 */}
        <div className="md:max-w-screen-sm bg-blue-500 flex my-2 flex-row justify-between items-center px-5 py-3 rounded-md">
          <div className="flex flex-row items-center ">
            <Image src={pic6} alt="My Image" className="w-10 h-10" />
            <p className="font-bold text-white pl-10">Elon Mask </p>
          </div>
          <p className="font-bold text-white">5th</p>
        </div>
        {/* user 7 */}
        <div className="md:max-w-screen-sm bg-blue-500 flex my-2 flex-row justify-between items-center px-5 py-3 rounded-md">
          <div className="flex flex-row items-center ">
            <Image src={pic4} alt="My Image" className="w-10 h-10" />
            <p className="font-bold text-white pl-10">Adam </p>
          </div>
          <p className="font-bold text-white">5th</p>
        </div>
        {/* user 8*/}
        <div className="md:max-w-screen-sm bg-blue-500 flex my-2 flex-row justify-between items-center px-5 py-3 rounded-md">
          <div className="flex flex-row items-center ">
            <Image src={pic7} alt="My Image" className="w-10 h-10" />
            <p className="font-bold text-white pl-10">Bill Gate </p>
          </div>
          <p className="font-bold text-white">6th</p>
        </div>
      </main>
    </div>
  );
};

export default leaderboard;
