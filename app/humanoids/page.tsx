import Breadcrumb from "@/components/Common/Breadcrumb"
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";

const humanoidFeatures = [
    "The humanoid consists of 21 degrees of freedom, allowing for precise and versatile movements.",
    "The humanoid utilizes high-quality servos, such as AX-18, MX-28, and MX-64, known for their durability and performance.",
    "The servos operate at a voltage of 12V and have varying stall torque and no-load speed specifications, providing strength and agility to the humanoid.",
    "The servos communicate using the TTL protocol, enabling efficient and reliable control.",
    "Despite its impressive capabilities, the humanoid has a relatively low weight of 4.8kg, making it easy to handle and transport.",
    "The humanoid is constructed using durable aluminum, ensuring a strong and long-lasting build.",
    "The dimensions of each servo (weight and size) are provided, allowing for accurate integration and placement within the humanoid.",
    "The humanoid requires 675W of power and has a current requirement of 64A, ensuring sufficient electrical supply for its operation.",
    "The report includes drawing numbers and part volumes for various components, such as the foot base, torso plate, waist plate, and chest plate.",
    "The humanoid stands at a height of 72cm, providing an appropriate scale for its intended applications."
  ];

  const humanoidFeaturesTitle = [
    "Degrees of Freedom (DOF)",
    "Servos Used",
    "Operating Parameters",
    "Protocol",
    "Compact and Lightweight",
    "High Quality Materials",
    "Precise Dimensions",
    "Power and Current Requirements",
    "Detailed Drawings",
    "Height",
  ]

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

const Humanoid = () => {
    const List = ({ text }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
          <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
          {text}
        </p>
      );
      const List2 = ({ title,text }) => (
        <p className="mb-5 flex items-center text-md font-medium text-body-color">
          <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
          <span>
          <b className="inline">{title} : </b>
          {text}
          </span>
        </p>
      );
    return (<>
        <Breadcrumb pageName="Humanoids" description="Humanoids developed by Team Humanoid at IIT Kanpur" />
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Automi: IIT Kanpur's Revolutionary Humanoid"
                paragraph="Explore Automi, IIT Kanpur's groundbreaking humanoid, and witness the future of robotics unfold. With cutting-edge technology and exceptional engineering, Automi represents a new era in human-robot interaction. Discover its remarkable capabilities and the visionary work of the team behind this extraordinary creation."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Height - 72cm" />
                    <List text="Weight - 4.8kg" />
                    <List text="Material - Aluminium" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Current Req - 64A" />
                    <List text="Power Req - 675W" />
                    <List text="DOF - 21" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[1148] px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="py-4 flex flex-col justify-center space-y-4">
                <iframe style={{ height: '320px' }} title="AUTOMI | Humanoid IITK" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a8e74208d40e4eafb5d8bf70c54ff171/embed"> </iframe>
                    <Link
                        href="https://docs.google.com/spreadsheets/d/1y2tQbk-S7vo8-iLDsmWQtvg5SPLtkXXZ3D4SutlBY6M/edit#gid=0"
                        className="text-center ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                        TDR of Automi
                    </Link>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="mx-4 flex flex-wrap items-center">
            <SectionTitle
          title="SPECS"
          paragraph="Below are some features of our Humanoid Automi"
          center
          mb="80px"
        />  
            <List2 title={humanoidFeaturesTitle[0]} text={humanoidFeatures[0]}/>
            <List2 title={humanoidFeaturesTitle[1]} text={humanoidFeatures[1]}/>
            <List2 title={humanoidFeaturesTitle[2]} text={humanoidFeatures[2]}/>
            <List2 title={humanoidFeaturesTitle[3]} text={humanoidFeatures[3]}/>
            <List2 title={humanoidFeaturesTitle[4]} text={humanoidFeatures[4]}/>
            <List2 title={humanoidFeaturesTitle[5]} text={humanoidFeatures[5]}/>
            <List2 title={humanoidFeaturesTitle[6]} text={humanoidFeatures[6]}/>
            <List2 title={humanoidFeaturesTitle[7]} text={humanoidFeatures[7]}/>
            <List2 title={humanoidFeaturesTitle[8]} text={humanoidFeatures[8]}/>
            <List2 title={humanoidFeaturesTitle[9]} text={humanoidFeatures[9]}/>

            </div>
        </div>
    </div>
    </>)
}

export default Humanoid;