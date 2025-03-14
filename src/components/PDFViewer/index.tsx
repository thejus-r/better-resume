import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
    fontFamily: "Times-Roman",
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
  },
  personalSection: {
    gap: 5,
  },
  personName: {
    textAlign: "center",
    fontSize: 24,
  },
  role: {
    textAlign: "center",
    fontSize: 14,
    color: "#737373",
  },
  headerTags: {
    marginTop: 4,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 10,
    flexDirection: "row",
    color: "#a5a5a5",
    gap: 12,
  },
  paragraph: {
    fontSize: 12,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.personName}>Thejus Rajendran</Text>
        <Text style={styles.role}>Full Stack Developer</Text>
        <View style={styles.headerTags}>
          <Text>Email: thejusr1999@gmail.com</Text>
          <Text>Phone: 7994787149</Text>
          <Text>Place: Bangalore, Karnataka</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text>Work Experience</Text>
        </View>
        <WorkCard />
        <WorkCard />
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text>Projects</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const workStyles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 12,
    flexDirection: "column",
    gap: 4,
  },

  workInfoContainer: {
    flexDirection: "row",
  },

  role: {
    color: "#000000",
    fontFamily: "Times-Bold",
  },

  roleAndCompanyName: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 4,
    fontFamily: "Times-Italic",
    color: "#737373",
  },
  paragraph: {
    fontSize: 11,
  },
});
const WorkCard = () => (
  <View style={workStyles.wrapper}>
    <View style={workStyles.workInfoContainer}>
      <View style={workStyles.roleAndCompanyName}>
        <Text style={workStyles.role}>UI/UX Designer</Text>
        <Text>-</Text>
        <Text>Flooid LLP</Text>
      </View>
      <View>
        <Text>April 2023 - October 2024</Text>
      </View>
    </View>
    <View>
      <Text style={workStyles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </View>
  </View>
);

const PDFPreview = () => (
  <PDFViewer className="h-screen w-full">
    <MyDocument />
  </PDFViewer>
);

export { PDFPreview };
