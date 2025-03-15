import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { type Project } from "@features/project/type";

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
    paddingLeft: 12,
    flexDirection: "column",
    gap: 4,
    fontSize: 12,
  },
  name: {
    fontFamily: "Times-Bold",
    fontWeight: "bold",
  },
});

const ProjectView = ({ name, description }: Project) => (
  <View style={styles.wrapper}>
    <Text style={styles.name}>{name}</Text>
    <Text>{description}</Text>
  </View>
);

export { ProjectView };
