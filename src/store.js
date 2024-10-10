import { createStoreHook } from "react-redux";

import roootreducer from "../src/Reducers/reducers";

const store = createStoreHook(roootreducer);

export default store;
