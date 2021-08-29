import { useState } from 'react'
import { BrowserRouter as Router, useHistory} from 'react-router-dom'

const Historys = () => {
    const [date, setDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    let history = useHistory()

    const getData = () => {
        if(date && endDate && Date.parse(date) <= Date.parse(endDate)){
            history.push(`/history/result?start=${date}&end=${endDate}`)
        }else {
            alert("Please select start date and end date correctly")
        }
    }
    return (
            <div className='my-5'>
                <div className='text-center space-y-3 space-x-3'>
                    <p className='text-2xl font-semibold'>Select historical range</p>
                    <span>From date</span>
                    <input type='date' onChange={e => {setDate(e.target.value)}}></input>
                    <span>To date</span>
                    <input type='date' onChange={e => {setEndDate(e.target.value)}}></input>
                    <br />
                    <button onClick={getData}>Get data</button>

                </div>
            </div>

    )
}

export default Historys