import Container from "@components/Container/container";
import { PDFViewer } from "@components/PDFViewer";
import { usePDF } from "@react-pdf/renderer";
import { Section } from "@components/Section";
import { MyDocument } from "@lib/renderer";

function App() {
  const [instance, setInstance] = usePDF({ document: MyDocument });
  return (
    <div className="flex h-screen w-full">
      <Container>
        <Section />
      </Container>
      <div className="flex h-full w-1/2 items-center justify-center bg-gray-300">
        {instance.loading ? <p>Loading</p> : <PDFViewer src={instance.url!} />}
      </div>
    </div>
  );
}

export default App;
