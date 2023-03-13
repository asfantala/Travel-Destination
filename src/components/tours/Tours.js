import Tour from './tour/Tour';

const data = require("../../data/db.json");

export default function Tours() {
    

    return (

        <div >
            {data.map(item => {
            return (
                // <div key={item.id}>
                //     <p >{item.name}</p>
                //     <img src={item.image} alt={item.name} />
                //     <hr />

                // </div>
                
                <Tour tour={item}/>
            )
        })


        }

        </div>
    )
}