import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { TWorkExperience } from "../../../types/sections";

const workStyles = StyleSheet.create({
  wrapper: {
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

const WorkCard = ({ work }: { work: TWorkExperience }) => (
  <View style={workStyles.wrapper}>
    <View style={workStyles.workInfoContainer}>
      <View style={workStyles.roleAndCompanyName}>
        <Text style={workStyles.role}>{work.role}</Text>
        <Text>-</Text>
        <Text>{work.companyName}</Text>
      </View>
      <View>
        {work.currentCompany ? (
          <Text>{work.from} - Present</Text>
        ) : (
          <Text>
            {work.from} - {work.to}
          </Text>
        )}
      </View>
    </View>
    <View>
      <Text style={workStyles.paragraph}>{work.description}</Text>
    </View>
  </View>
);

export { WorkCard };
