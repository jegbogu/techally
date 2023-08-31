import classes from './button.module.css'
 
function Button(props) {
    return (
        <div>
            <div className={classes.btn}>
                <button>{props.btn}</button>
            </div>
        </div>
    )
}

export default Button