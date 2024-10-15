import React from "react";
import { useParams } from "react-router-dom";

export default function Detail(){
    let {id} = useParams();

    return (
        <div>
            <h1>Detail {id}</h1>
            <img src={`/img/shoes${id}.jpg`}/>
        </div>
    )
}