import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { saveAs } from 'file-saver'

const Card = (props) => {
  const downloadImage = () => {
    saveAs(props.downloadLink, 'pix_joy_' + Math.floor(Math.random() * 1000)+".jpg") // Put your image url here.
  }
  return (
    <div key={props.key + Math.floor(Math.random() * 1000)} id={props.id} class="max-w-sm h-34 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3 hover:scale-105 duration-200">
      <div className="group relative">
        <img class="rounded-lg" src={props.link} alt="" />

        <div onClick={downloadImage} className="bg-gray-300  absolute bottom-4 right-4  p-2 rounded-xl block group-hover:block duration-500 cursor-pointer text-white md:hidden">
          <HiOutlineDownload color="purple" size={30}></HiOutlineDownload>
        </div>
      </div>
    </div>
  );
};

export default Card;
