import React from 'react';
import {BsGithub, BsLinkedin, BsInstagram} from "react-icons/Bs"

const AboutUs = () => {
  const users = [
    { id: 1, name: 'Diego de la Cruz', role: 'Backend Developer', avatar: 'assets/team/diego.jpg' },
    { id: 2, name: 'Maicol Salinas', role: 'Backend Developer', avatar: 'assets/team/jainor.jpg' },
    { id: 3, name: 'Alex Lizana', role: 'UI Designer', avatar: 'assets/team/alex.jpg' },
    { id: 4, name: 'Gino Ginocchio', role: 'Frontend Developer', avatar: 'assets/team/gino.jpg' },
  ];
  return (
    <div className="p-4/5 m-auto flex flex-col items-center bg-p2 py-12">
      <h2 className="text-white w-full  text-3xl text-center uppercase font-bold ">Our Team</h2>
      <div className='flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 py-12'>
      {users.map(({ id, name, role, avatar }) => {
        return (
          <div key={id} className="flex flex-col gap-4 text-center">
            <div>
              <img src={avatar} alt={name} className="overflow-hidden rounded-full w-40 sm:w-52"></img>
            </div>
            <p className=' font-bold text-base text-white sm:text-lg'>{name}</p>
            <p className='text-white font-medium text-sm sm:text-base'>{role}</p>
            <div>
              <ul className='flex justify-center gap-4 py-2'>
                <li>
                  <a href="" className='text-white hover:text-cyan-900'><BsGithub></BsGithub></a>
                </li>
                <li>
                  <a href="" className='text-white hover:text-cyan-900'><BsInstagram></BsInstagram></a>
                </li>
                <li>
                  <a href="" className='text-white hover:text-cyan-900'><BsLinkedin></BsLinkedin></a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AboutUs;