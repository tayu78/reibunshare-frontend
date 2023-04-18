import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SearchContent from "./SearchContent";
import { SEARCH_TAB_NAME } from "../../types/index.d";
import { searchUser } from "../../services/userServices";
import { searchCard } from "../../services/cardServices";
import InputField from "../Form/InputField";
import { IUser } from "../../types/user.d";
import { CardWithUser } from "../../types/card.d";

const Search = () => {
  const [selectedTab, setSelectedTab] = useState(SEARCH_TAB_NAME.USER);
  const [keyword, setKeyword] = useState("");
  const [searchedDatas, setSearchedDatas] = useState<
    IUser[] | CardWithUser[] | null
  >(null);

  useEffect(() => {
    if (!keyword) {
      return setSearchedDatas(null);
    }

    switch (selectedTab) {
      case SEARCH_TAB_NAME.PHRASE:
        searchCard(keyword, "phrase").then(({ data }) => {
          setSearchedDatas(data.cards);
        });
        break;
      case SEARCH_TAB_NAME.TAG:
        searchCard(keyword, "tag").then(({ data }) => {
          setSearchedDatas(data.cards);
        });
        break;
      case SEARCH_TAB_NAME.USER:
        searchUser(keyword).then(({ data }) => {
          setSearchedDatas(data.users);
        });
        break;
    }
  }, [keyword, selectedTab]);

  const isSelected = (tabname: SEARCH_TAB_NAME) => {
    return tabname === selectedTab;
  };

  return (
    <div className={styles.search}>
      <InputField
        placeholder="Search by keyword"
        handleChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <ul className={styles.tabLists}>
        <li
          onClick={() => setSelectedTab(SEARCH_TAB_NAME.PHRASE)}
          className={
            isSelected(SEARCH_TAB_NAME.PHRASE) ? styles.active : undefined
          }
        >
          Phrase
        </li>

        <li
          onClick={() => {
            setSearchedDatas(null);
            setSelectedTab(SEARCH_TAB_NAME.TAG);
          }}
          className={
            isSelected(SEARCH_TAB_NAME.TAG) ? styles.active : undefined
          }
        >
          Tag
        </li>
        <li
          onClick={() => setSelectedTab(SEARCH_TAB_NAME.USER)}
          className={
            isSelected(SEARCH_TAB_NAME.USER) ? styles.active : undefined
          }
        >
          User
        </li>
      </ul>
      {searchedDatas && (
        <div className={styles.contentWrapper}>
          <SearchContent datas={searchedDatas} tab={selectedTab} />
        </div>
      )}
    </div>
  );
};

export default Search;
