import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full space-x-4 h-[calc(100vh-150px)]">
      <div className="w-1/2 flex flex-col space-y-6 p-28">
        <h1 className="font-bold text-7xl">Your AI powered</h1>
        <h1 className="font-bold text-7xl">Scrum Master!</h1>
        <p className="text-3xl">Improve the way of your tech scrum</p>
        <div>
        <Button className="bg-orange-500 font-bold text-lg h-14 mt-12" size='lg'>Get Started</Button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image
          alt="hero section image"
          src="/heroImage.png"
          className="h-auto w-[60rem]"
          width={666}
          height={375}
        />
      </div>
    </div>
  );
}
