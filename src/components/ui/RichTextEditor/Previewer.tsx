const PreviewRichText = ({ htmlString }: { htmlString: string }) => {
  return (
    <div
      className="PreviewProse"
      dangerouslySetInnerHTML={{
        __html: htmlString,
      }}
    ></div>
  );
};

export { PreviewRichText };
