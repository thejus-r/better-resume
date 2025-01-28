import Container from "@components/Container/container";
import { PersonalForm } from "@components/Forms/PersonalForm";
import { ResumeViewer } from "@components/PDFViewer";

function App() {
  return (
    <div className="flex h-screen w-full">
      <Container>
        <PersonalForm />
      </Container>
      <div className="flex h-full w-1/2 items-center justify-center bg-gray-300">
        <ResumeViewer />
      </div>
    </div>
  );
}

export default App;
