import Head from "next/head";
import React, { useEffect } from "react";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { title } from "process";
const challengeTask1 = [
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
const challengeTask2 = [
  {
    id: 1,
    title: "Save $10 this week",
    points: 10,
    completed: false,
  },
  {
    id: 2,
    title: "Spend only $30 this month",
    points: 10,
    completed: false,
  },
  {
    id: 3,
    title: "Take a short course about saving",
    points: 10,
    completed: false,
  },
];

const challenges = () => {
  const [lvl, setLvl] = React.useState(1);
  const [char2, setChar2] = React.useState(false);
  const [cha2, setCha2] = React.useState(challengeTask2);
  const [open, setOpen] = React.useState(false);
  const [cha1, setCha1] = React.useState(challengeTask1);
  const [comp, setComp] = React.useState(1);
  const [title, setTitle] = React.useState("Villager");
  const [guild, setGuild] = React.useState(true);
  const completed = (id: number) => {
    const newTask = cha1.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setCha1(newTask);
  };
  useEffect(() => {
    if (cha1.filter((task) => task.completed).length === 3) {
      setOpen(true);
      setLvl(lvl + 1);
      setComp(3);
      setTitle("Knight");
    }
  }, [cha1]);

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
          <div className="grid grid-cols-2">
            <div className="pt-3">
              <p className="text-gray-400">Your Level</p>
              <p className="text-3xl text-white font-bold">{title}</p>
            </div>
              {title === "Villager" ? (
                <img
                  src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3c183f682609152.png"
                  alt="villager"
                  className="h-[100px] pl-4"
                />
              ) : (
                <img src="https://www.vg-resource.com/uploads/avatars/avatar_2092.gif?dateline=1429483910" className="h-[100px] pl-2"/>
              )}
          </div>
          <div className="bg-green-600 w-20 h-20 font-bold text-5xl flex justify-center items-center rounded-full">
            {lvl}
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
              {comp}
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
          { guild ? (
            <div className="flex flex-wrap">
              <img src="https://cdnb.artstation.com/p/assets/images/images/013/951/133/original/ivan-kohan-olguin-nimaris-insta.gif?1541790490" className="h-[200px]" onClick={() => setGuild(false)}/>
              <img src="https://64.media.tumblr.com/4995845db6ecb5ee92e77b88f8bfabdc/tumblr_n0vw4iMpyh1r4zvxvo1_r1_250.gif"/>
            </div>
            
            ) : (
              !char2 &&
                cha1.map((task) => (
                  <div className="mt-5" key={task.id}>
                    {!task.completed && (
                      <>
                        <div
                          className="w-screen-sm rounded-md h-fit bg-gray-100 text-black px-6 py-2 flex flex-row  justify-between items-center"
                          onClick={() => completed(task.id)}
                        >
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
                ))
            )}
         
          {char2 &&
            cha2.map((task) => (
              <div className="mt-5" key={task.id}>
                {!task.completed && (
                  <>
                    <div
                      className="w-screen-sm rounded-md h-fit bg-gray-100 text-black px-6 py-2 flex flex-row  justify-between items-center"
                      onClick={() => completed(task.id)}
                    >
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
          {!char2 &&
            cha1.map((task) => (
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
          {char2 &&
            cha2.map((task) => (
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
        {open && (
          <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
            <div className="bg-blue-500 p-6 rounded-lg shadow-lg items-center">
              <div className="bg-green-600 w-20 h-20 font-bold text-5xl flex justify-center items-center rounded-full text-white ml-12">
                {lvl}
              </div>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c9935a-b5fd-49e2-befa-a3c1bea3ccba/dd31bve-1990757b-8247-470b-98b7-c87cdcc166e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyYzk5MzVhLWI1ZmQtNDllMi1iZWZhLWEzYzFiZWEzY2NiYVwvZGQzMWJ2ZS0xOTkwNzU3Yi04MjQ3LTQ3MGItOThiNy1jODdjZGNjMTY2ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zs5yx6ExMq0fD4FxicefuRZL1maWuO5eAgp8CwKq8nQ"
                alt=""
                className="w-40"
              />
              <h3 className="text-white font-medium ml-10 mb-3">
                Now Available
              </h3>
              <div className="bg-blue-400 grid grid-row grid-center w-1/2 p-2 rounded ml-10 mb-4">
                <QueueListIcon className="w-10 p-2 bg-white rounded-full text-blue-500 ml-5" />
                <p className="text-white ml-3">2 quests</p>
              </div>
              <p className="text-white">Rewards for the next level</p>
              <div className="flex flex-wrap m-4">
                <div className="bg-white h-12 w-12 flex items-center justify-center rounded mr-10">
                  <p className="text-xl font-bold">?</p>
                </div>
                <div className="bg-white h-12 w-12 flex items-center justify-center rounded ml-3">
                  <p className="text-xl font-bold">?</p>
                </div>
              </div>
              <button
                className="bg-white text-blue-500 p-2 rounded w-full"
                onClick={() => {
                  setOpen(false);
                  setChar2(true);
                }}
              >
                Congratulation
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default challenges;
