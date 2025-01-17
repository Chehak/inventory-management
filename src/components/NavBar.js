import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const types = useSelector((state) => state.fields).types
  const handleTypeClick = (typeId) => {
    navigate("/type/" + typeId);
  };

  const objectTypeList = types.map((type) => ({
    typeId: type.typeId,
    objectType: type.data.staticFields.find((field) => field.name === "Object Type")?.value || "",
  }));
  return (
    <div className="navbar bg-neutral">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            {objectTypeList.map((item) => (
              <li key={item.typeId}>
                <a>{item.objectType}</a>
              </li>
            ))}
            <li>
              <Link to="/types">Manage Types</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Objector</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {objectTypeList
            .filter((item) => item.objectType) 
            .map((item) => (
              <li key={item.typeId} onClick={() => handleTypeClick(item.typeId)}>
                <a>{item.objectType}</a>
              </li>
            ))}
          <li>
            <Link to="/types">Manage Types</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
