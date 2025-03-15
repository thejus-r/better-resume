const FloatBar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-8 items-center gap-4 rounded-full bg-white p-2 drop-shadow-2xl">
      <div className="p-2">FileName.pdf</div>
      <button className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
        Download
      </button>
    </div>
  );
};

export { FloatBar };
