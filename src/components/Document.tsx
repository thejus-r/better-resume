import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    margin: 16,
    padding: 16,
  },
  title: {
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

const section = [
  {
    title: "Skills",
    desc: "historia de mis famosos hechos, que el sabio que los escribiere no ponga, cuando llegue a contar esta mi primera salida tan de mañana, desta manera?: Apenas había el rubicundo Apolo tendido p",
    list: ["React", "Typescript"],
  },
  {
    title: "Projects",
    desc: "historia de mis famosos hechos, que el sabio que los escribiere no ponga, cuando llegue a contar esta mi primera salida tan de mañana, desta manera?: Apenas había el rubicundo Apolo tendido p",
    list: ["Better Resume", "Tiny-Ledger", "Tic-Tac-Toe"],
  },
];
function MyDocument() {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        {section.map((sec) => (
          <View style={styles.section}>
            <Text>{sec.title}</Text>
            <Text style={styles.desc}>{sec.desc}</Text>
            {sec.list.map((one) => (
              <Text>{one}</Text>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default MyDocument;
