import "./ExercisePage.css"
import Exercise from "../Exercise/Exercise"

export default function ExercisePage({loggedIn}){
    if (!loggedIn){
        return(
            <div className="ExercisePage">
                <h2>Login to see your data.</h2>
            </div>
        )
    } else{
        return(
            <Exercise/>
        )
    }
}