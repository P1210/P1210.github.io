import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectList } from "../entities";
import ProjectItemCard from "./ProjectItemCard";

export const ProjectCarousel = () => {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="ml-0">
        {ProjectList.map((project, index) => (
          <CarouselItem key={index} className="p-0">
            <ProjectItemCard key={project.name} item={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-9" />
      <CarouselNext className="-right-10" />
    </Carousel>
  );
};
