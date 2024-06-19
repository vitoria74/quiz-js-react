import "./styles.css";
import Header from "./components/Header";
import Template from "./components/Template";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Template />
        <Footer />
      </main>
    </div>
  );
}
