import "./style.css"


const AlertMessage = ({message, color , foto}) =>{


    return(

        <div className={color}>
                 
            Emeliyyatin veziyyeti : {message}

            <img src={foto}></img>
                 
        </div>    

    )
}

export default AlertMessage