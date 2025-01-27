import { useEffect } from "react";
import { useResumeStore } from "../../store/store";
import { PDF } from "@lib/PDF";
import { usePDF, Document, Page } from "@react-pdf/renderer";
import { PDFRenderer } from "@lib/renderHelper";
import { JSONPreview } from "@components/ui/jsonPreview";

const InitialPDFDoc = (
  <Document>
    <Page size={"A4"}></Page>
  </Document>
);

const ResumeViewer = () => {
  const [instance, updateInstance] = usePDF({ document: InitialPDFDoc });

  useEffect(() => {
    const unsubscribe = useResumeStore.subscribe((state) => {
      const updatedPDF = <PDF sections={state.sections} />;
      updateInstance(updatedPDF);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {instance.loading ? <p>Loading</p> : <PDFRenderer src={instance.url!} />}
    </>
  );
};

export { ResumeViewer };
