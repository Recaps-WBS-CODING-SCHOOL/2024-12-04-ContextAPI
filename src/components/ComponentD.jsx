import { useUser } from "../context/UserContext";

const ComponentD = () => {
  const { user, setUser, age, setAge } = useUser();

  const updateUser = () => {
    setUser("Garrett");
    setAge(30);
  };
  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentD</h1>
      <h2>{`You've finally arrived, ${user} ${age}`}</h2>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};
export default ComponentD;
