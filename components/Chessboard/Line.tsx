import Square from "./Square";

interface LineType {
  alternating?: boolean;
}

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#444",
};

const Line: React.FC<LineType> = ({ alternating }) => (
  <div style={styles}>
    <Square alternating={alternating} />
    <Square alternating={!alternating} />
    <Square alternating={alternating} />
    <Square alternating={!alternating} />
    <Square alternating={alternating} />
    <Square alternating={!alternating} />
    <Square alternating={alternating} />
    <Square alternating={!alternating} />
  </div>
);

export default Line;
