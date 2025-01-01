import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import WorkoutsPage from "./pages/WorkoutsPage/WorkoutsPage";
import MealPlansPage from "./pages/MealPlansPage/MealPlansPage";
import PlanGenerationPage from "./pages/PlanGenerationPage/PlanGenerationPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LearnMorePage from "./pages/LearnMorepage/LearnMorePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/meal-plans" element={<MealPlansPage />} />
        <Route path="/plan-generation" element={<PlanGenerationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
