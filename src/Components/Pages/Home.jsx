import React from 'react'
import Header from '../Header/Header'
import VehiclePreview from '../VehiclePreview/VehiclePreview';
import { vehiclesForSale } from '../Data/vechicles.js';
import Footer from '../Footer/Footer'
import VehicleSell from '../Vechicles/VechiclesSell/VehicleSell'
import VehicleRent from '../Vechicles/VechiclesRent/VehicleRent'

const Home = () => {
  return (
    <div>
<Header/>
<VehiclePreview vehicles={vehiclesForSale} />

    </div>
  )
}

export default Home
