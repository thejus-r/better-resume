import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Sections, SectionType } from "../store/store";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

  sectionTitle: {
    fontSize: 12,
  },

  personName: {
    fontSize: 28,
  },
});

const renderOrder: SectionType[] = ["personal"];

type SectionProps = {
  section: SectionType;
  data: Sections;
};
const Section = ({ section, data }: SectionProps) => {
  if (data.get(section)) {
    const sectionDetails = data.get(section);
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{section}</Text>
        <Text style={styles.personName}>{sectionDetails!.name}</Text>
      </View>
    );
  }
};

type PDFProps = {
  sections: Sections;
};

const PDF = ({ sections }: PDFProps) => {
  return (
    <Document>
      <Page size="A4">
        {renderOrder.map((key, idx) => (
          <Section key={idx} section={key} data={sections} />
        ))}
      </Page>
    </Document>
  );
};

export { PDF };
export type { PDFProps };
