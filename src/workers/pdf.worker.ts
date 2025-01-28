import { expose } from 'comlink';

import './workerShim';
import { PDFProps } from '@lib/PDF';
let log = console.info;

const renderPDFInWorker = async (props: PDFProps) => {
  try {
    const { renderPDF } = await import('@lib/renderPDF');
    return URL.createObjectURL(await renderPDF(props));
  } catch (error) {
    log(error);
    throw error;
  }
};

const onProgress = (cb: typeof console.info) => (log = cb);

expose({ renderPDFInWorker: renderPDFInWorker, onProgress });

export type WorkerType = {
  renderPDFInWorker: typeof renderPDFInWorker;
  onProgress: typeof onProgress;
};
