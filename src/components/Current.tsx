import axios from 'axios'
import { useEffect, useState } from 'react'

type cuurentBit = {
    time: {
        updated: string,
        updatedISO: string,
        updateduk: string
    },
    disclaimer: string,
    bpi: {
        USD: {
            code: string,
            rate: string,
            description: string,
            rate_float: number
        },
        THB: {
            code: string,
            rate: string,
            description: string,
            rate_float: number
        }
    }
}
const Curent = () => {

    const [curprize, setCurprize] = useState<cuurentBit| null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    //fetch with async await
    const fetchApi = async () => {
        try {
            const resp = await axios.get<cuurentBit>(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
            setCurprize(resp.data)
            setLoading(false)
            setError(false)
        }
        catch (err) {
            setLoading(false)
            setError(true)
        }
    }
    useEffect(() => {
		 fetchApi()
	}, [])

    const render = () => {
        if (loading)
            return <p className='text-2xl text-center space-y-3'>Loading ...</p>

        else if (error){
            return <p>There was some error !!!</p>
        }
        else{
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{curprize?.bpi.THB.rate_float.toLocaleString()} THB</p>
                    <p> (Last updated {curprize?.time.updated}) </p>
                </div>
            )
        }    
    }
    return (
        render()
    )
}


export default Curent