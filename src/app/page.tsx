import sql from "@/app/db"
import Check from './image/check.png'
import Image from 'next/image'

export default async function Home() {
  const tasks = await sql`SELECT id,to_do FROM tasks`;
  return (
    
  <section className='flex justify-center items-center bg-black min-h-screen'>
      <div className= "bg-zinc-500 rounded-[12px] p-6" >
    <div className='  bg-white p-0.8 rounded-[20px] flex '>
      <input className='select-none outline-none rounded-l-[5px] z-0'/>
          <Image className=' bg-red p-5  flex -m-2'/>
    </div>
    <h1 className='p-4 -ml-6 '>Tasks:</h1>
      <div>
        <ul>
        {tasks.map((t)=> (
        <li key={t.id}> 
        <input type="checkbox" className='rounded-[20px]'/>
        <span>{t.to_do}</span></li>  )
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
 