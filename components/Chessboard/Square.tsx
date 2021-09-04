interface SquareType {
  alternating?: boolean;
}

const Square: React.FC<SquareType> = ({ alternating }) => {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: alternating ? "#000" : "#fff",
  };
  return <div style={style} />;
};

export default Square;
