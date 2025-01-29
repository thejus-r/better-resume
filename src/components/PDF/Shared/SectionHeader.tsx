import { Line, View, Text, Svg } from "@react-pdf/renderer";

type SecionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SecionHeaderProps) => {
  return (
    <View
      style={{
        marginTop: 16,
        marginBottom: 6,
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "semibold",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
      </View>
      <Svg height={"2"} width={"1000"}>
        <Line
          style={{ strokeWidth: 1, stroke: "#999999" }}
          x1={0}
          x2={750}
          y1={0}
          y2={0}
        />
      </Svg>
    </View>
  );
};

export { SectionHeader };
