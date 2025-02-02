import { Masonry } from "react-plock";

const Item1 = () => {
  return <div>Item 1</div>;
};

const items = [Item1];

const MasonryLayout = () => {
  return (
    <Masonry
      items={items}
      config={{
        columns: [1, 2, 3],
        gap: [8, 12, 16],
        media: [640, 768, 1024],
        useBalancedLayout: true,
      }}
      render={(Item, idx) => <Item key={idx} />}
    />
  );
};

export { MasonryLayout };
