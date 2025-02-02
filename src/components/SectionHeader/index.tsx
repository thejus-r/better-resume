import type { Icon as IconType } from "@phosphor-icons/react";

interface SectionHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > { }

const Header = ({ ...props }: SectionHeaderProps) => {
  return (
    <div
      className="flex h-12 items-center gap-2 rounded-2xl bg-gray-100 px-1"
      {...props}
    />
  );
};

interface ContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > { }

const Content = ({ ...props }: ContentProps) => {
  return (
    <h3 className="font-mono text-xs uppercase text-gray-800 w-full" {...props} />
  );
};

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
}
const Icon = ({ icon, ...props }: IconProps) => {
  const IconSVG = icon
  return (
    <div className="rounded-2xl bg-gray-900 fill-white p-2.5" {...props}>
      <IconSVG fill="white" size={20} />
    </div>
  );
};


interface ControlProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > { }

const Control = ({ ...props }: ControlProps) => {
  return <div {...props} />
}

const Root = Header;
Header.Root = Root;
Header.Content = Content;
Header.Icon = Icon;
Header.Control = Control;

export { Root, Header, Content, Icon, Control };
