import React from 'react'
import { scienceNav } from '../data/data'
import SearchBar from './SearchBar'

const Info = () => {
  return (
    <section>
      <div className=" bg-my-green text-white  ">
        <ul className=" flex flex-row justify-center items-center gap-24 w-[1286px]">
          {scienceNav.map((sience) => (
            <li>{sience.title}</li>
          ))}
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Info
