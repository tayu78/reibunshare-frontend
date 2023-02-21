import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getCards, getCardsOfFollowingUser } from "../../services/cardServices";
import { CardWithUser } from "../../types/card";
import styles from "./styles.module.scss";

const Home = () => {
  const options = ["all user", "following user"];
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState<CardWithUser[]>([]);
  const [getCardOption, setGetCardOption] = useState(
    localStorage.getItem("getCardOption") || "all user"
  );

  useEffect(() => {
    setIsLoading(true);

    switch (getCardOption) {
      case options[0]:
        getCards().then(({ data, resultType }) => {
          if (resultType === "success") {
            setCards(data.cards);
          }
          setIsLoading(false);
        });
        break;
      case options[1]:
        getCardsOfFollowingUser().then(({ data, resultType }) => {
          if (resultType === "success") {
            setCards(data.cards);
          }
          setIsLoading(false);
        });
        break;
    }
    localStorage.setItem("getCardOption", getCardOption);
  }, [getCardOption]);

  return (
    <>
      {isLoading && "Loading..."}

      <div
        className={styles.dropdown}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className={styles.dropdownContainer}>
          <p>{getCardOption}</p>
          <div className={`${styles.dropdownList} ${isOpen && styles.active}`}>
            {options.map((option, index) => {
              return (
                <li
                  onClick={() => {
                    setGetCardOption(option);
                  }}
                  key={index}
                >
                  {option}
                </li>
              );
            })}
          </div>
        </div>
      </div>
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
