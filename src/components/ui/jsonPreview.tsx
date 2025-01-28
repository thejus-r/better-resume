import { useResumeStore } from "../../store/store";

const JSONPreview = () => {
  const { sections } = useResumeStore();

  return (
    <pre>
      <p className="text-sm">
        {JSON.stringify(sections.get("personal"), null, 2)}
      </p>
    </pre>
  );
};

export { JSONPreview };
