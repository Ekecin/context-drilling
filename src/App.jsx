import { useState } from "react";
import { UserContext } from "./UserContext";
import ComponentA from "./ComponentA";

// CONTEXT API VERSION
// App still owns "user", but instead of passing it as a prop,
// it wraps the tree in a Provider. Any descendant can read it directly.
export default function App() {
  const [user, setUser] = useState({ name: "Ekene", role: "Developer" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Context API Example</h1>
        <ComponentA />
      </div>
    </UserContext.Provider>
  );
}