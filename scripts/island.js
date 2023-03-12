import {
  ChainId,
  ConnectWallet,
  ThirdwebProvider,
  useContract,
  useNFT,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import React from "react";
import { createRoot } from "react-dom/client";

const elements = document.querySelectorAll(".island");

const RenderNFT = () => {
  // Get your NFT Collection using it's contract address
  const { contract } = useContract("{{contractAddress}}");

  // Load (and cache) the metadata for the NFT with token ID 0
  const { data: nft, isLoading } = useNFT(contract, 0);
  return !isLoading && nft ? (
    <ThirdwebNftMedia height="100px" metadata={nft.metadata} />
  ) : (
    <p>Loading...</p>
  );
};

const MyFirstWeb3Island = () => {
  return (
    <ThirdwebProvider ChainId={ChainId.Polygon}>
      <ConnectWallet />
      <RenderNFT />
    </ThirdwebProvider>
  );
};

elements &&
  [...elements].forEach((node) => {
    const root = createRoot(node);
    root.render(<MyFirstWeb3Island />);
  });
