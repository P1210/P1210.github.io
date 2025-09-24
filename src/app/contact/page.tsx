import React from "react";
import SocialLinks from "./SocialLinks";
import "../styles/contactPage.css";

function ContactSection() {
  return (
    <div >
      <div className="pages-title">
        <span>Lets Work Together ! </span>
      </div>
        <SocialLinks />
    </div>
  );
}

export default ContactSection;