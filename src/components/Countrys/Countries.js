import React, { useEffect, useState } from 'react';
import LoadCountrie from './Loadcountry/LoadCountrie';

const Countries = () => {

    const [country, setCountries] = useState ([])


    useEffect (() => {
        fetch ('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then (data => setCountries (data))



    }, [])



    



    return (
       <div>

        <h1 className='text-3xl font-bold p-10'>Total Country : <span className='text-primary'>{country.length}</span></h1>


<div className= "grid grid-cols-3 gap-5">

           


{

    country.map (country => <LoadCountrie country = {country}

        key = {country.cca3}
    
    
    ></LoadCountrie>
    
    )




}

</div>
       </div>
    ); 
};

export default Countries;