import { useSelector, useDispatch } from "react-redux";

const filteredKeys = (action, localState) => {
  //   const searchTerm = useSelector((state) => state);
  //   console.log(searchTerm);
  //   const searchKeys = Object.assign();

  const value = action.category;
  const searchKeys = Object.assign(localState[value]);

  searchKeys.filter(
    (key) => console.log(key)

    // key["user-name"]
    //   ?.toLowerCase()
    //   .includes(
    //     searchTerm.searchdata.length > 0 && searchTerm.searchdata.toLowerCase()
    //   )
  );
};

export default filteredKeys;
