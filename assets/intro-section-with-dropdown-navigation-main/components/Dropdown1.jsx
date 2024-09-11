import todo from "../images/icon-todo.svg"
import cal from "../images/icon-calendar.svg"
import rem from "../images/icon-reminders.svg"
import pla from "../images/icon-planning.svg"

const Dropdown1 = () => {
  return (
    <div className='shadow-xl flex flex-col p-4 px-6 gap-4 rounded-lg'>
        <div className="flex flex-row gap-3 text-sm">
            <img src={todo} alt="" className="" />
            <h1 className="">Todo List</h1>
        </div>
        <div className="flex flex-row gap-3 text-sm">
            <img src={cal} alt="" className="" />
            <h1 className="">Calendar</h1>
        </div>
        <div className="flex flex-row gap-3 text-sm">
            <img src={rem} alt="" className="" />
            <h1 className="">Remainder</h1>
        </div>
        <div className="flex flex-row gap-3 text-sm">
            <img src={pla} alt="" className="" />
            <h1 className="">Planning</h1>
        </div>
    </div>
  )
}

export default Dropdown1