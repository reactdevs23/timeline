import FinancialPlaning from "./components/FinancialPlaning/FinancialPlaning";
import styles from "./App.module.css";
import WeddingTimeline from "./components/WeddingTimeline/WeddingTimeline";
import { dance } from "./images";
import Timeline from "./components/Timeline/Timeline";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const financialPlaning = {
    fontFamily: "'Inter', sans-serif",
    heading: "Financial Planning Cycle",
    tagline: "Zenith Central Bank",
    plans: [
      {
        title: "Stage 1",
        info: "Understands your needs and goal",
        color: "#32a852",
      },
      {
        title: "Stage 2",
        info: "Access your current financial state",
        color: "#c7249e",
      },
      {
        title: "Stage 3",
        info: "Create fund essential to your server",
        color: "#32a852",
      },
      {
        title: "Stage 4",
        info: "Follow a schedule of budgeting and stick to it",
        color: "#c7249e",
      },
      {
        title: "Stage 5",
        info: "Monitor your expenses and budget",
        color: "#691c07",
      },
      {
        title: "Stage 6",
        info: "Refine your budget as needed",
        color: "#32a852",
      },
    ],
  };
  const weddingTimeline = {
    fontFamily: "'Inter', sans-serif",
    heading: "Wedding Timeline",
    events: [
      {
        img: dance,
        time: "11.00 AM",
        event: "Weeding Ceremony",
        color: "#000",
      },
      {
        img: dance,
        time: "12.00 AM",
        event: "Weeding Lunch",
        color: "#000",
      },
      {
        img: dance,
        time: "1.00 PM",
        event: "First Dance",
        color: "#000",
      },
      {
        img: dance,
        time: "4.00 PM",
        event: "Evening Party",
        color: "#000",
      },
      {
        img: dance,

        time: "11.00 PM",
        event: "Carriages",
        color: "#000",
      },
    ],
  };

  const timeline = {
    fontFamily: "'Inter', sans-serif",
    heading: "Timeline",
    tagline: "Briefly discuss the key dates for the project.",
    clockIcon: "fa-regular fa-clock",
    bg: "#fff",

    data: [
      {
        title: "1st Quater",
        info: "List a milestone or deadline",
        bg: "#E7ECB1",
      },
      {
        title: "2nd Quater",
        info: "List a milestone or deadline",
        bg: "#E7ECB1",
      },
      {
        title: "3rd Quater",
        info: "List a milestone or deadline",
        bg: "#E7ECB1",
      },
      {
        title: "4th Quater",
        info: "List a milestone or deadline",
        bg: "#E7ECB1",
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <FinancialPlaning {...financialPlaning} />
      <WeddingTimeline {...weddingTimeline} />
      <Timeline {...timeline} />
    </div>
  );
}

export default App;
