"use client";
import { ConnectMultiButton, useWalletAddress } from "bitcoin-wallet-adapter";
import InnerMenu from "./InnerMenu";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { setBtcPrice, setUser } from "../../stores/reducers/generalReducer";

const WalletButton = () => {
  const walletDetails = useWalletAddress();
  const dispatch = useDispatch();

  
  async function getBTCPriceInDollars() {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
      );
      const data = await response.json();
      const priceInDollars = data.bpi.USD.rate_float;
      return priceInDollars;
    } catch (error) {
      console.error("Error fetching BTC price:", error);
      return null;
    }
  }

  const putBTCPriceInRedux = useCallback(async () => {
    try {
      const btc = await getBTCPriceInDollars();
      console.log(btc, "btc inside");
      dispatch(setBtcPrice(btc));
    } catch (error) {
      console.error("Failed to fetch BTC price", error);
    }
  }, [dispatch]);

  useEffect(() => {
    putBTCPriceInRedux();
  }, [putBTCPriceInRedux]);

  const putUserDataInRedux = useCallback(() => {
    console.log(walletDetails, "wallet-details changed");
    if (walletDetails) {
      console.log("setting user as: ", walletDetails.cardinal_address);
      dispatch(setUser(walletDetails));
    } else {
      dispatch(setUser(null));
    }
  }, [walletDetails, dispatch]);

  useEffect(() => {
    putUserDataInRedux();
  }, [walletDetails, putUserDataInRedux]);

  useEffect(() => {
    const getData = async () => {
      try {
        const body = {
          wallet: walletDetails?.wallet,
          cardinal_address: walletDetails?.cardinal_address,
          ordinal_address: walletDetails?.ordinal_address,
          cardinal_pubkey: walletDetails?.cardinal_pubkey,
        };

        console.log(body, "---------------------------");

        if (
          walletDetails &&
          walletDetails.connected &&
          walletDetails.ordinal_address
        ) {
          // const ordinal_address = walletDetails?.ordinal_address;
          // const response = await getRunes(walletDetails);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };

    if (walletDetails) {
      getData();
    }
  }, [walletDetails]);

  return (
    <div className="mt-2">
      <ConnectMultiButton
        walletImageClass="w-[60px]"
        walletLabelClass="pl-3 font-bold text-xl ml-2"
        walletItemClass="border w-full md:w-6/12 cursor-pointer border-transparent rounded-xl mb-4 hover:border-green-500 transition-all"
        headingClass="text-white text-4xl pb-12 font-bold text-center"
        buttonClassname="bg-purple-600 rounded-lg flex items-center text-white px-4 py-1 mb-4 font-bold"
        InnerMenu={InnerMenu}
        // balance={10000}
      />
    </div>
  );
};

export default WalletButton;
