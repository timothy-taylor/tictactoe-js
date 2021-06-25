import React from "react";

export function Square(props){
    return (
        <button id="box" onClick={ props.onClick }>
            { props.value }
        </button>
    )
}
