import type { NextPage } from "next";
import Head from "next/head";
import {
  AcademicCapIcon,
  ChevronRightIcon,
  CreditCardIcon,
  QrCodeIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className="flex md:max-w-screen-sm min-h-screen flex-col  my-auto mx-auto py-2 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10">
        <h1 className="font-bold text-2xl my-5">Finance</h1>
        <div className="flex flex-row my-5">
          <div className="mx-5 my-4 flex flex-col justify-center items-center">
            <QrCodeIcon className="w-10 bg-blue-200 p-2 rounded-full text-black  " />
            <p className="text-sm pt-2">Pay by QR</p>
          </div>
          <div className="mx-5 my-4 flex flex-col justify-center items-center">
            <WalletIcon className="w-10 bg-blue-700 p-2 rounded-full text-white  " />
            <p className="text-sm pt-2">My Bills</p>
          </div>
          <Link href={"/leaderboard"}>
            <div className="mx-5 my-4 flex flex-col justify-center items-center">
              <AcademicCapIcon className="w-10 bg-blue-200 p-2 rounded-full text-black  " />
              <p className="text-sm pt-2">Leaderboard</p>
            </div>
          </Link>
        </div>
        {/* challenge card  */}
        <Link href={"/challenges"}>
          <div className="w-screen-sm mx-10 rounded-md h-20 bg-black text-white px-6 py-2 flex flex-col justify-center items-left">
            <p>Using all the potential of your debit card</p>
            <p className="text-sm text-gray-400">
              Gain rewards for completing challenges
            </p>
          </div>
        </Link>
        {/* finance Total */}
        <div className="w-screen-sm mx-10 rounded-md my-10 h-20 bg-gray-100 text-black px-6 py-2 flex flex-row  justify-between  items-center">
          <div>
            <p className="text-gray-400">Finance Total</p>
            <p className="text-sm text-black">10.00 $</p>
          </div>
          <ChevronRightIcon className="w-5 text-gray-400 cursor-pointer" />
        </div>
        {/* cards  */}
        <p className="ml-10">Cards </p>
        <div className="w-screen-sm mx-10 rounded-md mt-5 h-20 bg-gray-100  text-black px-6 py-2 flex flex-row  justify-between  items-center">
          <div>
            <div className="flex flex-row justify-center items-center">
              <CreditCardIcon className="w-10 h-10 p-2 bg-blue-500 rounded-full text-white  " />
              <div className="ml-4">
                <p className="text-black">10.00 $</p>
                <p className="text-sm text-gray-400">Debit Card</p>
              </div>
            </div>
          </div>
          <div>
            <p>xxxx xxxx xxxx 6021</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
