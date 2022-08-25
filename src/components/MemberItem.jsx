import React from "react";
import {BsGithub, BsLinkedin, BsInstagram} from "react-icons/Bs"
const MemberTeam = ({avatar, role, name}) => {
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <div >
        <img
          src={avatar}
          alt={name}
          className="overflow-hidden rounded-full w-40 sm:w-52"
        ></img>
      </div>
      <p className=" font-bold text-base text-white sm:text-lg">{name}</p>
      <p className="text-white font-medium text-sm sm:text-base">{role}</p>
      <div>
        <ul className="flex justify-center gap-4 py-2">
          <li>
            <a href="" className="text-white hover:text-cyan-900">
              <BsGithub></BsGithub>
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:text-cyan-900">
              <BsInstagram></BsInstagram>
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:text-cyan-900">
              <BsLinkedin></BsLinkedin>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MemberTeam;