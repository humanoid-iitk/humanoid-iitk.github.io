const news = () => {
    return (
      
      <div
        className="wow mt-6  fadeInUp relative z-10 h-[230px] rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-6"
        data-wow-delay=".2s"
      >
        <h3 className="mb-9 text-3xl font-bold leading-tight text-black dark:text-white">
          Our Email
        </h3>
        <p className=" pb-0 text-base font-small leading-relaxed text-2xl text-body-color dark:border-white dark:border-opacity-25">
        <a href="mailto:iitkhumanoid@gmail.com"style={{ color: 'blue' }}>iitkhumanoid@gmail.com</a>
        </p>
        
        </div>
    
  );
};

export default news;