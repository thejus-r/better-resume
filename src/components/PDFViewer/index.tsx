import * as PDFJS from "pdfjs-dist";
import {
  PDFDocumentProxy,
  RenderParameters,
} from "pdfjs-dist/types/src/display/api";
import { useCallback, useState, useRef, useEffect } from "react";

type PDFViewerProps = {
  src: string;
};

const PDFViewer = ({ src }: PDFViewerProps) => {
  PDFJS.GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy>();
  const [currentPage, setCurrentPage] = useState(1);

  let renderTask: PDFJS.RenderTask;

  const renderPage = useCallback(
    (pageNum: number, pdf = pdfDoc) => {
      const canvas = canvasRef.current;
      if (!canvas || !pdf) return;
      canvas.height = 0;
      canvas.width = 0;

      pdf
        .getPage(pageNum)
        .then((page) => {
          const viewport = page.getViewport({ scale: 0.9 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext: RenderParameters = {
            canvasContext: canvas.getContext("2d")!,
            viewport: viewport,
          };
          try {
            if (renderTask) {
              renderTask.cancel();
            }
            renderTask = page.render(renderContext);
            return renderTask.promise;
          } catch (error) {}
        })
        .catch((error) => console.log(error));
    },
    [pdfDoc],
  );

  useEffect(() => {
    renderPage(currentPage, pdfDoc);
  }, [pdfDoc, currentPage, renderPage]);

  useEffect(() => {
    const loadingTask = PDFJS.getDocument(src);
    loadingTask.promise.then(
      (loadedDoc) => {
        setPdfDoc(loadedDoc);
      },
      (error) => {
        console.log(error);
      },
    );
  }, [src]);

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-300">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export { PDFViewer };
