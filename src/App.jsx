
import { useState } from 'react'
import './App.css'
import Actors from './Components/Actors/Actors'
import Carts from './Components/Carts/Carts'

function App() {
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(300000);
  const handleSelectButton = (actor) => {
    const isExist = selectedActors.find(item => item.id === actor.id);
    if (isExist) {
      alert("Already Booked");
    } else {
      if ((actor.salary + totalCost) > 300000) {
        return alert("taka sesh");
      }
      else {
        setTotalRemaining(totalRemaining - actor.salary);
        setTotalCost(totalCost + actor.salary);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  }

  return (
    <>
      <div className='md:flex'>
        <Actors handleSelectButton={handleSelectButton} />
        <Carts selectedActors={selectedActors} totalCost={totalCost} totalRemaining={totalRemaining} />
      </div>
    </>
  )
}

export default App
