import {useState} from 'react'

export const Ad = () => {
     const [advice,setAdvice]=useState("click the button to get advice")
     const [count,setCount]=useState(0)
    async function click(){
      const res= await fetch("https://api.adviceslip.com/advice")
      const data= await res.json()
      setAdvice(data.slip.advice)
      setCount((c)=> c+1)


     }
     return (
   <>
   <h3>{advice}</h3>
   <button onClick={click}>Get advice</button>
   <p>Today you have readed an <b className='count'>{count}</b> advice</p>
   <b>have an nice day</b>
   </>
  )
}

