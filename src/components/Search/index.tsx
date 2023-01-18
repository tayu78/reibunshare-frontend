import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SearchContent from "./SearchContent";
import { SEARCH_TAB_NAME } from "../../types/index.d";
import { searchUser } from "../../services/userServices";
import InputField from "../Form/InputField";
import { IUser } from "../../types/user";

const Search = () => {
  const [selectedTab, setSelectedTab] = useState(SEARCH_TAB_NAME.USER);
  const [keyword, setKeyword] = useState("");
  const [searchedDatas, setSearchedDatas] = useState<IUser[] | null>(null);

  useEffect(() => {
    if (!keyword) return;
    switch (selectedTab) {
      case SEARCH_TAB_NAME.USER:
        searchUser(keyword).then(({ data }) => {
          setSearchedDatas(data.users);
        });
        break;
    }
  }, [keyword]);

  return (
    <div className={styles.search}>
      <InputField
        placeholder="Search by keyword"
        handleChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <ul className={styles.tabLists}>
        {/* <li onClick={() => setSelectedTab(SEARCH_TAB_NAME.TOP)}>Top</li> */}
        <li onClick={() => setSelectedTab(SEARCH_TAB_NAME.USER)}>User</li>
        <li onClick={() => setSelectedTab(SEARCH_TAB_NAME.LANGUAGE)}>
          Language
        </li>
        <li onClick={() => setSelectedTab(SEARCH_TAB_NAME.DIALECT)}>Dialect</li>
      </ul>
      {searchedDatas && searchedDatas.length > 0 && (
        <div className={styles.contentWrapper}>
          <SearchContent datas={searchedDatas} />
        </div>
      )}
    </div>
  );
};

export default Search;
