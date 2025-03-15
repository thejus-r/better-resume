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

import type { ResumeData } from "./FloatBar";

import mockData from "./mockData";
import SectionHeader from "./shared/SectionHeader";

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
//

type ResumeDocumentProps = {
  resumeData: ResumeData;
};
const ResumeDocument = ({ resumeData }: ResumeDocumentProps) => {
  const { personal, work } = resumeData;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.personName}>{personal.name}</Text>
          <Text style={styles.role}>{personal.role}</Text>
          <View style={styles.headerTags}>
            <Text>Email: {personal.email}</Text>
            <Text>Phone: {personal.phoneNumber}</Text>
            <Text>Place: {personal.place}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <SectionHeader sectionName="Work Experience" />
          {work.map((el) => (
            <WorkCard key={el.id} work={el} />
          ))}
        </View>
        <View style={styles.section}>
          <SectionHeader sectionName="Projects" />
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
};

type TPDFProps = {
  resumeData: ResumeData;
};
const PDF = ({ resumeData }: TPDFProps) => (
  <PDFViewer className="absolute top-0 left-0 h-screen w-1/2 -translate-x-1/2 -translate-y-1/2">
    <ResumeDocument resumeData={resumeData} />
  </PDFViewer>
);

export { PDF };
