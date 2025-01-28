import { useEffect } from "react";
import { useAsync } from "react-use";
import { proxy, wrap } from "comlink";
import type { WorkerType } from "../workers/pdf.worker";
import Worker from "./workers/pdf.worker?worker";
 
export const pdfWorker = wrap<WorkerType>(new Worker());
// hook up the debugging inside the main thread
pdfWorker.onProgress(proxy((info: any) => console.log(info)));

export const useRenderPDF = ({ sections }: Parameters<WorkerType["renderPDFInWorker"]>[0]) => {
  const {
    value: url,
    loading,
    error,
  } = useAsync(
    async () => pdfWorker.renderPDFInWorker({sections}),
    [sections]
  );

  // clean up the blob after url is no longer returned
  // otherwise it will cause memory leak
  useEffect(() => (url ? () => URL.revokeObjectURL(url) : undefined), [url]);
  return { url, loading, error };
};