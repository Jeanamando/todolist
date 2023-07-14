import sql from "@/app/db"
import {BiCheckboxChecked} from 'react-icons/bi'
import Image from 'next/image'

export default async function Home() {
  const tasks = await sql`SELECT id,ToDo FROM tasks`;
  return (
    
  <section className='flex justify-center items-center bg-black min-h-screen'>
      <div className= "bg-zinc-500 rounded-[12px] p-6" >
    <div className='  border-solid border-2  flex '>
      <input className='select-none rounded-l-[5px] z-0'/>
          <BiCheckboxChecked className=' color  flex h-10 w-10 z-1 -m-2 text-green'/>
    </div>
    <h1 className='p-4 -ml-6 '>Tasks:</h1>
      <div>
        <ul>
        {tasks.map((t)=> (
        <li key={t.id}> 
        <input type="checkbox" className='rounded-[20px]'/>
        <span>{t.ToDo}</span></li>  )
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
  )  
}
 