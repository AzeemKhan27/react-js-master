import { useEffect, useState } from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
          fetch(`https://cdn.jsdelivr.net/npm/realtime-usd-to-inr@0.0.3/lib/main.min.js`)
         .then((res) => res.json())
         .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;