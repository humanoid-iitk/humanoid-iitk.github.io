import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our contact page for your support"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
