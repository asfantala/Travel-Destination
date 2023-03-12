// import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import React from 'react'
import Tour from './tour/Tour1';

const data = require("../../data/db.json");

export default function Tours() {
    //useEffect(()=>{
    //     console.log(data);
    // },[])

    return (
        <div className="tours">
      {data.map(item => (
        <Link to={`/city/${item.id}`} key={item.id}>
          <Tour tour={item} />
        </Link>
      ))}
    </div>
    )
}
