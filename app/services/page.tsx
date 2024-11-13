import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "At Standing Out, we offer a wide range of software development services to help businesses enhance efficiency, streamline operations, and create exceptional user experiences.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="At Standing Out, we offer a wide range of software development services to help businesses enhance efficiency, streamline operations, and create exceptional user experiences."
      />
      <Features />
    </>
  );
};

export default AboutPage;
