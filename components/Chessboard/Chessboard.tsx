import Line from "./Line";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#444",
  minHeight: "100vh",
  minWidth: "100vw",
};

const Chessboard: React.FC = () => (
  <div style={styles}>
    <Line />
    <Line alternating />
    <Line />
    <Line alternating />
    <Line />
    <Line alternating />
    <Line />
    <Line alternating />
  </div>
);

export default Chessboard;
