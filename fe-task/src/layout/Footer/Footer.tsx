import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook_icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin_icon.svg";
import { ReactComponent as XTwitlerIcon } from "../../assets/icons/x_twitler_icon.svg";
import '../../shared/styles/sharedStyles.scss'

const Footer = () => {
  const footerColumns = [
    {
      columnTitle: "About",
      items: [
        { label: "About us", link: "/about" },
        { label: "Contact us", link: "/contact-us" },
        { label: "Feedback", link: "/feedback" },
      ],
    },
    {
      columnTitle: "Services",
      items: [
        { label: "Advertise", link: "/advertise" },
        { label: "Out partners", link: "/out-partners" },
        { label: "GlobalCapital Events", link: "/global-capital-events" },
        { label: "Social community", link: "/social-community" },
      ],
    },
    {
      columnTitle: "My account",
      items: [
        { label: "Subscribe", link: "/subscribe" },
        { label: "FAQ", link: "/fqa" },
        { label: "Renew", link: "/renew" },
      ],
    },
    {
      columnTitle: "A lot of items",
      items: [
        { label: "Renew", link: "/renew" },
        { label: "Subscribe", link: "/subscribe" },
        { label: "FAQ", link: "/fqa" },
        { label: "Feedback", link: "/feedback" },
        { label: "Renew 2", link: "/renew" },
        { label: "Cookies", link: "/cookies" },
        { label: "Privacy Policy", link: "/privacy-policy" },
      ],
    },
    {
      columnTitle: "Column Six",
      items: [
        { label: "Subscribe", link: "/subscribe" },
        { label: "FAQ", link: "/fqa" },
        { label: "Renew", link: "/renew" },
      ],
    },
  ];

  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`${styles["top-section"]}`}>
        <div className={`${styles["footer-socials"]}`}>
          <div className={`${styles["logo"]}`}>
            <Logo />
          </div>
          <div className={`${styles["footer-socials-buttons"]} d-flex d-md-none`}>
            <span>Follow us on:</span>
            <FacebookIcon />
            <LinkedinIcon />
            <XTwitlerIcon />
          </div>
        </div>
        <div className={`${styles["footer-content"]}`}>
          {footerColumns.map((footerColumn, index) => (
            <div
              key={`${footerColumn.columnTitle}-${index}`}
              className={`${styles["footer-column"]}`}
            >
              <p className={`${styles["footer-title"]}`}>
                {footerColumn.columnTitle}
              </p>
              <ul className={`${styles["footer-items"]}`}>
                {footerColumn.items.map((item) => (
                  <li key={`${footerColumn.columnTitle}-${item.label}`}>
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles["footer-socials-buttons"]} d-none d-md-flex`}>
            <span>Follow us on:</span>
            <FacebookIcon />
            <LinkedinIcon />
            <XTwitlerIcon />
          </div>
      <div className={`${styles["bottom-section"]}`}>
        <span className={`${styles["addess"]}`}>Insurance Insider is part of the Delinian Group, Delinian Limited, 4 Bouverie Street, London, EC4Y 8AX, Registered in England & Wales, Company number 00954730</span>
        <div className={`${styles["links"]}`}>
        <Link to='/accessibility'>Accessibility</Link>
        <Link to='/terms-of-use'>Terms of Use</Link>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/modern-slavery-statement'>Modern Slavery Statement</Link>
        <Link to='/cookies-settings'>Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
