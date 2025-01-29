import { View, Text } from "@react-pdf/renderer";
import { SectionSchemaType } from "@lib/formSchema";
import styles from "./style";
import { SectionHeader } from "../Shared/SectionHeader";

const PersonalSection = ({
  sectionDetails,
}: {
  sectionDetails: SectionSchemaType;
}) => {
  // Tautology, but for LSP to satisfy, probably there is a better way to do this.
  if (sectionDetails.sectionName == "personal") {
    return (
      <View style={{ width: "100%" }}>
        <View style={styles.section}>
          <View style={styles.leftBox}>
            <Text style={styles.name}>{sectionDetails.name}</Text>
            <Text style={styles.designation}>{sectionDetails.designation}</Text>
          </View>
          <View style={styles.rightBox}>
            {sectionDetails.phoneNumber != "" ? (
              <Text style={styles.textBase}>{sectionDetails.phoneNumber}</Text>
            ) : (
              ""
            )}
            {sectionDetails.email != "" ? (
              <Text style={styles.textBase}> | {sectionDetails.email}</Text>
            ) : (
              ""
            )}
            {sectionDetails.place != "" ? (
              <Text style={styles.textBase}> | {sectionDetails.place}</Text>
            ) : (
              ""
            )}
          </View>
        </View>
        {sectionDetails.about ? (
          <View>
            <SectionHeader title="About" />
            <Text style={styles.textBase}>{sectionDetails.about}</Text>
          </View>
        ) : (
          ""
        )}
      </View>
    );
  }
};

export { PersonalSection };
