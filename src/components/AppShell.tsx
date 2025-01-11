import DetailsForm from "./DetailsForm";
import ResumeViewer from "./ResumeViewer";

export default function AppShell() {
  return (
    <main className="flex h-screen w-screen gap-2">
      <DetailsForm />
      <ResumeViewer />
    </main>
  );
}
