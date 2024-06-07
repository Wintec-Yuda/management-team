import Image from "next/image";
import hero from "../../public/images/project-management.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-300 to-purple-400">
      {/* header */}
      <div className="px-5 md:px-10 lg:px-28 py-5">
        <h2 className="text-2xl md:text-3xl font-semibold">Project Management</h2>
      </div>

      {/* hero */}
      <div className="flex md:justify-between mt-10 md:mt-0">
        <div className="md:w-3/5 lg:w-2/5 flex flex-col justify-center px-5 md:px-10 lg:px-28 gap-8">
          <h1 className="text-5xl">A goal without a plan is just a wish</h1>
          <p className="text-justify">
            A goal without a plan is just a wish because it lacks the actionable steps needed to achieve it. Planning provides direction and structure, turning aspirations into attainable objectives. Without a plan, goals remain mere dreams
            without a clear path to realization
          </p>
          <Link href="/login">
            <Button className="w-fit px-10 text-xl">Login</Button>
          </Link>
        </div>
        <div className="hidden md:flex lg:w-3/5 border-l-2">
          <Image src={hero} alt="project management" className="w-full" />
        </div>
      </div>
    </section>
  );
}
