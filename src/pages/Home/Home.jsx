import Hero from '@sections/Hero/Hero';
import Services from '@sections/Services/Services';
import Clients from '@sections/Clients/Clients';
import FeaturedWork from '@sections/FeaturedWork/FeaturedWork';
import WhyKofuz from '@sections/WhyKofuz/WhyKofuz';
import StudioDetails from '@sections/StudioDetails/StudioDetails';
import Founders from '@sections/Founders/Founders';
import Pricing from '@sections/Pricing/Pricing';
import Testimonial from '@sections/Testimonial/Testimonial';
import FAQ from '@sections/FAQ/FAQ';
import Contact from '@sections/Contact/Contact';
import Manifesto from '@sections/Manifesto/Manifesto';
import useReveal from '@hooks/useReveal';

export default function Home() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <Hero />
      <Services />
      <Clients />
      <FeaturedWork />
      <Manifesto />
      <StudioDetails />
      <WhyKofuz />
      <Founders />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
