import React from "react";
import "./contactPage.css";
import { SOCIAL_LINKS } from "./entities";
import { ItemCard } from "./components/ItemCard";

function ContactSection() {
  return (
    <div className="social">
      {SOCIAL_LINKS.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          data={item.data}
          onClick={item.onClick}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default ContactSection;
