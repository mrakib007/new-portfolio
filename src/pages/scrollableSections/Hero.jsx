import React from 'react';

const Hero = () => {
    return (
        <div className='mt-10'>
             <h1 className="text-4xl font-bold">My Work Experience</h1>
          {Array.from({ length: 30 }).map((_, i) => (
            <p className="mt-4" key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
            </p>
          ))}
        </div>
    );
};

export default Hero;