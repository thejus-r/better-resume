import { View, Text } from "@react-pdf/renderer";
import { SectionSchemaType } from "@lib/formSchema";
import styles from "./style";

const PersonalSection = ({
  sectionDetails,
}: {
  sectionDetails: SectionSchemaType;
}) => {
  // Tautology, but for LSP to satisfy, probably there is a better way to do this.
  if (sectionDetails.sectionName == "personal") {
    return (
      <View style={styles.section}>
        <Text style={styles.personName}>{sectionDetails.name}</Text>
        <Text style={styles.sectionTitle}>{sectionDetails.designation}</Text>
        <Text style={styles.sectionTitle}>{sectionDetails.email}</Text>
        <Text style={styles.sectionTitle}>{sectionDetails.place}</Text>
      </View>
    );
  }
};

export { PersonalSection };
