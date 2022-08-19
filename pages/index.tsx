import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageTile } from "../components/PageTile";
import { Text } from "../components/Text";
import { Navigation } from "../fragments/Navigation";
import { opacity } from "../styles/animations";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <PageTile>
        <Container
          center
          css={{
            width: "200px",
          }}
        >
          <Text
            textCenter
            css={{
              opacity: 0,
              fontSize: "48px",
              animation: `1.6s forwards ${opacity(0, 1)} 0.1s`,
            }}
          >
            Jaegar Sarauer
          </Text>
          <Text
            textCenter
            css={{
              opacity: 0,
              animation: `1.6s forwards ${opacity(0, 1)} 1.8s`,
            }}
          >
            A web portfolio
          </Text>
        </Container>
      </PageTile>
      <PageTile />
    </>
  );
};

export default Home;
