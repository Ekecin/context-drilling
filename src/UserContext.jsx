import { createContext } from "react";

// A single place components can subscribe to,
// instead of passing "user" through every level.
export const UserContext = createContext({
  user: null,
  setUser: () => {},
});
