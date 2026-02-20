import SlideEngine from "@/components/SlideEngine";
import { Slide1, Slide2, Slide3, Slide4 } from "@/components/slides/IntroSlides";
import { Slide5, Slide6, Slide7, Slide8 } from "@/components/slides/FeatureSlides";
import { Slide9, Slide10, Slide11, Slide12 } from "@/components/slides/ClosingSlides";

export default function Home() {
  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide11 key="11" />,
    <Slide12 key="12" />,
  ];

  return (
    <main className="bg-sinergo-dark min-h-screen">
      <SlideEngine slides={slides} />
    </main>
  );
}

