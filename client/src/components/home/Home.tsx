import React from 'react'
import Header from '../headers/Header'
import { getDatabase,ref,set } from "firebase/database";
import { app } from '../../data/firebase';

const database = getDatabase(app);

const Home:React.FC = () => {
  const Put =()=>{
    set(ref(database,"users/rupam"),{
      id:1,
      name:"Rupam",
      age:22
    })
  }
  return (
    <div>
        <Header/>
        Home
        <button className='btn btn-primary' onClick={Put}>Put Data</button>
        </div>
  )
}

export default Home