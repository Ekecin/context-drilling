import { useContext } from "react";
import { UserContext } from "./UserContext";
import ComponentC from "./ComponentC";

// ComponentB can also read the shared context directly.
export default function ComponentB() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <p>ComponentB (reading from context)</p>
      <p>{user.name} — {user.role}</p>
      <ComponentC />
    </div>
  );
}
