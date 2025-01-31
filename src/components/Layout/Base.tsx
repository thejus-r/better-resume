interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const BaseLayout = ({ ...props }: BaseLayoutProps) => {
  return (
    <div className="mx-24 grid grid-cols-1 gap-4 md:grid-cols-3" {...props} />
  );
};

export { BaseLayout };
