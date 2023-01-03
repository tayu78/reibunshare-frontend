import { useEffect, useState } from "react";
import { getBookCards } from "../../../services/cardServices";
import Card from "../../Card";
import { CardWithUser } from "../../../types/card";

type Props = {
  cardIds: string[];
};

const Book = ({ cardIds }: Props) => {
  const [cards, setCards] = useState<CardWithUser[]>([]);

  useEffect(() => {
    getBookCards(cardIds).then(({ data }) => {
      setCards(data.bookCards);
    });
  }, []);

  return (
    <>
      {cards.map((card) => {
        return (
          <Card
            key={card._id!}
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

export default Book;
