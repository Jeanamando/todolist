'use client'
import Image from "next/image"
import Check from './check.png'
import { useState } from "react";

 export default function Adicionar() {
    
    const [tasks, setTask] = useState(
      [ 
        { titulo: "task 1", esta_feito: false }, 
        { titulo: "task 2", esta_feito: true }, 
        { titulo: "task 3", esta_feito: false }, 
      ]
    )
    
    
    function adicionar() {
      tasks.push(
        { titulo:"task4", esta_feito: false }
      )

      setTask(
       tasks.map(m => m) 
      )
    }

  
    return (
        <div>
          <div className=' bg-white rounded-[10px] flex '>
            <input type="text" className='select-none outline-none rounded-[10px] z-0'/>
              <button onClick={adicionar}>
                <Image className="mt-1" src={Check}width={25}height={25}alt="check"/>
              </button>
          </div>

          <p>
            { 
              tasks.map(
                t => {
                  return(
                    <div 
                      style={{ 
                        width: '100%', 
                        background: 'black', 
                        color: 'pink', 
                        marginBottom: 5, 
                        marginTop: 5, 
                        borderRadius: 10, 
                        paddingLeft: 10   
                      }}
                    >
                      { t.titulo } - { t.esta_feito ? "Feito" : "Não feito" }
                    </div>
                  ) 
                }
              ) 
            }
          </p>
        </div>
            
        
    )
 }
onchange