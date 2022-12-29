import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getCards } from "../../services/cardServices";
import { ICard } from "../../types/card";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<
    (ICard & { user: { img: string; accountName: string } })[]
  >([]);

  useEffect(() => {
    setIsLoading(true);
    getCards().then(({ data, resultType }) => {
      if (resultType === "success") {
        setCards(data.cards);
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {});

  return (
    <>
      {isLoading && "Loading..."}

      {cards.map((card) => {
        console.log("card: ", card);
        return (
          <Card
            key={card._id}
            phrase={card.phrase}
            usages={card.usages}
            description={card.description}
            meaning={card.meaning}
            tags={card.tags}
            user={card.user}
          />
        );
      })}
    </>
  );
};

export default Home;
