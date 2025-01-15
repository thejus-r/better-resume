import { useEffect, useState } from "react";
import ReactPDF from "@react-pdf/renderer";
import {
  formDefaultValues,
  formSchema,
  type FormSchema,
} from "../lib/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Document, Page, Text, renderToStream, pdf } from "@react-pdf/renderer";
import MyDocument from "./Document";

export default function AppShell() {
  const [resume, updateResume] = useState<FormSchema>(formDefaultValues);
  return (
    <main className="flex h-screen w-screen gap-2 p-12">
      <TestForm updateResume={updateResume} />
      <div className="h-fit w-fit rounded-md bg-gray-100 p-8 text-sm">
        <pre>{JSON.stringify(resume, null, 4)}</pre>
      </div>
      <ResumeRenderer resumeData={resume} />
    </main>
  );
}

type ResumeRendererProps = {
  resumeData: FormSchema;
};

function ResumeRenderer({ resumeData }: ResumeRendererProps) {
  const [pdfURL, setPDFURL] = useState<string | null>(null);

  useEffect(() => {
    const generatePDF = async () => {
      const doc = <PDFDocument data={resumeData} />;
      const pdfInstance = pdf(doc);
      const blob = await pdfInstance.toBlob();
      const blobURL = URL.createObjectURL(blob);
      setPDFURL(blobURL);
    };

    generatePDF();
  }, [resumeData]);

  return <div>{pdfURL && <iframe src={pdfURL}></iframe>}</div>;
}

type PDFDocumentProps = {
  data: FormSchema;
};

function PDFDocument({ data }: PDFDocumentProps) {
  return (
    <Document>
      <Page size={"A4"}>
        <Text>{data.name}</Text>
      </Page>
    </Document>
  );
}

type TestFormProps = {
  updateResume: React.Dispatch<React.SetStateAction<FormSchema>>;
};

function TestForm({ updateResume }: TestFormProps) {
  const { register, watch, formState } = useForm<FormSchema>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      updateResume(value as FormSchema);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label>Name</label>
        <input {...register("name")} placeholder="name" />
      </div>
      <div className="flex flex-col gap-1">
        <label>Designation</label>
        <input {...register("designation")} placeholder="designation" />
      </div>
    </form>
  );
}
