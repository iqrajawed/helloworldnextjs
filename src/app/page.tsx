import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-yellow-300 text-3xl font-bold flex justify-center pb-40 pt-10">Next.Js milestone 01</h1>
  
      <h1 className="flex justify-center hover:uppercase text-5xl pt-5  text-purple-600 font-serif ">Hello world</h1>
      
        <p>To learn more about the folder structure click the button below</p>
        
        <button className=" py-2 px-5 mx-80 mt-4  text-yellow-300 hover:bg-purple-400 rounded-lg"> Learn more 
          </button>
        
     
    </div>
  
  )}