import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { it } from "node:test";

const SponsorPage = () => {
  const sponsorList = [
    {
      title: "Noccarc",
      img: "/images/sponsors/noccarc.png",
    },
    {
      title: "Dynamixel",
      img: "/images/sponsors/dynamixel.png",
    },
    {
      title: "Solidworks",
      img: "/images/sponsors/solidworks.png",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Our Sponsors"
        description="Acknowledging and thanking our sponsors for their vital support in driving our mission and making a difference."
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
       <center> <SectionTitle title="Previous Sponsors" paragraph="Below are our previous sponsors" mb="10px"/></center>
            <div className="flex ranimate flex-row flex-wrap content-center justify-center items-center">
            {sponsorList.map((item, index) => (
            <div  style={{ height: '220px',margin:'20px',padding:'8px', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} key={index}>
                <Image style={{height:'100px',padding:'8px'}} className="object-contain rounded shadow mx-auto" src={item.img} alt={item.title} width={300} height={300}/>
              <p>{item.title}</p>
            </div>
          ))}
            </div>
            <center><Link href="https://docs.google.com/presentation/d/1-vzRryyKDLoQ9YiQvYL0Xu8BKmgb2w4AMzntdtwCMx4/mobilepresent?slide=id.p" style={{width:'fit-content',marginBottom:'22px'}} className="text-center ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">Download Brochure</Link></center>
        </div>
      </section>
    </>
  );
};

export default SponsorPage;
