import { PersonalSection } from "@components/Sections/Personal";
import { Masonry } from "react-plock";

const cards = [
  () => (
    <MasonryCard>
      <PersonalSection />
    </MasonryCard>
  ),
  () => <MasonryCard>Item 2</MasonryCard>,
  () => <MasonryCard>Item 3</MasonryCard>,
  () => <MasonryCard>Item 4</MasonryCard>,
  () => <MasonryCard>Item 5</MasonryCard>,
];

// Creates the Layout using the above Array of () => React.ReactNode
const MasonryLayout = () => {
  return (
    <Masonry
      className="w-full"
      items={cards}
      config={{
        columns: [1, 2, 3],
        gap: [8, 12, 16],
        media: [640, 768, 1024],
        useBalancedLayout: true,
      }}
      render={(Element, idx) => <Element key={idx} />}
    />
  );
};

const MasonryCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-auto w-full rounded-3xl bg-white">{children}</div>;
};

export { MasonryLayout };
