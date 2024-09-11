import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import ham from "../images/mobile/icon-hamburger.svg"

const Nav = () => {
  return (
    <>
      <div className="lg:p-10 lg:px-16 p-6 flex justify-between">
        <h1 className="font-bold text-3xl text-white">sunnyside</h1>
        <div className="flex flex-row text-white justify-between gap-10 max-lg:hidden">
          <button>About</button>
          <button>Services</button>
          <button>Projects</button>
          <button className="text-black bg-white p-3 rounded-full font-bold text-sm px-6 hover:bg-blue-400 hover:text-white">CONTACT</button>
        </div>
        <div className="p-2 lg:hidden">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <button>
                <img src={ham} alt="" />
              </button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem><div className="w-full flex justify-center items-center">About</div></DropdownItem>
              <DropdownItem><div className="w-full flex justify-center items-center">Services</div></DropdownItem>
              <DropdownItem><div className="w-full flex justify-center items-center">Projects</div></DropdownItem>
              <DropdownItem className="p-2 text-black bg-yellow-400 rounded-full">
              <div className="w-full flex justify-center items-center font-bold">Contact</div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default Nav