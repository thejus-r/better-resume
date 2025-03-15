import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ExtractParagraphs } from "../../../utils/strUtils";
import { TWorkExperience } from "@features/work/types";
import { format } from "date-fns";

const workStyles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
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
    paddingLeft: 8,
    marginTop: 2,
    gap: 4,
    fontSize: 11,
  },
});

const WorkCard = ({ work }: { work: TWorkExperience }) => {
  let description: string[] = [];

  if (work.description) {
    description = ExtractParagraphs(work.description);
  }
  return (
    <View style={workStyles.wrapper}>
      <View style={workStyles.workInfoContainer}>
        <View style={workStyles.roleAndCompanyName}>
          <Text style={workStyles.role}>{work.role}</Text>
          <Text>-</Text>
          <Text>{work.companyName}</Text>
        </View>
        <View>
          {work.currentCompany ? (
            <Text>{format(work.from, "MMM yyyy")} - Present</Text>
          ) : (
            <Text>
              {format(work.from, "MMM yyyy")} - {format(work.to, "MMM yyyy")}
            </Text>
          )}
        </View>
      </View>
      {description.length > 1 && (
        <View style={workStyles.paragraph}>
          {description.map((p) => (
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text>• </Text>
              <Text>{p}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export { WorkCard };
