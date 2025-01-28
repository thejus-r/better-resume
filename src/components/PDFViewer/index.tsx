import { useEffect } from "react";
import { useResumeStore } from "../../store/store";
import { PDF } from "@lib/PDF";
import { usePDF } from "@react-pdf/renderer";
import { PDFRenderer } from "@lib/renderHelper";

const ResumeViewer = () => {
  const { sections } = useResumeStore();

  const InitialPDFDoc = <PDF sections={sections} />;
  const [instance, update] = usePDF({ document: InitialPDFDoc });

  useEffect(() => {
    const unsubscribe = useResumeStore.subscribe((state) => {
      const InitialPDFDoc = <PDF sections={state.sections} />;
      update(InitialPDFDoc);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {instance.loading ? <p>Loading</p> : <PDFRenderer src={instance.url!} />}
    </>
  );
};

export { ResumeViewer };
