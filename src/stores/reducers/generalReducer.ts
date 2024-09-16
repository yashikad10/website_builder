
import { AccountType, WalletDetails } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralState {
  user: WalletDetails | null;
  account: AccountType | null;
  lastWallet: string;
  btc_price: number;
  network: string;
  new_activity: boolean;
}

const initialState: GeneralState = {
  user: null,
  account: null,
  lastWallet: "",
  btc_price: 0,
  network: process.env.NEXT_PUBLIC_NETWORK || "mainnet",
  new_activity: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<WalletDetails | null>) => {
      console.log("setting user as : ", action.payload);
      state.user = action.payload;
    },
    setUserAccount: (state, action: PayloadAction<AccountType | null>) => {
      console.log("setting user account as : ", action.payload);
      state.account = action.payload;
    },
    setLastWallet: (state, action: PayloadAction<string>) => {
      state.lastWallet = action.payload;
    },
    setBtcPrice: (state, action: PayloadAction<number>) => {
      console.log("setting BTC Price as : ", action.payload);
      state.btc_price = action.payload;
    },
    setNetwork: (state, action: PayloadAction<"mainnet" | "testnet">) => {
      console.log("setting network as : ", action.payload);
      state.network = action.payload;
    },
    setNewActivity: (state, action: PayloadAction<boolean>) => {
      state.new_activity = action.payload;
    },
  },
});

export const {
  setUser,
  setLastWallet,
  setBtcPrice,
  setNetwork,
  setNewActivity,
  setUserAccount
} = walletSlice.actions;
export default walletSlice.reducer;
