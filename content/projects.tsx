import { CSS } from "@stitches/react";
import { TransitionCSS } from "../types/css";

export interface ProjectData {
  title: string;
  content: string;
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
    content:
      "A MMORPG written from scratch in Javascript using PIXI.JS rendering engine.",
    imageSrc: "/assets/img/projects/guilds_of_gods0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Pixel Property",
    content:
      "A decentralized art board where users can draw, trade, and rent properties.",
    imageSrc: "/assets/img/projects/pixel_property0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Mech Arena",
    content:
      "Mech Arena is an first-person shooter robot fighting game designed using Unity 3D where the player faces waves of increasingly difficult AI. As the player progresses through waves of destruction, currency is earned to upgrade the player's robot.",
    imageSrc: "/assets/img/projects/mech_arena0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "3D Snake",
    content:
      "Classic Snake game created to move in a 3D environment. Controls rotate the world around the player rather than changing the player direction. Created using Unity 3D.",
    imageSrc: "/assets/img/projects/3d_snake0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Barnacle Bay",
    content:
      "Barnacle Bay is a game made by a team of 5 at the Global Game Jam in 2017. The game's main features is the utilization of AirConsole API, which turns smartphones into controls to allow co-op gameplay. The alpha version was completed during the Game Jam weekend, final release will be available on the AirConsole.com website.",
    imageSrc: "/assets/img/projects/barnacle_bay0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "OSRS Max Cape",
    content: "OSRSMaxCape.com is a fansite for the game Oldschool Runescape made by Jagex Ltd. The website allows a user to enter in their account username, which my website will request the information from the official high-scores page. The data is then organized to be easily read for a player to view their progress within the game.",
    imageSrc: "/assets/img/projects/osrsmaxcape0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Tile Trial",
    content: "Tile Trial is an runner and puzzle game designed for Android devices. 1000s of different puzzle combinations generate as the player progresses makes the game continuously difficult.",
    imageSrc: "/assets/img/projects/tile_trial0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
  {
    title: "Maze Speedrun",
    content: "Maze Speedrun is a simple maze game using DFS algorithm to generate random mazes for the player to traverse in the shortest time possible. Written in Javascript using Phaser game library.",
    imageSrc: "/assets/img/projects/mazespeedrun0.png",
    transitionCSS: defaultProjectTransitionCSS,
  },
];
