import { FurnitureType } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductsState {
  value: { product: FurnitureType | undefined; ammount: number }[];
}

const initialState: ProductsState = {
  value: [
    {
      product: undefined,
      ammount: 0,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<[FurnitureType, number]>) => {
      const alreadyAdded = state.value.filter(
        (p) => p.product && p.product.id == action.payload[0].id
      );

      // If Already Added
      if (alreadyAdded.length > 0) {
        // Increase Ammount
        state.value.map((p) => {
          if (p.product && p.product.id == action.payload[0].id) {
            p.ammount += action.payload[1];
          }
        });
      } else {
        state.value.push({
          product: action.payload[0],
          ammount: action.payload[1],
        });
      }
    },

    deleteProduct: (state, action: /*id*/ PayloadAction<number>) => {
      const filteredArr = state.value.filter((p) => {
        return p.product && p.product.id !== action.payload;
      });
      state.value = filteredArr;
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
