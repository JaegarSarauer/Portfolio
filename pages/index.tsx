import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { PageTile } from "../components/PageTile";
import { Text } from "../components/Text";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  return <>
    <PageTile>
      <Text center>Jaegar Sarauer</Text>
    </PageTile>
  </>;
};

export default Home;
