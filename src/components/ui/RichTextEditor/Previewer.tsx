const PreviewRichText = ({ htmlString }: { htmlString: string }) => {
  return (
    <div
      className="PreviewProse text-gray-500"
      dangerouslySetInnerHTML={{
        __html: htmlString,
      }}
    ></div>
  );
};

export { PreviewRichText };
