export default function Output({ bill, per1, per2 }) {
  const tip = (bill * (per1 + per2)) / 2 / 100;

  const total = bill + tip;

  return (
    <div>
      {total > 0 ? (
        <h2>
          You pay ${total} (${bill} bill + ${tip} tip)
        </h2>
      ) : (
        <h3>Add Bill Amount & Tip</h3>
      )}
    </div>
  );
}
