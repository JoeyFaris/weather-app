import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
                <p className='text-xl mt-20'>
                I am a passionate and highly motivated full stack developer with experience using frontend and backend technologies such as Javascript, React, Node, Bootstrap, CSS (Tailwind CSS & Bootstrap), Ruby on Rails, Sinatra, Active Record, SQL and PostgreSQL. I love to build new projects and debugging. I am also committed to writing clean, readable, and scalable code.
                </p>
                <br />

                <p className='text-xl'>
                I received my Bachelor's from Cal Poly San Luis Obispo in 2019 where I shortly after I worked in Real Estate and Sales. I wanted to change career paths into software engineering, where I recently graduated from Flatiron School's full stack software engineering boot camp. I would love to apply my problem solving and programming skills to help clients and companies develop and maintain their software and technology.</p>
        </div>
    </div>
  )
}

export default About