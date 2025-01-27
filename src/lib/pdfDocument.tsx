import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useResumeStore, Sections, SectionType } from "../store/store";

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

  personName: {
    fontSize: 28,
  },
});

const renderOrder: SectionType[] = ["personal", "personal"];

const Section = (section: SectionType, data: Sections) => {
  return (
    <View style={styles.section}>
      <Text style={styles.personName}></Text>
    </View>
  );
};

const PDFDoc = () => {
  const { sections } = useResumeStore();

  return (
    <Document>
      <Page size="A4">
        {renderOrder.map(() => (
          <Text>Hi</Text>
        ))}
      </Page>
    </Document>
  );
};

export { PDFDoc };
