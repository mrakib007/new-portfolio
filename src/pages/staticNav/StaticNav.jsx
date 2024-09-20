import React from 'react';

const StaticNav = () => {
    return (
        <div  className='mt-10'>
            <h1 className="text-4xl font-bold">Brittany Chiang</h1>
          <h2 className="mt-2 text-xl">Senior Frontend Engineer</h2>
          <p className="mt-4">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <div className="mt-8">
            <ul className="space-y-2">
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
    );
};

export default StaticNav;