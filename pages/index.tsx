import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageTile } from "../components/PageTile";
import { Text } from "../components/Text";
import { Navigation } from "../fragments/Navigation";
import { useOnResize } from "../hooks/useOnResize";
import { useOnScroll } from "../hooks/useOnScroll";
import { opacity } from "../styles/animations";
import styles from "../styles/Home.module.css";
import Introduction from "./tiles/introduction";

const Home: NextPage = () => {
  const [scrollPosition] = useOnScroll();
  const [resizeDimension] = useOnResize();

  return (
    <>
      <Navigation />
      <Introduction />
      <PageTile />
      <PageTile />
    </>
  );
};

export default Home;
