import BannerArea from './components/BannerArea';
import Footer from './components/Footer';
import Nav from './components/Nav';

import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div>
      <Nav />
      <BannerArea />

      <section className="whatWeDo">
        <div className="container">
          <h1>What We Do</h1>
          <p>
            We help people, businesses and institutions establish, build, and
            preserve a solid financial foundation for today and the future.
          </p>
        </div>
      </section>
      <ImageSlider />

      <Footer />
    </div>
  );
}

export default App;
