import ComponentB from "./ComponentB";

// No "user" prop here at all — nothing to forward.
export default function ComponentA() {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <p>ComponentA (doesn't touch "user")</p>
      <ComponentB />
    </div>
  );
}
