import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who We Are At Standing Out, we believe that great software is more than just code — it’s a tool that empowers businesses to grow, evolve, and make a lasting impact. We are a passionate team of software developers, engineers, and innovators who work tirelessly to create solutions that help you stand out in the competitive digital landscape.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Who We Are At Standing Out, we believe that great software is more than just code — it’s a tool that empowers businesses to grow, evolve, and make a lasting impact. We are a passionate team of software developers, engineers, and innovators who work tirelessly to create solutions that help you stand out in the competitive digital landscape."
      />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
