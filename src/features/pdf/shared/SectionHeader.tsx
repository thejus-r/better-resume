import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  sectionHeader: {
    width: "100%",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

const SectionHeader = ({ sectionName }: { sectionName: string }) => (
  <View style={styles.sectionHeader}>
    <Text>{sectionName}</Text>
  </View>
);

export default SectionHeader;
