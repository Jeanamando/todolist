

import Image from 'next/image'

export default function Home() {
  return (
    
  <section className='flex justify-center items-center bg-black min-h-screen'>
      <div className= "bg-zinc-500 rounded-[12px] p-6" >
    <input className='rounded-[5px]'/>
    <h1 className='p-4 -ml-6 '>Tasks:</h1>
      <div>
        <ul>
      
          <li> <input type="checkbox" className='rounded-[20px]'/>task 1</li> 
          <li><input type="checkbox" />task 2</li>
          <li><input type="checkbox" />task 3</li>

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
