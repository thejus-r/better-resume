import { MasonryCard } from "@components/MasonryCard";
import { PersonalDetailsContent } from "@components/PersonalDetailsContent";
import { Content, Header, Icon, Control } from "@components/SectionHeader";
import { IconButton } from "@components/ui/IconButton";
import { AddressBook, PencilSimple } from "@phosphor-icons/react/dist/ssr";
import { Masonry } from "react-plock";

function App() {
  const items = [
    Personal,
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

const Personal = () => {
  return <MasonryCard content={<PersonalDetailsContent />} />;
};

const WorkDetailsCard = () => {
  return (
    <div className="h-96 rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Work Experience</Content>
        <Control>
          <IconButton className="text-blue-500">
            <IconButton.Icon className="fill-blue-500">
              <PencilSimple className="fill-inherit" size={16} />
            </IconButton.Icon>
            <IconButton.Content>Edit</IconButton.Content>
          </IconButton>
        </Control>
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
