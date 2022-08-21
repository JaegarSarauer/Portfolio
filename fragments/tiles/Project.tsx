import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity } from "../../styles/animations";
import { Text } from "../../components/Text";

export interface ProjectProps {
  title: string;
}

const Project = ({title}: ProjectProps) => {
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
