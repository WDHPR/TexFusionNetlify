import React, {useEffect, useState } from "react";

export function ConfirmationPage(){
    const [value, setDisplayedValue] = useState('');

    useEffect(() => {
        const storedValue = sessionStorage.getItem('formdata')
        if (storedValue)
    {
        const value = JSON.parse(storedValue)
        setDisplayedValue(value);
      console.log(value);
    };

    }, []);
        
    

    return(
        
        <h2>Finns jag: {value}</h2>
    );
}