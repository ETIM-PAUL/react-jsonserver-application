// /*  */import Button from '../Button'
import {useState} from 'react'

const Numbers = () => {

    const [nums, setNums] = useState([
        {
            id: "1",
            holder: 1
        },
        {
            id: "2",
            holder: 2
        },
        {
            id: "3",
            holder: 3
        }
    ])
    
    const addNumber = () => {
        const holder = (Math.floor( Math.random() * 20))
        const id = Math.floor(Math.random() * 1000) + 1
        const newNum = ({id,holder})
        setNums([...nums, newNum])
        console.log(newNum);
    }

    const deleteNum = (id) => {
        setNums(nums.filter((num) => num.id !== id))
    }

    return (
        <>
        <div className="heading">
        <h3>Task Tracker</h3>
        <button onClick={() => addNumber()} className='btn'>Click to add a random number</button>
        </div>
        {nums.map((num) => (
            <div 
            className="num"
            key={num.id}>
                 <h4>{num.holder} <button className="remove" onClick={() => deleteNum(num.id)}>Remove</button></h4>
            </div>
           
        ))}
        
        </>
    )
}

export default Numbers;