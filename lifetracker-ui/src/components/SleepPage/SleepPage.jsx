import "./SleepPage.css"

export default function SleepPage(){
    if (!loggedIn){
        return(
            <div className="SleepPage">
                <h2>Login to see your data.</h2>
            </div>
        )
    } else{
        return(
            //listof activities or new component
        )
    }
}