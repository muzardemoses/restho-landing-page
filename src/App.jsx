import "./App.css";
import { Header, SectionOne } from "./Components";

function App() {


  return (
    <div className="">
      {/* <div id="__next">
        <div></div>
        <div className="preloader active">
          <div className="hide">
            <span className="counter">100</span>
          </div>
        </div>
      </div> */}
      <Header />
      <main className="text-white">
        <SectionOne />
        {/* <div className="h-40"></div> */}
      </main>
    </div>
  );
}


export default App;


