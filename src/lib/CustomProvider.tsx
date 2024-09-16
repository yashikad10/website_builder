"use client";
import { WalletProvider } from "bitcoin-wallet-adapter";
import { Provider } from "react-redux";
import Editor from "../components/editor";
import { store } from "../stores";

export default function CustomProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <WalletProvider customAuthOptions={{ network: "testnet" }}>
        <Editor/>
        {children}
      </WalletProvider>
    </Provider>
  );
}
