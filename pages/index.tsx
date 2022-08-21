import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageTile } from "../components/PageTile";
import { PageTileContainer } from "../fragments/PageTileContainer";
import { Text } from "../components/Text";
import { Navigation } from "../fragments/Navigation";
import { useIsLoaded } from "../hooks/useIsLoaded";
import { useOnResize } from "../hooks/useOnResize";
import { useOnScroll } from "../hooks/useOnScroll";
import { opacity } from "../styles/animations";
import AboutMe from "../fragments/tiles/AboutMe";
import Introduction from "../fragments/tiles/Introduction";
import Project from "../fragments/tiles/Project";
import { Projects } from "../content/projects";

const Home: NextPage = () => {
  const [isLoaded] = useIsLoaded();

  return isLoaded ? (
    <>
      <Navigation />
      <PageTileContainer>
        {[
          <Introduction />,
          <AboutMe />,
          ...Projects.map((projectData: any) => {
            return <Project title={projectData.title} />;
          }),
        ]}
      </PageTileContainer>
    </>
  ) : null;
};

export default Home;
