import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-black">
      <div className=" flex w-[60%] mx-auto py-10 text-white font-semibold">
        <ul className="flex gap-4">
          <li>
            <NavLink to={"/ToDo"}>ToDo</NavLink>
          </li>
          <li>
            <NavLink to={"/Weather"}>Weather </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
