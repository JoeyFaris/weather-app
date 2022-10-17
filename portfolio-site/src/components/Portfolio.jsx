import React from 'react'
import sudoku from '../assets/sudoku.png'
import bookReview from '../assets/bookReview.png'
import bigO from '../assets/bigO.png'
import bcrypt from '../assets/bcrypt.png'
import activeRecord from '../assets/activeRecord.png'
import suiteMng from '../assets/suiteMng.png'
import codewars from '../assets/codewars.png'

const Portfolio = () => {
        const portfolios = [
            {
                id: 1,
                src: sudoku,
                name: "Sudoku",
                href: "http://sudoku.appsoftdev.com/",
                code: "https://github.com/JoeyFaris/sudoku"
                
            },
            {
                id: 2,
                src: suiteMng,
                name: "Suite Management",
                href: "https://www.loom.com/share/06bb405f73714e30979de38c47d9ce6e",
                code: 'https://github.com/JoeyFaris/suite-management'
            },
            {
                id: 3,
                src: codewars,
                name: "Code Wars Profile",
                code: 'https://github.com/JoeyFaris/Book-Reviews-Media'
            },
            {
                id: 4,
                src: bigO,
                name: "Big O Notations",
                blog: true,
                href:"https://medium.com/@joeyfaris1/understanding-the-basics-of-big-o-complexities-18d3e249ddb1"
            },
            {
                id: 5,
                src: bcrypt,
                name: "Bcrypt gem",
                blog:true,
                href:'https://medium.com/@joeyfaris1/active-record-migrations-1ffe85f65763'
            },
            {
                id: 6,
                src: activeRecord,
                name: "ActiveRecord migrations",
                blog: true,
                href:"https://medium.com/@joeyfaris1/active-record-migrations-1ffe85f65763"
            },
           
        ]
  return (
    <div name='portfolio' 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects and Blogs</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>
            <div 
                  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id,src, href, name, blog, code}) => (
                

                  <div key={id}
                  className='shadow-md shadow-gray-600 rounded-xl'>
                    <div className='text-2xl font-italic text-center rounded-md p-4 '>{name}</div>
                      <img 
                      src={src} 
                      alt='' 
                      className='rounded-md duration-200 hover:scale-105'/>
                      <div className='flex items-center justify-center'>

                        {blog ? 
                        <a href={href} 
                        target="_blank" 
                        rel="noreferrer"
                        className='p-6 duration-200 hover:scale-105'>Medium Blog</a> 
                        :
                        href ?
                        <>
                        <a href={href} 
                        target='_blank'
                        rel="noreferrer"
                        className='w-1/2 pl-11 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                        <a 
                        href={code}
                        target="_blank" 
                        rel="noreferrer"
                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </>
                        :
                        <>
                        <a 
                        href='https://www.codewars.com/users/JoeyFaris'
                        target="_blank" 
                        rel="noreferrer"
                        className='w-1/2 px-12 py-3 m-4 duration-200 hover:scale-105'>Profile</a>
                        </>

                    }
                     
                       

                      </div>
                      
                  </div>
      
                
            ))}


         </div>
        </div>
    </div>
  )
}

export default Portfolio