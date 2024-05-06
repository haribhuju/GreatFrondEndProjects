import PricingCardList from "./components/PricingCardList";
import PricingInfo from "./components/PricingInfo";
import { PricingProvider } from "./components/PricingProvider";
import { pricingPlanData } from "./data/pricingPlanData";

function App() {
  return (
    <>
      <div className="bg-white m-4 px-3 py-12 md:px-4 md:py-16 xl:p-24">
        <div className="grid grid-cols-4 gap-12 md:grid-cols-6 md:gap-16 xl:grid-cols-12">
          <PricingProvider>
            <PricingInfo />
            <PricingCardList value={pricingPlanData} />
          </PricingProvider>
        </div>
      </div>
    </>
  );
}

export default App;
