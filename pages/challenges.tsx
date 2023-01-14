import Head from "next/head";
import React from "react";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
const challengeTask = [
  {
    id: 1,
    title: "Save $5 this week",
    points: 10,
    completed: false,
  },
  {
    id: 2,
    title: "Spend only $10 this week",
    points: 10,
    completed: true,
  },
  {
    id: 3,
    title: "Get $50 this month",
    points: 10,
    completed: false,
  },
];

const challenges = () => {
  return (
    <div className="flex md:max-w-screen-sm min-h-screen flex-col  my-auto mx-auto py-2 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10">
        <h1 className="text-2xl text-center font-bold mb-10">My Challenges</h1>

        {/* challenge card */}
        <div className="w-screen-sm mx-10 rounded-md h-44 bg-black text-white px-6 py-2 flex flex-row  justify-between items-center">
          <div>
            <p className="text-gray-400">Your Level</p>
            <p className="text-3xl text-white font-bold">Guest</p>
          </div>
          <div className="bg-green-600 w-20 h-20 font-bold text-5xl flex justify-center items-center rounded-full">
            1
          </div>
        </div>
        <div className="w-screen-sm flex flex-row mx-10 justify-center items-start">
          <div className="w-1/2 my-2 rounded-md h-44 bg-black text-white px-6 py-2 flex flex-row  justify-between items-center">
            <div className="w-1/2">
              <p className="text-lg text-white font-bold">
                Challenges completed
              </p>
            </div>
            <div className="bg-green-600 w-20 h-20 font-bold text-5xl flex justify-center items-center rounded-full">
              1
            </div>
          </div>
          <div className="w-1/2 my-2 ml-2 rounded-md h-44 bg-black text-white px-6 py-2 flex flex-row  justify-between items-center">
            <div className="flex flex-row justify-between items-center">
              <div className="w-1/2">
                <p className="text-white fold-bold text-lg ">
                  Levels and rewards
                </p>
              </div>
              <div className="">
                <ChevronRightIcon className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* current task */}
        <div className="ml-10 mt-10">
          <p className="text-lg text-black font-semibold">Current</p>
          {challengeTask.map((task) => (
            <div className="mt-5">
              {!task.completed && (
                <>
                  <div className="w-screen-sm rounded-md h-fit bg-gray-100 text-black px-6 py-2 flex flex-row  justify-between items-center">
                    <p>{task.title}</p>
                    <CheckCircleIcon
                      className={`w-6 h-6 ${
                        !task.completed && "text-blue-400"
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* complete task */}
        <div className="ml-10 mt-10">
          <p className="text-lg text-black font-semibold">Completed</p>
          {challengeTask.map((task) => (
            <div className="mt-5">
              {task.completed && (
                <>
                  <div className="w-screen-sm rounded-md h-fit bg-gray-100 text-black px-6 py-2 flex flex-row  justify-between items-center">
                    <p>{task.title}</p>
                    <CheckCircleIcon
                      className={`w-6 h-6 ${
                        task.completed && "text-yellow-400"
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default challenges;
