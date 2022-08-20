import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity as opacityFrames } from "../../styles/animations";
import { Text } from "../../components/Text";
import { usePageTileOpacity } from "../../hooks/usePageTileOpacity";

const Introduction = () => {
  return (
    <>
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
            animation: `1.6s forwards ${opacityFrames(0, 1)} 0.1s`,
          }}
        >
          Jaegar Sarauer
        </Text>
        <Text
          textCenter
          css={{
            opacity: 0,
            animation: `1.6s forwards ${opacityFrames(0, 1)} 1.8s`,
          }}
        >
          A web portfolio
        </Text>
      </Container>
    </>
  );
};

export default Introduction;
