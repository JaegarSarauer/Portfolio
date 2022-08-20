import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity as opacityFrames } from "../../styles/animations";
import { Text } from "../../components/Text";

const AboutMe = () => {
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
          About Me
        </Text>
      </Container>
    </>
  );
};

export default AboutMe;
