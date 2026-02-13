import Navbar from './Navbar/Navbar';
import Text from './HeroText/Text';
import HeroImg from './HeroImg/HeroImg';

const Hero = () => {
  return (
    <main>
      <Navbar />
      <section className="px-10 md:px-20 pt-10 flex-col md:flex-row flex justify-between gap-15">
        <Text />
        <HeroImg />
      </section>
    </main>
  );
};
export default Hero;
