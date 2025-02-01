import { Content, Header, Icon } from "@components/SectionHeader";
import { Entity } from "@components/ui/Entity";
import { AddressBook } from "@phosphor-icons/react/dist/ssr";
import { Masonry } from "react-plock";

function App() {
  const items = [
    PeronalDetailsCard,
    WorkDetailsCard,
    Skills,
    ContactDetailsCard,
    ProjectsCard,
  ];
  return (
    <div className="h-screen w-full bg-neutral-200/60 px-24">
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
    </div>
  );
}

export default App;

const PeronalDetailsCard = () => {
  return (
    <div className="h-auto rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Personal Details</Content>
      </Header>
      <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Entity label="Name" text="Thejus Rajendran" />
        <Entity label="Role" text="Full Stack Developer" />
        <Entity label="Email" text="thejusr1999@gmail.com" />
        <Entity label="Phone" text="+91 7994787149" />
        <Entity label="Place" text="Bengaluru, Karnataka" />
      </div>
    </div>
  );
};

const WorkDetailsCard = () => {
  return (
    <div className="h-96 rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Work Experience</Content>
      </Header>
    </div>
  );
};

const ProjectsCard = () => {
  return (
    <div className="h-32 rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Projects</Content>
      </Header>
    </div>
  );
};

const ContactDetailsCard = () => {
  return (
    <div className="h-32 rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Contact Details</Content>
      </Header>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="h-32 rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Skills</Content>
      </Header>
    </div>
  );
};
