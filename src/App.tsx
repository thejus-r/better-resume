import Container from "@components/Container/container";
import { PDFViewer } from "@components/PDFViewer";
import { usePDF } from "@react-pdf/renderer";
import { MyDocument } from "@lib/renderer";
import { PersonalForm } from "@components/Forms/PersonalForm";

function App() {
  const [instance, setInstance] = usePDF({ document: MyDocument });
  return (
    <div className="flex h-screen w-full">
      <Container>
        <PersonalForm />
      </Container>
      <div className="flex h-full w-1/2 items-center justify-center bg-gray-300">
        {instance.loading ? <p>Loading</p> : <PDFViewer src={instance.url!} />}
      </div>
    </div>
  );
}

export default App;
