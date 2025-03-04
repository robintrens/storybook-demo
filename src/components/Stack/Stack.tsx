import { CSSProperties, PropsWithChildren } from "react";

type StackProps = PropsWithChildren & {
  orientaion: "horizondal" | "vertical";
  responsive: boolean;
};

const Stack = ({ children, orientaion, responsive }: StackProps) => {
  const orientaionStyles: Record<StackProps["orientaion"], CSSProperties> = {
    horizondal: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      flexWrap: responsive ? "wrap" : "nowrap",
    },
    vertical: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  };
  return (
    <div style={{ width: "50%", border: "1px solid #e2e2e2", padding: "5px" }}>
      <div style={{ ...orientaionStyles[orientaion] }}>{children}</div>
    </div>
  );
};

export default Stack;
