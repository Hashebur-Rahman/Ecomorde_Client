import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/products"}>
            {t("collection")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>{t("about_us")}</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/register"}>{t("register")}</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/login"}>{t("login")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
