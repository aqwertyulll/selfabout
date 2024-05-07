


import { Button } from '@/components/ui/button'
import React from 'react'

const self = () => {
  return (
    <div className=' border-solid border-2 border-cyan-200 shadow-xl items-center m-2 '>
        <div  className=' bg-cyan-500 '>
         <h1 className=' text-white text-4xl text-center pt-12 place-items-center '>
            Self Dev<span className='text-orange-100'>LOVE</span>per
         </h1> 
         <p className='items-center text-center pt-2 pb-7 text-white  place-items-center'>Hey! This is <span className='font-bold text-orange-100  text-2xl'>Akash</span>.i'm computer science Graduate having good knowledge in web , <br />Java application development and database management </p>
        </div>
        <div className=' pt-7 pb-7 pl-9 pr-9 gap-8 flex spa '>
            <div className=' border-solid border-2 border-cyan-200 rounded-xl '>
            <img  src="DP image.jpeg" alt="Dp Image" className=' w-60 h-60  p-5   bg-slate-200 rounded-lg' />
            </div>
            <div className=' border-solid border-2 border-cyan-200 rounded-xl items-center bg-slate-200'>
                
                    <Button className=' bg-cyan-500 m-4 flex  items-center place-items-center text-center'>Education History</Button>
                    <div className=' px-4  '>
                    <p className=' font-bold'>2019 - 2023  |  <span className='font-medium'> Sir cr reddy college of Engineering  </span> 7.09 CGPA </p>
                    <p className=' font-bold'>2017 - 2019  |  <span className='font-medium'> A.P.S.W.R.JR College Arugolanu </span> 8.34 CGPA</p>
                    <p className=' font-bold'>2016 - 2017  |  <span className='font-medium'> Z.P.P. High  School  Kannapuram </span>8.2 CGPA</p>


                    </div> 
                    
                    
            </div>
                <div className=' border-2  border-cyan-200 bg-slate-200 rounded-lg'>
                    <Button className='bg-cyan-500 m-4 items-center  place-items-center text-center'>Skills</Button>
                    <ul className=' font-bold py-2 px-4  '>
                        <li>JAVA - Basic java concepts ,OOPs concepts Array , ARRAyList ,Strings ,Threding ,Error handling</li>
                        <li>Web application -HTML,CSS-Bootstrap</li>
                        <li>Spring boot ,API handling , JSON ,XML</li>
                        <li> Database -RDMS,DBMS,JDBC,Oracle ,MySQL,SQL-DDL,DML,DCL,TCL,DQL</li>
                        <li>Testing - postman ,Debugging -Developer Tools </li>
                    </ul>
                  
                </div>
        </div>

               
        <div className=' border-2 m-2  flex border-cyan-200 bg-slate-200 space-y-3 rounded-lg  font-semibold py-6  pt-7 pb-7 pl-9 pr-9 gap-8'>
            <div >
            <Button className='bg-cyan-500 m-4 items-center  place-items-center text-center'>CERTIFICATIONS </Button>

            <ul  className='space-y-3'>
                <li>BICT for the Course DIPLOMA in office of managenment <br /> (DOM) Grade awarded A+ ISO 9001:2015</li>
                <li>Super growth summit 2023 success gyan inspiring india</li>
                <li>Tech vantage Web 3.0 summit DSAOT&M + Sumero Digital Sol.</li>
            </ul>
           

            </div>
            <div>
            <Button className='bg-cyan-500 m-4 items-center mt-2  place-items-center text-center'>AWARDS </Button>
            <ul className='space-y-4'>
                <li>A.P.S.W.R Junior college kabbaddi  state level Runner up. </li>
                <li> Sir C.R Reddy college of engineering Kabbadi state level Winners </li>
                <li> Vignans university of gunter Alantis 100m sprint Runner up</li>
            </ul>
            </div>
            <div className='m-10 '>
            <p className='text-gray-400 px-6 hover:text-bold'>Share in Social Platforms</p>
            
          <div className='flex w-20  py-4 px-3  '>
          
           <img className='hover:p-1' src="whatsapp.svg" alt="" />
            <img className='hover:p-1 ml-3 mouse cursor-pointer' src="insta.svg" alt="" />
         
            <img className='hover:p-1 ml-3' src="Linkdin .svg" alt="" />
            <img className="hover:p-1  ml-4" src="Twitter.svg" alt="" />
        </div>
            </div>
        </div>
    </div>
  )
}

export default self