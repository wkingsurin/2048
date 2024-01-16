export default function Cell({ mainClasses, size, color, children }) {
  console.log("render Cell");

  return (
    <div
      className={mainClasses.cell}
      style={{ fontSize: `${size}px`, background: color }}
    >
      {children}
    </div>
  );
}
