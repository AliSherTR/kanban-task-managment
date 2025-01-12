import { LayoutDashboard, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";


const boards = [
  { id: 1, name: "Platform Launch", isActive: true },
  { id: 2, name: "Marketing Plan" },
  { id: 3, name: "Roadmap" },
]

export default function DasboardSidebar() {
  return (
    <aside>
      <div className="px-4">
        <h1 className=" text-lg font-semibold dark:text-white mb-4">All boards (3)</h1>

      </div>
      <ul className=" pe-8">
        {
          boards.map((item) => {
            return (
              <li className="mb-4" key={item.id}>
                <NavLink to={`/${item.name}`} className={({ isActive }) =>
                  `w-full block py-4 rounded-e-[100px] duration-300 ease-in-out ${isActive
                    ? "bg-[#635fc7] text-white"
                    : "bg-transparent hover:bg-[rgba(99,95,199,.1)] hover:text-[#635fc7] text-grey"
                  }`
                }  >
                  <span className=" px-4 flex gap-3 items-center text-grey hover:text-[#635fc7] dark:text-white font-semibold text-lg">
                    <LayoutDashboard width={20} height={20} />
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })
        }
        <li className=" cursor-pointer hover:bg-[rgba(99,95,199,.1)] duration-300 ease-in-out py-4 rounded-e-[100px] mb-4 hover:bg">
          <span className=" text-[#635fc7] px-4 flex gap-3 items-center font-semibold ">
            <Plus width={20} height={20} />
            Create New Board
          </span>
        </li>
      </ul>
    </aside>
  )
}
