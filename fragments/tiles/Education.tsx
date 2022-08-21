import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity as opacityFrames } from "../../styles/animations";
import { Text } from "../../components/Text";
import { usePageTileFocus } from "../../hooks/usePageTileFocus";

const Education = () => {
  const [focus, globalFocus] = usePageTileFocus(1);
  
  return (
    <>
      <Container
        center
        css={{
          width: "400px",
          position: "absolute",
          left: `${50 + 10 * Math.max(0, 1 - globalFocus * 2)}vw`,
          backgroundColor: '$backgroundWhite',
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
          Education
        </Text>
        <Text>British Columbia Institute of Technology - Bachelors</Text>
        <Text> - Minor in Games Development</Text>
        <Text>British Columbia Institute of Technology - Diploma</Text>
        <Text>
          - Minor in Data-communication and Internetworking
        </Text>
      </Container>
    </>
  );
};

export default Education;
