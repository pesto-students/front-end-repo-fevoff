import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "../redux-slices/users/usersSlice";
import categorySlices from "../redux-slices/category/categorySlice";

export const store = configureStore({
    reducer: {
        user: usersSlice,
        category: categorySlices,
    },
});