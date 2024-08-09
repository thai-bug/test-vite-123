import { SearchBar } from "@arco-design/mobile-react";
import styles from './HomePage.module.scss'
import classnames from 'classnames'

const SearchField = () => {
  return (
    <SearchBar
      style={{ backgroundColor: "#bedaff" }}
      clearable={false}
      className={classnames(styles.test, "rounded-b-lg")}
    />
  );
};

export default SearchField;
