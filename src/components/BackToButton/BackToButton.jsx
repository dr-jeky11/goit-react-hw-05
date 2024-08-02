import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./BackToButton.module.css";

export default function BackToButton({ to, children }) {
  return (
    <Link to={to} className={s.button}>
      {children}
    </Link>
  );
}

BackToButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
