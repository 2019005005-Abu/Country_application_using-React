import React from 'react'
import "../Country/Country.css"
const Country = (props) => {
   const {name,population,area,region,flags}=props.country
  return (
    <div className='countryy'>
      <h1>Country:{name.common}</h1>
      <img src={flags.png} className='flagstyle'/>
      <p>Population:{population}</p>
      <p><small>Area:{area}</small></p>
      <p><small>Region:{region}</small></p>
    </div>
  )
}

export default Country
