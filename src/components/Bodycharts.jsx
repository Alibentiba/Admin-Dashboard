import React from 'react'
import { BsBuilding } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';



const Bodycharts = () => {
  return (
    <div className='flex flex-col items-center justify-start'>

    <div className=' w-full grid grid-cols-5 grid-rows-2 gap-6 px-4'>
      <div className='col-start-0 col-span-3 flex gap-4  items-start justify-start'>
                   <div className='w-1/2'>
                   <img src="https://freesvg.org/img/1325432106.png" alt="Cartvisa" 
                        className='w-full h-[15rem] rounded-lg  object-cover' />
                  </div>
                  <div style={{background: "rgb(4,28,61)",
                              background:"linear-gradient(158deg, rgba(4,28,61,1) 0%, rgba(84,140,215,1) 17%, rgba(4,36,80,1) 73%, rgba(11,81,179,1) 92%)"}}
                  className='w-1/2 h-[15rem] rounded-lg bg-cardOverlay flex flex-col items-start justify-start  p-3'>
                  <span className='w-full text-white h-24 p-1 rounded-xl bg-slate-500 '>
                          <p className=' w-full text-sm flex items-center justify-between font-semibold'>
                                Credit Balance 
                            <span className='text-3xl font-bold'>...</span>
                          </p>

                           <p className=' w-full text-5xl font-bold'>$25,215</p>

                   </span>
                   <div className='flex items-center justify-between py-6  w-full'>

                              <div className='text-xs font-bold text-gray-800'>
                                NEWEST
                                <span className='text-2xl w-10 h-10 rounded-full text-green-500 bg-gray-700 flex items-center justify-center'><BsBuilding/>
                                </span> 
                              </div>

                              <p className='flex flex-col justify-between'>
                              <span className='text-sm font-semibold'>Bill & Taxes</span>
                              <span className='text-sm font-semibold text-gray-800'>Today, 16:36</span>

                              </p>
                              <p className='text-lg font-semibold'>-$154.50</p>

                              </div>

                     

                  </div>
             </div>



{/* Dive 2 */}






<div style={{background: "rgb(4,28,61)",
background: "linear-gradient(158deg, rgba(4,28,61,1) 0%, rgba(84,140,215,1) 17%, rgba(4,36,80,1) 73%, rgba(11,81,179,1) 92%)"}}
className='col-start-0 col-span-2 row-start-0 row-span-2 opacity-95 rounded-lg flex flex-col gap-5'>
  <span className='flex items-center justify-between p-4'>
    <p className='text-xl font-semibold'>Invoices</p>  
    <button className='text-sm bg-blue-700 p-2 rounded-lg font-semibold opacity-100'>VIEW ALL</button>
</span>

  <div className='flex items-center justify-between px-5'>
    <div className='flex flex-col font-semibold'>March, 01, 2020 
      <span className='text-xs text-gray-700'>#MS-415646</span>
    </div>
    <div className='flex text-lg font-semibold gap-4 text-black'>
      <p >$178</p>
      <p className='flex items-center justify-center'>
        <HiDocumentText className='text-white'/>PDF</p>

    </div>

</div>
<div className='flex items-center justify-between px-5'>
    <div className='flex flex-col font-semibold'>March, 01, 2020 
      <span className='text-xs text-gray-700'>#MS-415646</span>
    </div>
    <div className='flex text-lg font-semibold gap-4 text-black'>
      <p >$178</p>
      <p className='flex items-center justify-center'>
        <HiDocumentText className='text-white'/>PDF</p>

    </div>

</div>
<div className='flex items-center justify-between px-5'>
    <div className='flex flex-col font-semibold'>March, 01, 2020 
      <span className='text-xs text-gray-700'>#MS-415646</span>
    </div>
    <div className='flex text-lg font-semibold gap-4 text-black'>
      <p >$178</p>
      <p className='flex items-center justify-center'>
        <HiDocumentText className='text-white'/>PDF</p>

    </div>

</div>
<div className='flex items-center justify-between px-5'>
    <div className='flex flex-col font-semibold'>March, 01, 2020 
      <span className='text-xs text-gray-700'>#MS-415646</span>
    </div>
    <div className='flex text-lg font-semibold gap-4 text-black'>
      <p >$178</p>
      <p className='flex items-center justify-center'>
        <HiDocumentText className='text-white'/>PDF</p>

    </div>
    

</div>
<div className='flex items-center justify-between px-5'>
    <div className='flex flex-col font-semibold'>March, 01, 2020 
      <span className='text-xs text-gray-700'>#MS-415646</span>
    </div>
    <div className='flex text-lg font-semibold gap-4 text-black'>
      <p >$178</p>
      <p className='flex items-center justify-center'>
        <HiDocumentText className='text-white'/>PDF</p>

    </div>
    

</div>
</div>












<div style={{background: "rgb(4,28,61)",
                      background: "linear-gradient(158deg, rgba(4,28,61,1) 0%, rgba(84,140,215,1) 17%, rgba(4,36,80,1) 73%, rgba(11,81,179,1) 92%)"}}
                            className='col-start-0 col-span-3 flex flex-col justify-center gap-10 rounded-lg'>
                              <p className='flex items-center justify-between px-10'>
                                <span className='text-xl font-semibold'>Payment Method</span>
                                <button className='text-md bg-blue-700 p-2 rounded-lg font-semibold opacity-100'>ADD NEW CARD</button>
                                </p>

                                <div action="" className='flex  w-full items-center justify-between px-10 gap-6 text-xl font-semibold'>
                                    <input type="text" name="" id="1" placeholder='7812 2139 0823 XXXX'
                                    className=' text-white bg-transparent outline px-4 border-solid border-1 h-16 w-1/2 rounded-2xl'/>
                                    <input type="text" name="" id="1" placeholder='7812 2139 0823 XXXX'
                                    className=' bg-transparent outline px-4 border-solid border-1 h-16 w-1/2 rounded-2xl'/>
                                </div>



</div>
</div>
</div>

  )
}

export default Bodycharts
