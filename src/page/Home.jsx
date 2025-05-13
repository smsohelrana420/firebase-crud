import React, { useState } from 'react'
import { getDatabase, push, ref, set } from "firebase/database";
const Home = () => {
 const [task,setTask]=useState('')
 const [taskerror,setTaskerror]=useState('')
  const handleTask=(e)=>{
    setTask(e.target.value)
  }
  const handleSubmit=()=>{
    if(!task){
      setTaskerror("Task Is Required")
    }else{
      
      setTaskerror('')
    const db = getDatabase();
    set(push(ref(db, 'todolist/')), {
    name:task
  }).then(()=>{
    console.log("Data Send Successfull")
  }).catch((err)=>{
    console.log(err)
  })
    }
  }
  return (
    <div >
     <div className='ml-[500px]'>
       <h1 className='text-2xl font-bold mt-2'>Enter Your Task</h1>
      <input onChange={handleTask}  type="text" placeholder='Type Your Task' className={`p-2 mt-2 border-2 rounded-[6px] ${taskerror ?"border-red-500":"border-black"} w-[500px]`} />
      {taskerror && <p>{taskerror}</p>}

      <div>
         <button onClick={handleSubmit} className='w-[200px] text-left font-bold text-2xl mt-2 rounded-[6px] bg-green-700 p-2'>Add Task</button>
      </div>
     <ul className='border border-gray-500 p-2 rounded-2xl shadow-md mt-4'>
      <li className='mt-2 text-xl'>1.Home</li>
      <li className='mt-2 text-xl'>1.Home</li>
      <li className='mt-2 text-xl'>1.Home</li>
      <li className='mt-2 text-xl'>1.Home</li>
      <li className='mt-2 text-xl'>1.Home</li>
     </ul>
     </div>
    </div>
  )
}

export default Home