import Cart from '../Cart/Cart'
import PropTypes from 'prop-types'; 


export default function Carts({selectedActors , totalCost , totalRemaining}) {
  return (
    <div className='md:w-2/5 bg-gray-400 p-6'>
        <h2 className='text-2xl font-bold text-center text-white'>Cart : {selectedActors.length}</h2>
        <h2 className='font-bold text-2xl'>Total Cost : {totalCost}</h2>
        <h2 className='font-bold text-2xl'>Total Remaining : {totalRemaining}</h2>
        <div>
          {
            selectedActors.map(actor => <Cart key={actor.id} actor={actor} totalCost={totalCost}/>)
          }
        </div>
    </div>
  )
}

Carts.propTypes = {
  selectedActors: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  totalRemaining: PropTypes.number.isRequired
}