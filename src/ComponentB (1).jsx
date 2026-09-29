import ComponentC from "./ComponentC";

// Same here — ComponentB is untouched by "user" entirely.
export default function ComponentB() {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <p>ComponentB (doesn't touch "user")</p>
      <ComponentC />
    </div>
  );
}
