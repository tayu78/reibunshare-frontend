import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getCards } from "../../services/cardServices";
import { CardWithUser } from "../../types/card";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<CardWithUser[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getCards().then(({ data, resultType }) => {
      if (resultType === "success") {
        setCards(data.cards);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && "Loading..."}

      {cards.map((card) => {
        return (
          <Card
            key={card._id}
            cardId={card._id!}
            phrase={card.phrase}
            usages={card.usages}
            description={card.description}
            meaning={card.meaning}
            tags={card.tags}
            user={card.user}
            likes={card.likes!}
          />
        );
      })}
    </>
  );
};

export default Home;
