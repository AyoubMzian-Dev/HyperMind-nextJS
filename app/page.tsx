
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"
import { Button } from "@/components/ui/button";
import {FeatureCard} from "@/components/featureCard"
import demoImag from "@/public/demoImage.png"




export default function Home() {
  return (
   <main className="w-full">
    <header className="w-full h-16 flex justify-between pt-3 px-6 bg-sectionsBackground">
      <Link href={"/"} className="flex h-fit text-2xl"><Image src={logo} alt="logo" width={35} height={35} className="mx-4"/>Hyper<span className="text-specialColor">Mind</span> </Link>
      <nav className="">
        <ul className="flex items-center text-lg">
          <li><Link href={"#vision"} className="mx-6">Vision</Link></li>
          <li><Link href={"#features"} className="mx-6">Features</Link></li>
          <li><Link href={"#wish_list"} className="mx-6">Wish-list</Link></li>
          <li><Link href={"#suggestions"} className="mx-6">Suggestions</Link></li>
        </ul>
      </nav>
        <div className="flex">
          <Button className="bg-darkSpecialColor hover:bg-specialColorHover border-[2px] border-specialColor text-specialColor mx-2">Try it </Button>
          <Button className="bg-specialColor hover:bg-specialColorHover text-normalText  mx-2">Sign In</Button>
        </div>
    </header>

    {/* hero section for the calaction */}
    <section id="hero" className="mt-14 flex flex-col">
      <h1 className="text-4xl text-normalText text- text-center">Study Less, Learn More <br className="mb-4"/> The Smart Way!</h1>
      <p className="mt-2 text-sm text-easyText text-center">Get clear, structured lessons and exercises designed to help you learn faster
      without the frustration of bad resources..</p>
      <Image src={demoImag} width={1200} className="self-center mt-6 rounded-t-2xl  shadow-[0_35px_35px_rgba(0,20,20,0.25)] items-center" alt="demo image"/>
    </section>

  {/* vision section */}
    <section id="vision" className="mt-14 flex justify-between pb-12 pt-8 px-6">
     <h2 className="text-3xl ml-4">What we want to achieve</h2> 
     <p className="max-w-[40%] text-sm text-easyText">We’re here to change how students learn. We believe high school students should learn faster and more effectively, without wasting time on bad resources. Our goal is to make studying clear, organized, and AI-powered, so students can focus on understanding, not just memorizing</p>
    </section>
    {/* features section */}
    <section id="features" className="mt-14 flex flex-col pb-12 bg-matherfucker pt-8 px-6">
      <h2 className="text-3xl ml-4">How we make it happen</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <FeatureCard  title={""} description={"mtherfucker"}/>
      </div>
    </section>
   </main>
  );
}
