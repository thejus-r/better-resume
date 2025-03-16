const Header = () => {
  return <div>This will be section header</div>;
};

const Icon = () => {
  return <div>icon</div>;
};

type TitleProps = {
  required?: boolean;
};
const Title = ({ required }: TitleProps) => {
  return (
    <h3>
      Personal Details
      {required && <span className="text-red-500">*</span>}
    </h3>
  );
};

const Action = () => {
  return <div></div>;
};

const Root = Header;
Header.Root = Root;
Header.Icon = Icon;
Header.Title = Title;
Header.Action = Action;

export { Root, Header, Icon, Title, Action };
