import PropTypes from 'prop-types'; 

export default function Actor({ actor , handleSelectButton}) {
  // console.log(actor)
  const {name , image , salary , role} = actor;
  return (
    <div className='border bg-green-400 m-4 space-y-3 p-4'>
      <div className='flex justify-center items-center'>
      <img src={image} alt="" className='w-20 h-20 rounded-full'/>
      </div>
      <h2 className='text-2xl text-center'>{name}</h2>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, maxime?</p>
      <div className='flex justify-around'>
      <h3>Salary : {salary}</h3>
      <h3>{role}</h3>
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={() => handleSelectButton(actor)} className='btn bg-orange-800 px-8 py-2 rounded-lg text-white'>Select</button>
      </div>
    </div>
  )
}

Actor.propTypes = {
    actor:PropTypes.object.isRequired,
    handleSelectButton:PropTypes.func.isRequired
}