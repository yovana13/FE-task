import { NavbarPorps } from "../../models/NavbarPorps";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron_icon.svg";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger_icon.svg";
import styles from "./Navbar.module.scss";
import { useState } from "react";

const Navbar: React.FC<{ navbarItems: NavbarPorps[] }> = ({ navbarItems }) => {
  const [showMobileMenu, setShowModileMenu] = useState(false);

  const openBurgerMenuMobile = () => {
    setShowModileMenu(true);
  };

  return (
    <>
      <ul className={`${styles["navbar"]}`}>
        {navbarItems.map((navbarItem) => (
          <li
            className={`${styles["nav-item"]} ${navbarItem.dropdownItems?.length ? styles["dropdown"] : ""}`}
            key={navbarItem.link}
          >
            <a className={`${styles["nav-link"]}`} href={navbarItem.link}>
              {navbarItem.label}
            </a>
            {navbarItem.dropdownItems?.length && <ChevronIcon />}
            {navbarItem.dropdownItems?.length && (
              <ul className={`${styles["dropdown-menu"]}`}>
                {navbarItem.dropdownItems.map((dropdownItem) => (
                  <li
                    className={`${styles["dropdown-item"]}`}
                    key={dropdownItem.link}
                  >
                    <a href={dropdownItem.link}>{dropdownItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div
        className={`${styles["burger-icon"]}`}
        onClick={openBurgerMenuMobile}
      >
        <BurgerIcon />
      </div>
    </>
  );
};
export default Navbar;
