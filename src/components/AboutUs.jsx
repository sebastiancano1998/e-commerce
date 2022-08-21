import React from 'react';
import MemberTeam from '../atoms/AboutsUs/MemberTeam';

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
      <div className='flex flex-col  w-4/5 gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 py-12 '>
      {users.map(({ id, name, role, avatar }) => {
        return (
          <MemberTeam key={id} name={name} role={role} avatar={avatar}></MemberTeam>
        );
      })}
      </div>
    </div>
  );
};

export default AboutUs;