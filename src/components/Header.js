import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd ? "red" : "steelblue"} text={showAdd ? "Close" : "Add"} />
    </div>
  );
};

Header.defaultProps = {
  title: "default title",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in $(selector).select();

// const closeStyle = {
//   backgroundColor: "red",
// };

export default Header;
