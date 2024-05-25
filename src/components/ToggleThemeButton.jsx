import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import PropTypes from "prop-types";

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </button>
    </div>
  );
};

ToggleThemeButton.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ToggleThemeButton;
