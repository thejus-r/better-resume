import { PDFViewer, render, renderToBuffer, usePDF } from "@react-pdf/renderer";
import MyDocument from "./Document";

export default function ResumeViewer() {
  const [pdfIns] = usePDF({
    document: <MyDocument />,
  });

  return (
    <div className="h-full w-full">
      <iframe
        className="h-full w-full"
        src={(pdfIns.url as string | undefined) + "#toolbar=0"}
      ></iframe>
    </div>
  );
}
