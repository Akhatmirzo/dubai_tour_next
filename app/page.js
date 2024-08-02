import Advantages from "@/components/Home/Advantages";
import Amazong from "@/components/Home/Amazong";
import Hero from "@/components/Home/Hero";
import Packages from "@/components/Home/Packages";
import Question from "@/components/Home/Question";

export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <Question />
      <Amazong />
      <Packages />
    </div>
  );
}
