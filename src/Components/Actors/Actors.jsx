import { useState } from "react"
import { useEffect } from "react"
import Actor from "../Actor/Actor";
import PropTypes from 'prop-types'; 



export default function Actors({handleSelectButton}) {
    const [actors , setActors ] = useState([]);

    useEffect(()=>{
        fetch("./actors.json")
        .then(res => res.json())
        .then(data => setActors(data));
    },[])

  return (
    <div className="md:w-3/5">
      <h1 className="text-3xl font-bold text-center">Actors : {actors.length} </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {
            actors.map(actor => <Actor handleSelectButton={handleSelectButton} key={actor.id} actor={actor}/>)
        }
      </div>
    </div>
  )
}

Actors.propTypes = {
  handleSelectButton: PropTypes.func.isRequired
}