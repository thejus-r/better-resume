import { Content, Control, Header, Icon } from "@components/SectionHeader";
import { Entity } from "@components/ui/Entity";
import { IconButton } from "@components/ui/IconButton";
import { AddressBook, PencilSimple } from "@phosphor-icons/react";

const PersonalDetailsContent = () => {
  return (
    <div className="h-auto rounded-3xl bg-white p-2">
      <Header>
        <Icon icon={AddressBook} />
        <Content>Personal Details</Content>
        <Control>
          <IconButton className="text-blue-500">
            <IconButton.Icon className="fill-blue-500">
              <PencilSimple className="fill-inherit" size={16} />
            </IconButton.Icon>
            <IconButton.Content>Edit</IconButton.Content>
          </IconButton>
        </Control>
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

export { PersonalDetailsContent };
