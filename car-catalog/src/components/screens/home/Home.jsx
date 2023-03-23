import CarItem from './car-item/CarItem.jsx'
import {cars} from './cars.data.js'
import CreateForm from './create-car-form/CreateForm.jsx'
function Home() {

  return (
    <div>
      <h1>
        Cars 
      </h1>
      
      <CreateForm />
      
      <div>
        {cars.length ? cars.map(car=>
          <CarItem key={car.id} car={car} />) 
          : <p>Loading...</p>}
      </div>
    </div>
  )
  
}

export default Home