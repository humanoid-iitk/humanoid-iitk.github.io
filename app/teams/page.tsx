"use client";
import Image from "next/image";
import React from "react";
import { TeamHead, TeamMembers } from "@/components/TeamsData/teamsdata";
import cup from "@/public/images/teams/student.jpg";
import Carousel from "@/components/Carousel";

const CardItem = ({ data }) => {
  return (
    <>
      <div className="mx-auto flex max-w-5xl justify-between gap-4 rounded-3xl bg-[#bbe7ed] p-6 dark:bg-[#dce2e3] ">
        <div className="  ">
          <Image
            src={cup}
            alt="student"
            className="shadow-blue-800/80 mx-auto h-40 w-40 rounded-full bg-white object-contain p-2 shadow-xl"
          />
          <div className="mt-4 rounded-2xl bg-[#daedf0]  p-2 text-center font-bold text-black shadow-lg shadow-[#bbbdbd]">
            <h1 className="text-[18px] capitalize">{data.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const images = ["/images/teams/Group-1.jpg", "/images/teams/Group-2.jpg"];

const TeamPage = () => {
  return (
    <div className="flex-col pb-[120px] pt-[120px]">
      <Carousel images={images} />

      <h1 className="mb-8 text-center text-[40px]  font-bold">MEET THE TEAM</h1>
      <h1 className="text-center text-[30px] font-bold">Team Heads</h1>

      <div className="flex flex-wrap  justify-center gap-4 p-12 ">
        {TeamHead.map((data, index) => (
          <CardItem data={data} key={index} />
        ))}
      </div>
      <h1 className="text-center text-[30px] font-bold">Team Members</h1>
      <div className="flex flex-wrap  justify-center gap-8 p-12 ">
        {TeamMembers.map((data, index) => (
          <CardItem data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
