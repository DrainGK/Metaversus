import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='raltive'>
      <About />
      <div className="gradient-03 z-0"/>
      <Explore />
    </div>
    <div className='raltive'>
      <GetStarted />
      <div className="gradient-04 z-0"/>
      <WhatsNew />
    </div>
    <World />
    <div className='raltive'>
      <Insights />
      <div className="gradient-04 z-0"/>
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
