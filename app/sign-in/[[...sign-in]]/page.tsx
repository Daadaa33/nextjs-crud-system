import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="w-full my-4 flex justify-center items-center">
      <SignIn />
    </div>
  );
  
}