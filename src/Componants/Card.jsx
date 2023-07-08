import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

const Card = (props) => {
  return (
    <div key={props.id + Math.floor(Math.random() * 1000)} id={props.id} class="max-w-sm h-34 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3 hover:scale-105 duration-200">
      <div className="group relative">
        <img class="rounded-lg" src={props.link} alt="" />

        <div className="bg-gray-300  absolute bottom-4 right-4  p-2 rounded-xl block group-hover:block duration-500 cursor-pointer text-white md:hidden">
          <HiOutlineDownload color="purple" size={30}></HiOutlineDownload>
        </div>
      </div>
    </div>
  );
};

export default Card;
