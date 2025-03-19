import { MasonryLayout } from "@components/Masonry";
import { NavBar } from "@components/NavBar";
function App() {
  return (
    <div className="flex relative h-screen flex-col w-screen gap-4">
      <NavBar />
      <MasonryLayout />
    </div>
  );
}

export default App;
