import { Container } from "../../components/Container";
import { PageTile } from "../../components/PageTile";
import { useOnResize } from "../../hooks/useOnResize";
import { useOnScroll } from "../../hooks/useOnScroll";
import { opacity } from "../../styles/animations";
import { Text } from "../../components/Text";


const Introduction = () => {
  const [scrollPosition] = useOnScroll();
  const [resizeDimension] = useOnResize();

  return (
    <PageTile
      css={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundColor: "green",
      }}
    >
      <Container
        center
        css={{
          width: "200px",
          opacity: 1 - Math.min(1, scrollPosition / resizeDimension.height),
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
  );
};

export default Introduction;
