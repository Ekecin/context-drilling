import { useContext } from "react";
import { UserContext } from "./UserContext";

// ComponentC reads the user directly from context.
export default function ComponentC() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #4ade80", padding: 12 }}>
      <p>ComponentC (reads from context and can update it)</p>
      <p>
        {user.name} — {user.role}
      </p>
      <button onClick={() => setUser({ name: "Jane", role: "Tech Lead" })}>
        Promote user
      </button>
    </div>
  );
}
