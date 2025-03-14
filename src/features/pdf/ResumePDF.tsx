import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { WorkCard } from "./shared/WorkCard";
import { SkillsView } from "./shared/SkillsView";
import { ProjectView } from "./shared/ProjectView";

import mockData from "./mockData";

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

// Create Resume Document Component
const ResumeDocument = () => (
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
        {mockData.workExperience.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text>Projects</Text>
        </View>
        {mockData.projects.map((project) => (
          <ProjectView key={project.id} {...project} />
        ))}
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text>Skills</Text>
        </View>
        <SkillsView skills={mockData.skills} />
      </View>
    </Page>
  </Document>
);

const PDF = () => (
  <PDFViewer className="h-screen w-full">
    <ResumeDocument />
  </PDFViewer>
);

export { PDF };
