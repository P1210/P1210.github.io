import { HeroCard } from "./components/HeroCard";
import { ProfileCard } from "./components/ProfileCard";
import { StackCards } from "./components/StackCard";
import "./aboutSection.css";

export const AboutSection = () => {
  return (
    <>
      <HeroCard />
      <ProfileCard />
      <StackCards />
      </>
  );
};
