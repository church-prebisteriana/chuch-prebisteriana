import Hero from "../components/sections/main/Hero";
import SectionVideo from "../components/sections/main/section_Five";
import SectionOne from "../components/sections/main/section_One";
import SectionTwo from "../components/sections/main/section_Two";
import SectionThree from "../components/sections/main/section_Three";
import SectionLocation from "../components/sections/main/section_Four";
export default function Home() {
  return (
    <main>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionLocation />
      <SectionVideo />
    </main>
  );
}
