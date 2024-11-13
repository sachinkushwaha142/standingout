import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Let’s Talk About Your Project!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact us"
        description="Are you ready to build something that stands out? Whether you’re looking to create custom software, improve your existing systems, or need guidance on a new digital strategy, we’re here to help. "
      />

      <Contact />
    </>
  );
};

export default ContactPage;
