import s from "./NotFound.module.css"

const NotFound = () => {
    return(
        <div className={s.notFound}>
        <h1> 404 </h1>
        <h3> Sorry, not found! </h3>
        <p>Come back, please</p>
        </div>
    )
}

export default NotFound