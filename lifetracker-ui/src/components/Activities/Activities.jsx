import "./Activities.css"

export default function Activities(){
    return(
        <div className="activities">
            <div className="activities-bar">
                <h2>Activity Feed</h2>
                <button>Add Exercise</button>
                <button>Log Sleep</button>
                <button>Record Nutrition</button>
            </div>

            <div className="minutes">
                <p>Total Exercise Minutes</p>
                <h4>90.0</h4>
            </div>

            <div className="sleep-hours">
                <p>Average Hours of Sleep</p>
                <h4>10.0</h4>
            </div>

            <div className="calories">
                <p>Average Daily Calories</p>
                <h4>950.0</h4>
            </div>

            {/* <div className="more-stats">
                <p>More Stats</p>
                <h4>Max Calories in One Meal</h4>
                <h3>950.0</h3>
            </div> */}
        </div>
    )
}