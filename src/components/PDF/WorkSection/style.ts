import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  
    sectionTitle: {
      fontSize: 12,
    },
  
    personName: {
      fontSize: 28,
    },
  });

  export default styles