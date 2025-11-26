export default function NavBar() {
  return (
    <nav
      className="w-fit bg-gray rounded-md shadow-md flex flex-row gap-4 p-4 outline-transparent cursor-pointer hover:outline-2 
                  hover:outline-blue-300 transition-colors"
    >
      <a className="cursor-pointer hover:text-white hover:">Home</a>
      <a className="cursor-pointer">About me</a>
      <a className="cursor-pointer">Experience</a>
    </nav>
  );
}
