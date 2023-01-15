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
              <img
                src="https://www.vg-resource.com/uploads/avatars/avatar_2092.gif?dateline=1429483910"
                className="h-[100px] pl-2"
              />
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
          {guild ? (
            <div className="flex flex-wrap">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/013/951/133/original/ivan-kohan-olguin-nimaris-insta.gif?1541790490"
                className="h-[200px]"
                onClick={() => setGuild(false)}
              />
              <img src="https://64.media.tumblr.com/4995845db6ecb5ee92e77b88f8bfabdc/tumblr_n0vw4iMpyh1r4zvxvo1_r1_250.gif" />
            </div>
          ) : (
            !char2 &&
            cha1.map((task) => (
              <div className="mt-5" key={task.id}>
                {!task.completed && (
                  <>
                    <div
                      className="w-screen-sm rounded-md h-fit bg-gray-100 text-black px-6 py-2 flex flex-row  justify-between items-center"
                      onClick={() => {
                        completed(task.id);
                        setComp(comp + 1)
                      }}
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
              <img
                src="https://i.imgur.com/qgpcufH.gif"
                className="w-[400px]"
              />
              <div className="flex flex-wrap">
                <div className="bg-green-600 w-20 h-20 font-bold text-5xl flex justify-center items-center rounded-full text-white ml-12 mt-10">
                  {lvl}
                </div>
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c9935a-b5fd-49e2-befa-a3c1bea3ccba/dd31bve-1990757b-8247-470b-98b7-c87cdcc166e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyYzk5MzVhLWI1ZmQtNDllMi1iZWZhLWEzYzFiZWEzY2NiYVwvZGQzMWJ2ZS0xOTkwNzU3Yi04MjQ3LTQ3MGItOThiNy1jODdjZGNjMTY2ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zs5yx6ExMq0fD4FxicefuRZL1maWuO5eAgp8CwKq8nQ"
                  alt=""
                  className="w-40 ml-14"
                />
              </div>

              <div className="grid grid-row justify-center mb-5">
                <h3 className="text-white font-medium ml-32 mb-3">
                  New Quests
                </h3>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
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
