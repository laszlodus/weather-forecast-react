export default function uvHelper(value) {
  if (value <= 2) return <span style={{ color: "green" }}>Low</span>;
  if (value <= 5) return <span style={{ color: "yellow" }}>Moderate</span>;
  if (value <= 7) return <span style={{ color: "orange" }}>High</span>;
  if (value <= 10) return <span style={{ color: "red" }}>Very High</span>;
  return <span style={{ color: "purple" }}>Extreme</span>;
}
