import Header from "./components/Header";
import Carousel from "./components/Carousel";
import TopMatches from "./components/TopMatches";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Carousel
        />
        <TopMatches />
      </main>
      <Footer />
    </div>
  );
}

export default App;
