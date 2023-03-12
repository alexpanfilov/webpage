import FormFilters from "./comonents/FormFilters";
import Header from "./comonents/Header";
import TopBoxes from "./comonents/TopBoxes";
import Recommendations from "./comonents/Recommendations";
import Hint from "./comonents/Hint";
import Footer from "./comonents/Footer";
import data from "./data";
import { useEffect, useMemo, useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faStarHalf,
  faCircleInfo,
  faCircleCheck,
    faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faStarHalf, faCircleInfo, faCircleCheck, faCircleMinus);

function App() {
  const [dataRecommendation, setDataRecommendation] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState();

  // Add default value on page load
  useEffect(() => {
    setDataRecommendation(data);
  }, []);

  function getAccountFeesList() {
    // Avoid filter when selectedCategory is null
    if (!selectedRecommendation) {
      return dataRecommendation;
    }
    return dataRecommendation.filter(
      (item) =>
        item.accountFees === selectedRecommendation ||
        item.accountFeature === selectedRecommendation ||
        (item.accountFees && item.accountFeature === selectedRecommendation)
    );
  }

  let filteredList = useMemo(getAccountFeesList, [
    selectedRecommendation,
    dataRecommendation,
  ]);

  function handleCategoryChange(event) {
    setSelectedRecommendation(event.target.value);
  }

  return (
    <>
      <Header />
      <TopBoxes />
      <FormFilters handleCategoryChange={handleCategoryChange} />
      <Recommendations filteredList={filteredList} />
      <Hint />
      <Footer />
    </>
  );
}

export default App;