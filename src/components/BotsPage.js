import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  //fetch with a side effect
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((list) => setBots(list));
  }, []);
console.log(bots);
  //enlist bots to army from collection
  function botEnlist(bot) {
    if (botArmy.includes(bot)) 
    return;
    console.log('You have been added to the army')
    setBotArmy(
      (botArmy) => [...botArmy, bot]
      );
      alert(`Bot :${bot.bot_class} has been added to the army`)
    }
// remove bots from army
  function botRemove(bot) {
    alert(`Bot :${bot.bot_class} will be removed from the army`)
    setBotArmy((botArmy) => botArmy.filter((enlistBot) => enlistBot.id !== bot.id));
  }
//make a delete request to delete from backend api
  function handleDelete(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots((bots) => bots.filter((list) => list.id !== bot.id));
      setBotArmy((botArmy) => botArmy.filter((enlistBot) => enlistBot.id !== bot.id));
    });
  }

  return (
    <div>
      <YourBotArmy 
      bots={botArmy} 
      handleClick={botRemove} 
      handleDelete={handleDelete}
       />

      <BotCollection 
      bots={bots} 
      handleClick={botEnlist} 
      handleDelete={handleDelete} 
      />
    </div>
  );
}

export default BotsPage;
