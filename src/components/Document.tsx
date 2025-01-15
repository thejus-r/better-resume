import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import type { FormSchema } from "../lib/formSchema";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  personName: {
    fontSize: 24,
    textAlign: "center",
  },
  desc: {
    fontSize: 8,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

function MyDocument() {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <Text style={styles.personName}>Thejus Rajendran</Text>
      </Page>
    </Document>
  );
}

export default MyDocument;
