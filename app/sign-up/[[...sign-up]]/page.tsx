import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="w-full my-6 flex justify-center items-center">
      <SignUp />
    </div>
  )
}