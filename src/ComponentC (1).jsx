import { useContext } from "react";
import { UserContext } from "./UserContext";

// ComponentC grabs "user" directly from context —
// no matter how deeply it's nested, it needs no help from its parents.
export default function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #4ade80", padding: 12 }}>
      <p>ComponentC (reads "user" straight from context)</p>
      <p>
        {user.name} — {user.role}
      </p>
    </div>
  );
}
