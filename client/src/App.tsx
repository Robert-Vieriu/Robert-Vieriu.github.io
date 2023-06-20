import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Section/Section";
import News from "./components/News/News";

import Support from "./components/Support/Support";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Minigames from "./components/Minigames/Minigames";

function App() {
  const [playerOnline, setPlayerOnline] = useState(0);
  const IP = "116.203.67.152";
  useEffect(() => {
    axios
      .get(
        `https://mcapi.us/server/status?ip=${import.meta.env.VITE_MINECRAFT_IP}`
      )
      .then((res) => {
        setPlayerOnline(res.data.players.now);
      });
  }, [playerOnline]);

  return (
    <>
      <Navigation playerOnline={playerOnline} />
      <Section />
      <News />
      <Minigames />
      <Support />
      <Footer />
    </>
  );
}

export default App;
