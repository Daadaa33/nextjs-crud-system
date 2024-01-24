import Link from "next/link"

const Header = () => {
  return (
    <div className="max-w-[700px] mx-auto  h-12">
        <div className="flex justify-between items-center py-6 px-2  ">
            <Link href='/' className="font-medium">Logo</Link>
            <div className="flex items-center gap-10 font-medium">

            <Link href='/' className="hover:font-medium hover: bg-gray-100 rounded-md p-2">Home</Link>
            <Link href='/login' className="hover:font-medium hover: bg-gray-100 rounded-md p-2 hover:underline">Login/Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Header