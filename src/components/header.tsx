import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center text-[#4338CA]">
        <button>
          <Film className=" mr-2" />
        </button>
        <p className="text-2xl font-bold italic ">Movie Z</p>
      </div>
      <div className="flex space-x-4">
        <button className="border rounded-md h-[36px] w-[36px] flex justify-center items-center shadow-md hover:shadow-lg transition-shadow">
          <Search />
        </button>
        <button className="border rounded-md h-[36px] w-[36px] flex justify-center items-center shadow-md hover:shadow-lg transition-shadow">
          <Moon />
        </button>
      </div>
    </div>
  );
}
