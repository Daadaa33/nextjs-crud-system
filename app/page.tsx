import Students from "./_components/Students";
import Login from "./login/page";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
        {/* <Login /> */}
        <Students />
    </main>
  );
}
