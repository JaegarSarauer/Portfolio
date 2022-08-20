import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity } from "../../styles/animations";
import { Text } from "../../components/Text";
import { usePageTileOpacity } from "../../hooks/usePageTileOpacity";

const Projects = () => {
  return (
    <>
      <Container
        center
        css={{
          width: "200px",
          backgroundColor: "teal",
        }}
      >
        <Text textCenter>Projects</Text>
      </Container>
    </>
  );
};

export default Projects;
