import Image from "next/image"
import Link from "next/link"
import logo from "../../public/school-logo2.png"
import { AlignVerticalSpaceAround, User2 } from "lucide-react"
const Header = async () => {

    return (
    <div className="max-w-6xl mx-auto  h-12  mb-10 ">
        <div className="flex justify-between items-center pb-6 px-2  ">
            <Link href='/' className="font-medium">
                <Image src={logo} alt="logo" className="w-16"/>
            </Link>
            <div className="my-3 flex items-center gap-10 font-medium">

            <Link href='/' className="hover:font-medium hover:underline bg-gray-100 rounded-md p-2">Home</Link>
            <Link href='/dashboard' className="hover:font-medium hover:underline bg-gray-100 rounded-md p-2">Dashboard</Link>
             <Link href='/login' className="hover:font-medium hover:  whitespace-nowrap bg-gray-100 rounded-md p-2 hover:underline">Login/Sign Up</Link>
           <User2 className="w-8 h-8 cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default Header