import Toggler from "./Toggler";

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-[90%] mx-auto my-5">
        <h1 className="text-3xl">calc</h1>
        <Toggler />
      
    </div>
  );
}
