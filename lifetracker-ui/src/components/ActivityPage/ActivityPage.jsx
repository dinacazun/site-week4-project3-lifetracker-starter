import "./ActivityPage.css"
import Activities from "../Activities/Activities"

export default function ActivityPage({loggedIn}){
    if (!loggedIn){
        return(
            <div className="activityPage">
                <h2>Login to see your data.</h2>
            </div>
        )
    } else{
        return(
            <Activities/>
        )
    }
}