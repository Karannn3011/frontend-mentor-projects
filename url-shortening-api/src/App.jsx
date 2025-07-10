import Header from "./Header";
import Info from "./Info";
import Shorten from "./Shorten";
import Stats from "./Stats";
import Boost from "./Boost";
import Footer from "./Footer";


export default function App() {
  return (
    <>
      <Header />
      <Info />
      <div className="bg-gray/25 pb-20">
        <Shorten />
        <Stats />
      </div>
      <Boost />
      <Footer />
    </>
  );
}
