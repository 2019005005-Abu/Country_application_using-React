import React from 'react'
import Country from './Country';
import "../Country/Countries.css"
const Countries = () => {

    const [countries,setCountries]=React.useState([]);
    React.useEffect(()=>{
        LoadingData();
    },[])

    const LoadingData=()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then((data)=>{
        console.log(data);
        setCountries(data)
      })
    }
    
  return (
    <div>
      <h1 className='country_heading'>Country-List</h1>
        <div className='country'>
        {
        countries.map(function(country){
            return(
             <Country 
             key={country.cca3}
             country={country}></Country>
            )
        })
        }
        </div>
      
    </div>
  )
}

export default Countries
