import { Button } from "@components/ui/Button";
import { Link, PlusCircle } from "@phosphor-icons/react";
const SocialSection = () => {
  return (
    <Section>
      <Header
        action=<Button btnType={"text"} intent={"tertiary"}>
          <span>
            <PlusCircle />
          </span>
          add
        </Button>
        icon=<Link className="fill-inherit" />
        name="Social Links"
      />
    </Section>
  );
};

type HeaderProps = {
  name: string;
  icon: React.ReactNode;
  action: React.ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
      <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
        {props.icon}
      </div>
      <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
        {props.name}
      </h3>
      {props.action}
    </div>
  );
};

const Action = () => {
  return <button>Action</button>;
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2 p-2">{children}</div>;
};

const Root = Section;
Section.Root = Root;
Section.Header = Header;
Section.Action = Action;

export { SocialSection };
