import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    gap: "12px"
  },
  leftBox: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: "12px",
  },
  rightBox: {
    display: "flex",
    flexDirection: "row",
    gap: "4px"
  },
  sectionTitle: {
    fontSize: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "light"
  },
  textBase: {
    fontSize: 12,
  },
  designation: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#999999",
  },
});

export default styles;
