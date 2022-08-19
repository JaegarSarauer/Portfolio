import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Link } from "../components/Link";
import { PageTile } from "../components/PageTile";
import { Text } from "../components/Text";
import { useOnScroll } from "../hooks/useOnScroll";
import { opacity, scale } from "../styles/animations";
import styles from "../styles/Home.module.css";

const calculateNavigationOffset = (scrollRange: number, currentScroll: number) => {
  const maxRange = Math.PI /2;
  const decimal = maxRange * Math.min(1, currentScroll / scrollRange)
  return Math.sin(decimal)
}

interface GrowLinkProps {
  href: string
  children: any
}

const GrowLink = ({href, children}: GrowLinkProps) => (
  <Link href={href}
    css={{
      lineHeight: '120%',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
        color: '#111',
        lineHeight: '170%',
      }
    }}
  >{children}</Link>
)

export const Navigation = () => {
  const [scrollPosition] = useOnScroll()

  return (
    <>
      <Container css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 80 - 60 * calculateNavigationOffset(400, scrollPosition),
        left: 80 - 60 * calculateNavigationOffset(400, scrollPosition),
        borderRight: 'solid 2px black',
        paddingRight: '8px',
        opacity: 0,
        animation: `1.6s forwards ${opacity(0, 1)} 1.8s`,
      }}>
        <GrowLink href="/">Home</GrowLink>
        <GrowLink href="/about">About Me</GrowLink>
        <GrowLink href="/projects">Projects</GrowLink>
        <GrowLink href="/education">Education</GrowLink>
        <GrowLink href="/resume">Resume</GrowLink>
        <GrowLink href="/contact">Contact</GrowLink>
      </Container>
    </>
  );
};
