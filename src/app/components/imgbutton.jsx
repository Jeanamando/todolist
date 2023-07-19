'use client'
import Image from "next/image"
import Check from './check.png'
import { useState } from "react";

 export default function Adicionar () {
    //onChange={Handletxt}
    //const [valor, Setvalor] = useState ("")
    //const Handletxt = (event) => {
      //console.log(event.target.value);};
    const result = 

    function Adicionar (){
        console.log(3);
    }
    return (
    
        <div className=' bg-white rounded-[10px] flex '>
          <input className='select-none outline-none rounded-[10px] z-0'/>
            <button onClick={Adicionar}>
                  <Image className="mt-1" src={Check}width={25}height={25}alt="check"/>
            </button>
        </div>
            
        
    )
 }
