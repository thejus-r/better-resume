import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 12,
    fontSize: 12,
  },
});

const SkillsView = ({ skills }: { skills: string }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{skills}</Text>
    </View>
  );
};

export { SkillsView };
