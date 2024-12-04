import { UserProvider } from "../context/UserContext";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <UserProvider>
      <div className="m-1 p-4 border-black border-2">
        <h1 className="font-bold">ComponentA</h1>
        {/* <h2>{`Hello there, ${user}`}</h2> */}
        <ComponentB />
      </div>
    </UserProvider>
  );
};
export default ComponentA;

// Important:
//
// At this point ComponentA is the Provider, which means it only provides its children with the UserContext, not itself!
// If you want to use the state(s) provided by the UserContext in ComponentA too,
// you need to declare the parent of ComponentA to be the Provider first.
//
// Meaning: Try it out and reconstruct this step of implementing the "<UserProvider>" into ComponentA
//          instead in your App.jsx and wrap ComponentA inside the "<UserProvider>".
//          Dont forget to remove the "<UserProvider>" from ComponentA.
