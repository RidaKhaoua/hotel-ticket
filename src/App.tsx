import bg from "@assets/bg-2.jpg";
import "./App.css";

import FindPrice from "@components/findPrice/FindPrice";
import Services from "@components/services/Services";
import Experience from "@components/experience/Experience";

function App() {
  return (
    <div className="min-h-screen bg-slate-200">
      <section className="relative">
        <div className="h-40">
          <img
            className="img-head w-full h-full object-cover"
            loading="lazy"
            src={bg}
            alt="hotel"
          />
        </div>
        <FindPrice/>
        <Services/>
      </section>
        <Experience/>
    </div>
  );
}

export default App;
