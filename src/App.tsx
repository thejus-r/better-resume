import Container from "@components/Container/container";
import { Section } from "@components/Section";
function App() {
  return (
    <div className="flex h-screen w-full">
      <Container>
        <Section />
      </Container>
      <div className="flex h-full w-1/2 items-center justify-center bg-gray-300">
        Resume Live Preview
      </div>
    </div>
  );
}

export default App;
