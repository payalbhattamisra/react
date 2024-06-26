 //you can use build in hooks also
//custom hook

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
      //useEffect use lifecycle trigger and autometicaly fetch call.function call karne ke bad api call karna nahin padega.syntax function call then dependecies

    useEffect(() => {
        fetch( `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
         //api present in string format so you have to convert in json

        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
