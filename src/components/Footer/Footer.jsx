import Outro from "./Outro/Outro";
import Social from "./Widgets/Social/Social";
import QuickLinks from "./Widgets/QuickLinks/QuickLinks";
import Support from "./Widgets/Support/Support";
import News from "./Widgets/News/News";
import CopyRight from "./CopyRight/CopyRight";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center">
      <div className="flex justify-between items-center">
        <Outro />
        <section className="flex justify-between items-center">
          <Social />
          <QuickLinks />
          <Support />
          <News />
        </section>
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;
