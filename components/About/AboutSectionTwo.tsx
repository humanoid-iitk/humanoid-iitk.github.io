import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width='16' height='13' viewBox='0 0 16 13' className='fill-current'>
    <path d='M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z' />
  </svg>
);
const AboutSectionTwo = () => {
  const List = ({ text }) => (
    <p className='mb-5  flex text-lg font-medium text-body-color'>
      <span className='mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary'>
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section className='py-8 md:py-14 lg:py-18'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4 lg:w-1/2'>
            <div
              className='wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0'
              data-wow-delay='.15s'
            >
              <Image
                src='/images/teams/goal.webp'
                alt='teams goals'
                layout='fill'
                objectFit='cover'
                objectPosition='50% 50%'
              />
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='wow fadeInUp max-w-[800px]' data-wow-delay='.2s'>
              <SectionTitle
                title='Our Motivation'
                paragraph='Our ultimate target is to make a 
                fully-functional Autonomous Humanoid 
                Robot, which closely mimics human beings.'
                mb='44px'
              />
              <div className='mb-9'>
                <h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
                  Our Goals
                </h3>
                <div className='w-full px-3 '>
                  <List text='IEEE IROS Wrestling Simulation -2023'/>
                  <List text='FIRA HUROCUP -2024' />
                  <List text='Robocup Soccer Simulation -2024' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default AboutSectionTwo;
