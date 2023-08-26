import "aos/dist/aos.css";
import PropTypes from "prop-types";

 const Animation = ({ children, type, ...other }) => {
  return <div {...other} data-aos={type}>{children}</div>;
};

export default Animation;

Animation.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
  };