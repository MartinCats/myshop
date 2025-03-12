import { FaRegWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { SiGooglehome, SiAtlassian, SiMaildotcom } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";

function Navbar({ toggleMenu, menuOpened, styles }) {
  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: <SiGooglehome />,
    },
    {
      to: "/collection",
      label: "Collection",
      icon: <BsCollectionFill />,
    },
    {
      to: "/about",
      label: "About",
      icon: <SiAtlassian />,
    },
    {
      to: "/mailto:patsathorn.c@kkumail.com",
      label: "Contact",
      icon: <SiMaildotcom />,
    },
  ];

  return (
    <nav className={styles}>
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-xl self-end cursor-pointer relative left-7 text-blue-500 hover:text-blue-600 "
          />

          <Link to={"/"} className="font-bold text-2xl mb-10">
            <h1 className="text-blue-500 hover:text-blue-600">Shoppee</h1>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex hover:text-blue-600">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? "active-link flex-center gap-x-2 "
                : "flex-center gap-x-2 "
            }
            onClick={menuOpened && toggleMenu}
          >
            {icon}
            <h5 className="text-[16px]">{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
