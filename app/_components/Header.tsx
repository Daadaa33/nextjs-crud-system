import Image from "next/image";
import Link from "next/link";
import logo from "../../public/school-logo2.png";
import { Moon, MoonIcon, User2, icons } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
const Header = async () => {
  const user = await currentUser();
  return (
    <div className="max-w-6xl mx-auto  h-12  mb-10 ">
      <div className="flex justify-between items-center pb-6 px-2  ">
        <Link href="/" className="font-medium">
          <Image src={logo} alt="logo" className="w-16" />
        </Link>
        <div className="my-3 flex items-center gap-10 font-medium">
          <Button size="icon" variant="secondary">
            <MoonIcon className="h-6 w-6" />
          </Button>
          <Link
            href="/"
            // className="hover:font-medium hover:underline bg-gray-100 rounded-md p-2"
          >
            <Button size="lg" variant="secondary">
              Home
            </Button>
          </Link>
          <Link
            href="/dashboard"
            // className="hover:font-medium hover:underline bg-gray-100 rounded-md p-2"
          >
             <Button size="lg" variant="secondary">
            Dashboard
             </Button>
          </Link>
          {!user && (
            <Link href="/sign-in">
              <Button variant="default" size="lg">
                Sign In
              </Button>
            </Link>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Header;
