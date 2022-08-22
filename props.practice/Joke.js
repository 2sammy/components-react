import React from "react"

export default function Joke(props){
    return(
            <div>
                <h>{props.setup}</h>
                <p>{props.puchline}</p>
            </div>
    )
}
