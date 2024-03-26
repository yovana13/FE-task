import HeaderButton from "../../components/ui-components/HeaderButtons/HeaderButton";
import { HeaderButtonColorEnum } from "../../shared/enums/HeaderButtonColorEnum";
import styles from "./Header.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as XCrossIcon } from "../../assets/icons/x_cross_icon.svg";
import Navbar from "../Navbar/Navbar";
import { NavbarPorps } from "../../models/NavbarPorps";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showPricing = () => {};
  const showFreeTrial = () => {};
  const login = () => {};

  const openSearch = () => {
    if (!isSearchOpen) setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const navbar: NavbarPorps[] = [
    {
      label: "Markets",
      link: "/markets",
    },
    {
      label: "People and Markets",
      link: "/people-and-markets",
    },
    {
      label: "Data",
      link: "/data",
      dropdownItems: [
        {
          label: "IPO Pipeline",
          link: "/ipo-pipeline",
        },
        {
          label: "Priced deals",
          link: "/priced-deals",
        },
        {
          label: "People Tracker",
          link: "/people-tracker",
        },
        {
          label: "Top borrowers",
          link: "/top-borrowers",
        },
        {
          label: "Primary Market Monitor",
          link: "/primary-market-monitor",
        },
      ],
    },
    {
      label: "Podcasts",
      link: "/podcasts",
    },
    {
      label: "Special Reports",
      link: "/special-reports",
    },
    {
      label: "Awards",
      link: "/awards",
    },
    {
      label: "GC Live",
      link: "/gc-live",
    },
    {
      label: "League Tables",
      link: "/league-tables",
    },
    {
      label: "The Weekly",
      link: "/the-weekly",
    },
  ];
  return (
    <header className={`${styles["header"]}`}>
      <div className={`${styles["top-nav"]}`}>
        <ul>
          <li>
            <a
              className={`${styles["nav-link"]} ${styles["active"]}`}
              href="/global-capital"
            >
              Global Capital
            </a>
          </li>
          <li>
            <a className={`${styles["nav-link"]}`} href="/securitization">
              Securitization
            </a>
          </li>
          <li>
            <a className={`${styles["nav-link"]}`} href="/global-markets">
              Global Markets
            </a>
          </li>
        </ul>
        <div className={`${styles["buttons-section"]}`}>
          <div
            className={`${styles["search-section"]} ${isSearchOpen ? styles["active"] : ""}`}
            onClick={openSearch}
          >
            <SearchIcon />
            <input type="text" placeholder="Search key words, topics..." />
            <button
              className={`${styles["close-serach-button"]}`}
              onClick={closeSearch}
            >
              <XCrossIcon />
            </button>
          </div>

          <HeaderButton
            label="Pricing"
            onClick={showPricing}
            buttonColor={HeaderButtonColorEnum.White}
          />
          <HeaderButton
            label="Free Trial"
            onClick={showFreeTrial}
            buttonColor={HeaderButtonColorEnum.LightBlue}
          />
          <HeaderButton
            label="Login"
            onClick={login}
            buttonColor={HeaderButtonColorEnum.Transparent}
          />
        </div>
      </div>
      <nav className={`${styles["main-nav"]}`}>
        <Logo className={`${styles["logo-icon"]}`} />
        <Navbar navbarItems={navbar} />
      </nav>
    </header>
  );
};
export default Header;
