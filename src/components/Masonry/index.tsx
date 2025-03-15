import { ProjectSection } from "@features/project";
import { SkillSection } from "@features/skills";
import { PersonalSection } from "@features/personal";
import { WorkExperienceSection } from "@features/work";
import { Masonry } from "react-plock";

const cards = [
  () => (
    <MasonryCard>
      <PersonalSection />
    </MasonryCard>
  ),
  () => (
    <MasonryCard>
      <WorkExperienceSection />
    </MasonryCard>
  ),
  () => (
    <MasonryCard>
      <ProjectSection />
    </MasonryCard>
  ),
  () => (
    <MasonryCard>
      <SkillSection />
    </MasonryCard>
  ),
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
        media: [640, 1080, 1080],
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
