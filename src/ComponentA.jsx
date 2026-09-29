import { useContext } from "react";
import { UserContext } from "./UserContext";
import ComponentB from "./ComponentB";

// ComponentA can read the shared context directly.
export default function ComponentA() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <p>ComponentA (reading from context)</p>
      <p>{user.name} — {user.role}</p>
      <ComponentB />
    </div>
  );
}
