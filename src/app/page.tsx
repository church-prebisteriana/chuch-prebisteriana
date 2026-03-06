import Hero from "./pages/main/Hero";
import SectionVideo from "./pages/main/section_Five";
import SectionLocation from "./pages/main/section_Four";
import SectionOne from "./pages/main/section_One";
import SectionThree from "./pages/main/section_Three";
import SectionTwo from "./pages/main/section_Two";

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
