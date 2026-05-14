import About from "@/app/ui/home/about";
import Hero from "@/app/ui/home/hero";
import Qualifications from "@/app/ui/home/quals";
import Skills from "@/app/ui/home/skills";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Qualifications />
    </main>
  );
}
