import PropTypes from "prop-types";

function Button({text}){
    return <button className="bg-black text-white">{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
 export default Button;