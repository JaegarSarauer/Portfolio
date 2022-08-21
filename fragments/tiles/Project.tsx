import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity } from "../../styles/animations";
import { Text } from "../../components/Text";
import { TransitionCSS } from "../../types/css";

export interface ProjectProps {
  title: string;
  transitionCSS?: TransitionCSS;
}

const Project = ({title, transitionCSS}: ProjectProps) => {
  return (
    <>
      <Container
        center
        css={{
          width: "200px",
          backgroundColor: "teal",
        }}
      >
        <Text textCenter>{title}</Text>
      </Container>
    </>
  );
};

export default Project;
