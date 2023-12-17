export default function SelectPercentage({
  children,
  percentage,
  setPercentage,
}) {
  return (
    <div className="percentage">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0} disabled className="font4"></option>
        <option value={5}>It was okay (5%)</option>
        <option value={0} disabled className="font4"></option>
        <option value={10}>It was good (10%)</option>
        <option value={0} disabled className="font4"></option>
        <option value={15}>It was amazing (15%)</option>
      </select>
    </div>
  );
}
