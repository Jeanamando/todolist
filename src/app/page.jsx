//'use client'
import sql from "@/app/db"
import Image from "next/image";
import Adicionar from './components/imgbutton'

export default async function Home() {
  
  const tasks = await sql`SELECT id,to_do FROM tasks`;

  return (
    <section className='flex justify-center items-center bg-black min-h-screen'>
      <div className= "bg-zinc-500 rounded-[20px] p-6" >
        <Adicionar/>

    <h1 className='p-4 -ml-6 '>Tasks:</h1>
      <div>
        <ul>
          {tasks.map((t)=> (
          <li key={t.id}> 
            <input type="checkbox" className='rounded-[20px]'/>
            <span>{t.to_do}</span>
          </li>  )
        )}

          </ul>
      </div>
      <div>
        <h1 className='p-4 -ml-6'>Done:</h1>
          <ul>
            <li><input type="checkbox" />task 4</li>

          </ul>
      </div>
      
        </div>
</section>

  )  }
 