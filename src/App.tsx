import { MasonryLayout } from "@components/Masonry";
import { FloatBar } from "./features/pdf/FloatBar";
function App() {
  return (
    <div className="flex w-screen items-center justify-center p-4 md:px-24">
      <MasonryLayout />
      <FloatBar />
    </div>
  );
}

export default App;
