import { CSS } from "@stitches/react";
import { TransitionCSS } from "../types/css";

export interface ProjectData {
  title: string;
  imageSrc: string;
  transitionCSS?: TransitionCSS;
}

const defaultProjectTransitionCSS = (step: number) => ({
  opacity: step,
  top: 100 - step * 100,
});

export const Projects: ProjectData[] = [
  {
    title: "Guilds of Gods",
    imageSrc: "/assets/img/projects/guilds_of_gods0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Pixel Property",
    imageSrc: "/assets/img/projects/pixel_property0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Mech Arena",
    imageSrc: "/assets/img/projects/mech_arena0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "3D Snake",
    imageSrc: "/assets/img/projects/3d_snake0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Barnacle Bay",
    imageSrc: "/assets/img/projects/barnacle_bay0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "OSRS Max Cape",
    imageSrc: "/assets/img/projects/osrsmaxcape0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Tile Trial",
    imageSrc: "/assets/img/projects/tile_trial0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Maze Speedrun",
    imageSrc: "/assets/img/projects/mazespeedrun0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
];
