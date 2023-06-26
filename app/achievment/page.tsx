'use client'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { achievement } from '../../components/AchievmentData/data'
import Image from 'next/image'
import Breadcrumb from '@/components/Common/Breadcrumb'

const AchievmentCard = ({ achievment, index }) => (
  <VerticalTimelineElement
    contentArrowStyle={{ borderRight: '10px  solid white' }}
    contentStyle={{ background: '#1d1836', color: '#fff', padding: '2rem' }}
    date={achievment.date}
    iconStyle={{ background: achievment.iconBg }}
    icon={
      <div className='flex h-full w-full items-center justify-center'>
        <Image
          src={achievment.icon}
          alt='image'
          className='h-[60%] w-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-[24px] font-bold text-white'>{achievment.title}</h3>
      <ul className='ml-5 mt-5 list-disc space-y-2'>
        {achievment.points.map((point, index) => (
          <li className='achieve_list2' key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Achievement = () => {
  return (
    <>
      <Breadcrumb
        pageName='Achievements'
        description='List of Achievements of Team Humanoid IITK'
      />
      <section className='pb-[120px] pt-[120px]'>
        <div className=''>
          <div className='md:text-[50px] sm:text-[40px] xs:text-[30px] text-center text-[25px] font-black text-black dark:text-white'>
            <p className='text-[18px] font-medium'>
              Embark on an Extraordinary Journey to Unveil Our Astonishing
              Achievements!
            </p>
            <h1>ACHIEVEMENTS</h1>
          </div>
          <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {achievement.map((exp, index) => (
                <AchievmentCard key={index} index={index} achievment={exp} />
              ))}
            </VerticalTimeline>
          </div>
          <div className='md:text-[40px] sm:text-[25px] xs:text-[20px] mt-4 text-center text-[30px] font-black dark:text-white'>
            <h1>AIMMING FOR MORE ⭐</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Achievement
