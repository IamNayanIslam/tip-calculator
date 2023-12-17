export default function Reset({ reset, total }) {
  return (
    <div>
      <button onClick={reset} disabled={total > 0 ? false : true}>
        Reset
      </button>
    </div>
  );
}
