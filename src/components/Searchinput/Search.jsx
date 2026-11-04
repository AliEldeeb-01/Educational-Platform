import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayContext } from "../../context/DisplayContext";
import { IoMdClose } from "react-icons/io";

export default function InputDemo({ onClose }) {
    const { courseSearch, setCourseSearch, dark } = useContext(DisplayContext)
    const navigate = useNavigate()

    const handleSearch = (event) => {
        event.preventDefault()
        navigate('/ShopCourses')
        onClose()
    }

    return (
        <form
            onSubmit={handleSearch}
            className={`flex w-full items-center gap-2 rounded-xl p-2 shadow-lg ${dark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
            <Input
                value={courseSearch}
                onChange={(event) => setCourseSearch(event.target.value)}
                aria-label="Search courses"
                placeholder="Find the course..."
                className={`min-w-0 flex-1 ${dark ? 'text-white' : 'text-gray-900'}`}
            />
            <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm shadow-amber-400 transition-all duration-300 hover:bg-white hover:text-black  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
                Search
            </button>
            <button
                type="button"
                onClick={onClose}
                aria-label="Close course search"
                title="Close search"
                className={`flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                    dark
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
                <IoMdClose className="size-5" />
            </button>
        </form>
    );
}
