"use client"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { achievement } from "../../components/AchievmentData/data";
import Image from "next/image";

const AchievmentCard = ({ achievment, index }) => (
  <VerticalTimelineElement
    contentArrowStyle={{ borderRight: "10px  solid white" }}
    contentStyle={{ background: "#1d1836", color: "#fff", padding: "2rem" }}
    date={achievment.date}
    iconStyle={{ background: achievment.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <Image
          src={achievment.icon}
          alt='image'
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{achievment.title}</h3>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievment.points.map((point, index) => (
          <li className='achieve_list2' key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Achievement = () => {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div
      className=''
    >
      <div className='dark:text-white text-center font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] text-black'>
        <p className="text-[18px] font-medium">Embark on an Extraordinary Journey to Unveil Our Astonishing Achievements!</p>
        <h1 >ACHIEVEMENTS</h1>
      </div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {achievement.map((exp, index) => (
            <AchievmentCard key={index} index={index} achievment={exp} />
          ))}
        </VerticalTimeline>
      </div>
      <div className='dark:text-white text-center font-black md:text-[40px] sm:text-[25px] xs:text-[20px] text-[30px] mt-4'>
        <h1 >AIMMING FOR MORE ⭐</h1>
      </div>
    </div>

    </section>

    
  );
};

export default Achievement;