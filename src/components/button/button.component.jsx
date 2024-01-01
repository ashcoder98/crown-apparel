import './button.styles.scss';

const button_Type_Classes = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({children, buttonType, ...otherProps}) => {
return (
    <button className={`button-container ${button_Type_Classes[buttonType]}`}{...otherProps}>
        {children}
    </button>
)
};

export default Button;