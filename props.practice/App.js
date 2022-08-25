import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"
export default function App(){
    const jokesElement = jokesData.map(joke => {return <Joke
        punchline={joke.puchline} setup={joke.setup} />})
    return(
    
        <div>
            {jokes}
            <Joke
                setup= "i love God to shine way"
                punchline=" please God"
            />
            <Joke
                setup= " I got my daughter a fridge for her birthday"
                punchline=" I can't wait to see her face light up when she opens it."
            />
            <Joke
                setup= "i love it to the best"
                punchline="hot pizza with cold drink"
            />
            <Joke
                setup= "sweet hennesy"
                punchline="fine wine"
            />
            <Joke
                setup= "i love with premio car"
                punchline="i should get"
            />

        </div>
    )
}
