import './button.style.scss';


const BUTTON_TYPE_CLASSES = {


    google:'google-sign-in',
    inverted:'inverted'

}


 const Button = ({children , buttontype , ...signsProps}) =>{

    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`} {...signsProps}>{children}</button>
    )


 }


 export default Button;