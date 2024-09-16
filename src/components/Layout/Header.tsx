"use client";
//@ts-ignore
import Link from "next/link";
import WalletButton from "../Wallet/WalletButton";
const Header = () => {
  return (
    <header className=" text-white p-2 border-b border-gray-700 h-20">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex ">
          <WalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
