import ComponentD from "./ComponentD";
// import { useUser } from "../context/UserContext";

const ComponentC = () => {
  // const { user, setUser, age, setAge } = useUser();
  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentC</h1>
      {/* <h2>{`You've finally arrived, ${user} ${age}`}</h2> */}
      <ComponentD />
    </div>
  );
};
export default ComponentC;
