import { islamiqueNav } from '../data/data'
import SearchBar from './SearchBar'

const InfoArab = () => {
  return (
    <section>
      <div className=" bg-my-green text-white  ">
        <ul className=" flex flex-row justify-center items-center gap-10 w-[1286px]">
          <li>
            <SearchBar />
          </li>
          {islamiqueNav.map((sience) => (
            <li>{sience.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default InfoArab
