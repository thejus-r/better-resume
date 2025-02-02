interface MasonryCardProps {
  content: React.ReactNode;
}

const MasonryCard = ({ content }: MasonryCardProps) => {
  return (
    <div>
      <div>HeaderComp Goes Here</div>
      <div>{content}</div>
    </div>
  );
};

export { MasonryCard };
