import { Page, View, Document } from "@react-pdf/renderer";
import {
  type SectionsType,
  type FormSchemaType,
  type SectionSchemaType,
} from "@lib/formSchema";
import { PersonalSection } from "@components/PDF/PersonalSection";
import { WorkSection } from "@components/PDF/WorkSection";

/** Render Order for the Sections.
 * So that in the Future, may provide the feature to reorder the sections
 */
const renderOrder: SectionsType[] = ["personal", "work", "education"];

/** Helps build the Sections based on the Key provided. */
function SectionFactory({
  section,
  sectionDetails,
}: {
  section: SectionsType;
  sectionDetails: SectionSchemaType;
}) {
  switch (section) {
    case "personal":
      return <PersonalSection sectionDetails={sectionDetails} />;
    case "work":
      return <WorkSection sectionDetails={sectionDetails} />;
    default:
      return <View />;
  }
}

type PDFProps = {
  sections: FormSchemaType;
};

const PDF = ({ sections }: PDFProps) => {
  return (
    <Document>
      <Page size="A4">
        <View style={{ padding: 10, margin: 10, fontFamily: "Times-Roman" }}>
          {renderOrder.map((key, index) => {
            if (sections.has(key)) {
              return (
                <SectionFactory
                  sectionDetails={sections.get(key) as SectionSchemaType}
                  section={key}
                  key={index}
                />
              );
            }
          })}
        </View>
      </Page>
    </Document>
  );
};

export { PDF };
export type { PDFProps };
