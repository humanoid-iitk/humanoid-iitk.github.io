"use client"
import Image from "next/image";
import React from "react";
import { TeamHead, TeamMembers } from "@/components/TeamsData/teamsdata";
import cup from "@/public/images/teams/student.jpg"


const CardItem = ({ data }) => {
  return (
    <>
      <div className='dark:bg-[#dce2e3] bg-[#bbe7ed] mx-auto flex max-w-5xl justify-between gap-4 rounded-3xl p-6 '>
        <div className='  '>
          <Image
            src={cup}
            alt='student'
            className='shadow-blue-800/80 mx-auto w-40 h-40 rounded-full bg-white p-2 shadow-xl object-contain'
          />
          <div className='bg-[#daedf0] text-black font-bold  shadow-[#bbbdbd] mt-4 rounded-2xl p-2 text-center shadow-lg'>
            <h1 className='text-[18px] capitalize'>
              {data.name}
            </h1>
          </div>
        </div>  
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className='flex-col pt-[120px] pb-[120px]'>
      <h1 className="text-center text-[40px] font-bold  mb-8">MEET THE TEAM</h1>
      <h1 className='text-center text-[30px] font-bold'>Team Heads</h1>

      <div className='flex flex-wrap  justify-center gap-4 p-12 '>
       

        {TeamHead.map((data, index) => (
          <CardItem data={data} key={index} />
        ))}
      </div>
      <h1 className='text-center text-[30px] font-bold'>Team Members</h1>
      <div className='flex flex-wrap  justify-center gap-8 p-12 '>
       

        {TeamMembers.map((data, index) => (
          <CardItem data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Card;
