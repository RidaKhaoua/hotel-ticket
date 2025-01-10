import bg from "@assets/bg-2.jpg";
import "./App.css";

import FindPrice from "@components/findPrice/FindPrice";

function App() {
  return (
    <div className="min-h-screen bg-slate-200">
      <section className="relative min-h-screen ">
        <div className="h-40">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            src={bg}
            alt="hotel"
          />
        </div>
        <FindPrice/>
      </section>
    </div>
  );
}

export default App;
