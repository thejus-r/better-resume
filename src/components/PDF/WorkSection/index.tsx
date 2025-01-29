import { View, Text } from "@react-pdf/renderer";
import { SectionSchemaType } from "@lib/formSchema";
import styles from "./style";

const WorkSection = ({
  sectionDetails,
}: {
  sectionDetails: SectionSchemaType;
}) => {
  // Tautology, but for LSP to satisfy, probably there is a better way to do this.
  if (sectionDetails.sectionName == "work") {
    return (
      <View style={styles.section}>
        <Text style={styles.personName}>{sectionDetails.company}</Text>
        <Text style={styles.sectionTitle}>{sectionDetails.role}</Text>
      </View>
    );
  }
};

export { WorkSection };
