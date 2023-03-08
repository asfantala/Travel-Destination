import React, { useEffect } from 'react'
const data = require("../../data/db.json");

export default function Tours() {
    //useEffect(()=>{
    //     console.log(data);
    // },[])

    return (
        <div>{data.map(item => {
            return (
                <div key={item.id}>
                    <p >{item.name}</p>
                    <img src={item.image} alt={item.name}></img>
                    <hr></hr>

                </div>
            )
        })


        }

        </div>
    )
}
