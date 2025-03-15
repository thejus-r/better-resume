import { MasonryLayout } from "@components/Masonry";
import { PDF } from "./features/pdf/ResumePDF";
import { FloatBar } from "./features/pdf/FloatBar";
function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 p-4 md:px-24">
      {/* <PDF /> */}
      <MasonryLayout />
      <FloatBar />
    </div>
  );
}

export default App;
