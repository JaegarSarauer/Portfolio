import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageTile } from "../components/PageTile";
import { PageTileContainer } from "../fragments/PageTileContainer";
import { Text } from "../components/Text";
import { Navigation } from "../fragments/Navigation";
import { useOnResize } from "../hooks/useOnResize";
import { useOnScroll } from "../hooks/useOnScroll";
import { opacity } from "../styles/animations";
import AboutMe from "../fragments/tiles/AboutMe";
import Introduction from "../fragments/tiles/Introduction";
import Projects from "../fragments/tiles/Projects";

const Home: NextPage = () => {
  const [scrollPosition] = useOnScroll();
  const [resizeDimension] = useOnResize();

  return (
    <>
      <Navigation />
      <PageTileContainer>
        <Introduction />
        <AboutMe />
        <Projects/>
      </PageTileContainer>
    </>
  ) : null;
};

export default Home;
