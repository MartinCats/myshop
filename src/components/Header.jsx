import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
// icons
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";


function Header() {
  const {setShowSearch, getCartCount} = useContext(ShopContext) 
  const [menuOpened, setMenuOpened] = useState(false);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    // setCartItems({})
    navigate("/login");
  };

  return (
    <header className="p-5 w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex-center">
        <Link to="/" className="font-bold text-[24px] flex-1 xl:hidden ">
          <h1 className="shadow-sm text-blue-500 flex-center size-28 px-2 absolute -top-5 rounded-full bg-white ">
            Logo
          </h1>
        </Link>

        <div className="flex-1">
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            styles={`${
              menuOpened
                ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl"
                : "hidden xl:flex gap-x-5 xl:gap-x-8 font-base rounded-full px-2 py-1"
            }`}
          />
        </div>

        <Link to="/" className="font-bold text-[24px] flex-1 hidden xl:flex ">
          <h1 className="shadow-sm text-blue-500 flex-center size-28 px-2 absolute -top-5 rounded-full bg-white">
            Logo
          </h1>
        </Link>

        {/* right part */}
        <div className="flex-between gap-x-2 xs:gap-x-8">
          {!menuOpened && (
            <FaBarsStaggered
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-2xl"
            />
          )}
          <div>
            <FaSearch onClick={()=>setShowSearch((prev)=>!prev)} className="cursor-pointer text-xl" />
          </div>
          <Link to={"/cart"} className="flex relative">
            <GiBeachBag className="text-[25px]" />
            <span className="bg-blue-500 text-white font-sm absolute right-0.5 -top-3 flex-center w-5 h-5 rounded-full shadow-inner ">
              {getCartCount()}
            </span>
          </Link>

          <div className="group relative">
            <div onClick={() => !token && navigate("/login")}>
              <FaRegCircleUser className="text-2xl cursor-pointer" />
            </div>

            {token && (
              <>
                <ul
                  className="bg-white shadow-sm p-3 w-32 ring-1
                 ring-slate-900/15 rounded absolute right-0 flex-col
                 hidden group-hover:flex"
                >
                  <li
                    onClick={() => navigate("/order")} // comment
                    className="flex-between cursor-pointer"
                  >
                    <p>Orders</p>
                    <TbArrowNarrowRight className="text-[19px] opacity-50" />
                  </li>
                  <hr className="my-2 text-slate-900/25" />

                  <li
                    onClick={logout} // comment
                    className="flex-between cursor-pointer"
                  >
                    <p>Logout</p>
                    <TbArrowNarrowRight className="text-[19px] opacity-50" />
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
