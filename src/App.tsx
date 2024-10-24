import Accordion from "./components/Accordion";
import { faqs } from "./utils/faqs";

function App() {
  return (
    <main className="min-h-screen w-full bg-[url('./assets/images/background-pattern-mobile.svg')] md:bg-[url('./assets/images/background-pattern-desktop.svg')] bg-no-repeat bg-contain bg-light-pink px-6 lg:px-0 relative overflow-auto">
      <Accordion header="FAQs" data={faqs} />
    </main>
  );
}

export default App;
