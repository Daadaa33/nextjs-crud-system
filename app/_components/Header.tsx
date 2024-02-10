import Image from "next/image";
import Link from "next/link";
import logo from "../../public/school-logo2.png";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = async () => {

    const user = await currentUser();

    return (
      <div className="h-12  mb-10 ">
        <div className="flex  justify-around items-center pb-6 px-2  ">
          <Link href="/" className="font-medium">
            <span className="font-semibold text-xl">Logo</span>
          </Link>
          <div className="my-2 flex items-center gap-6 font-medium">
            <ModeToggle />
            <Link href="/" className="hidden md:flex">
              <Button size="lg" variant="secondary">
                Home
              </Button>
            </Link>
            <Link href="/dashboard" className="hidden md:flex">
              <Button size="lg" variant="secondary">
                Dashboard
              </Button>
            </Link>
            {!user && (
              <Link href="/sign-in" className="hidden md:flex">
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
