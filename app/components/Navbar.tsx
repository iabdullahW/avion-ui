import React from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
    <nav className="flex items-center justify-between p-6 ">
     {/* Search Icon */}
      <div className="flex items-center space-x-2">
        <FiSearch className="text-gray-600 w-5 h-5 cursor-pointer" />
    
      </div>

      {/* Top Header Name */}
      <div>
        <h1 className="text-2xl font-light  font-mono">Avion</h1>
      </div>
      {/* Cart and contact */}
     <div className="flex space-x-4">
        <FiShoppingCart className="text-gray-600 w-5 h-5 cursor-pointer" />
        <IoMdContact className="text-gray-600 w-5 h-5 cursor-pointer"  />
        </div>
        </nav>

        <hr className=" border-t border-gray-200 ml-10 mr-10" />
        <div className="flex justify-center">
  <ul className="flex items-center justify-between space-x-11 p-6 text-gray-600 text-sm">
    <li className="hover:text-gray-800 cursor-pointer">Plant pots</li>
    <li className="hover:text-gray-800 cursor-pointer">Ceramics</li>
    <li className="hover:text-gray-800 cursor-pointer">Tables</li>
    <li className="hover:text-gray-800 cursor-pointer">Chairs</li>
    <li className="hover:text-gray-800 cursor-pointer">Tableware</li>
    <li className="hover:text-gray-800 cursor-pointer">Cutlery</li>
  </ul>
</div>


    </div>
  );
};

export default Navbar;
