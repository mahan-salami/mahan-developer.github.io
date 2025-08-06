import React from 'react';
import Mahan from '../assets/ten 18.jpg';
import Amin from '../assets/amin.jpg';
import Peyman from '../assets/k.jpg';
import CompanyLogo from '../assets/mh web.png'; // فرض می‌کنیم لوگوی شرکت را داریم

export const OurTeam = () => {
  // داده‌های تیم را به صورت آرایه تعریف می‌کنیم برای مدیریت بهتر
  const teamMembers = [
    {
      id: 1,
      name: 'Mahan Salami',
      role: 'Front-End Developer',
      bio: 'Vincent Van Gogh\'s most popular painting, The Starry Night.',
      image: Mahan
    },
    {
      id: 2,
      name: 'Amin Azarpey',
      role: 'Front-End Team Lead',
      bio: 'Amet I love liquorice jujubes pudding croissant I love pudding.',
      image: Amin
    },
    {
      id: 3,
      name: 'Peyman Kalani',
      role: 'Ui/UX Designer',
      bio: 'Apple pie macaroon toffee jujubes pie tart cookie caramels.',
      image: Peyman
    },
    {
      id: 4,
      name: 'Sara Yazdani',
      role: 'Human Resources',
      bio: 'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 5,
      name: 'Martin Garix',
      role: 'Good guy',
      bio: 'Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
      id: 6,
      name: 'Andrew Larkin',
      role: 'Backend Developer',
      bio: 'Moonfish, steelhead, lamprey southern flounder tadpole fish bigeye.',
      image: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 7,
      name: 'Sophie Denmo',
      role: 'Designer',
      bio: 'Veggies sunt bona vobis, proinde vos postulo esse magis grape pea.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
      id: 8,
      name: 'Benedict Caro',
      role: 'Frontend Developer',
      bio: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi.',
      image: 'https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{' '}
          our talented team of professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative group">
            {/* لوگوی شرکت با انیمیشن */}
              {/* لوگوی شرکت با انیمیشن */}
              <div className="absolute top-4 left-4 z-20 w-12 h-12 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                <img 
                  src={CompanyLogo} 
                  alt="Company Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
            
            {/* کارت عضو تیم */}
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={member.image}
                alt={member.name}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  {member.name}
                </p>
                <p className="mb-4 text-xs text-gray-100">{member.role}</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  {member.bio}
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};