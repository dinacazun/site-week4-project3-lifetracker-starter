import "./NutritionPage.css"

export default function NutritionPage(){
    if (!loggedIn){
        return(
            <div className="NutritionPage">
                <h2>Login to see your data.</h2>
            </div>
        )
    } else{
        return(
            //listof activities or new component
        )
    }
}