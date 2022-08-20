import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { linearFrames, opacity as opacityFrames } from "../../styles/animations";
import { Text } from "../../components/Text";

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
            animation: `1.6s forwards ${linearFrames(
              {
                opacity: 0,
                marginLeft: -60,
              },
              {
                opacity: 1,
              }
            )} 0.1s`,
          }}
        >
          Jaegar
        </Text>
        <Text
          textCenter
          css={{
            opacity: 0,
            fontSize: "48px",
            animation: `1.6s forwards ${linearFrames(
              {
                opacity: 0,
                marginRight: -60,
              },
              {
                opacity: 1,
              }
            )} 0.1s`,
          }}
        >
          Sarauer
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
