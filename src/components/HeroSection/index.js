import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contract from "../../contracts/psychpunks.json";
import logo from "../../images/logo.png";
import grid from "../../images/grid.png";

import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroLogo,
  Grid,
  MintDiv,
  MiniAbout,
  MintInput,
  Price,
  Minted,
  ConnectButton,
  MyNFT,
  First,
  Then,
  Plus,
  Input,
  Minus,
  NewDiv,
  Spacer,
  PriceText,
  MintCText,
  PriceText2,
  MintCText2,
} from "./HeroElements";

const contractAddress = "0xab89D55822768F9eA1A6FFbe3f0eE10D676cA752";
const abi = contract.abi;




const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [feedback, setFeedback] = useState("");

  const onHover = () => {
    setHover(!hover);
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Metamask is isntalled! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("no authorized accounts");
    }
  };

  const mintNft = async (_amount) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        let ethAmount = (0.042 * _amount).toString();

        const mintNft = await nftContract.mint(accounts[0], _amount, {
          value: ethers.utils.parseEther(ethAmount),
        });
        setFeedback("Minting your NFT!!!");
        await mintNft.wait();
        setFeedback("Finished! Check it out on Opensea!");
      } else {
        console.log("Ethereum object does not exist!");
      }
    } catch (err) {
      setFeedback("Not enough ETH!");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  let [count, setCount] = useState(0);

  function incrementCount() {
    if (count > 14){
      count = 15;
      setCount(count);
    }
    else if (count < 0) {
      count = 0;
      setCount(count);
    }
    else {
      count +=1;
      setCount(count);
    }
    
    };
  function decrementCount() {
      if (count > 15){
        count = 15;
        setCount(count);
      }
      else if (count < 1) {
        count = 0;
        setCount(count);
      }
      else {
        count -=1;
        setCount(count);
      };
    };
  return (
    <HeroContainer>
      <HeroBg>
      <HeroLogo src={logo}/>
        <ImageBg/>
      </HeroBg>
      <HeroContent>
      <Grid src={grid}></Grid>
      <MintDiv>
      <MiniAbout>
        DogeVerse is a collection of 8888 //something cool// about this long or so i guess
        </MiniAbout>
        <First>
        First 800 FREE (max. 1 NFT / tx.)
        </First>
        <Then>
        Then 0.05Ξ each (max 15 NFT / tx.)
        </Then>
      <Minted>
        <MintCText>
      Minted     
      </MintCText>
      <MintCText2>
      Count
      </MintCText2>
      </Minted>
      <Price>
        <PriceText>
        Price
        </PriceText>
        <PriceText2>
        0.05Ξ
        </PriceText2>
      </Price>
      
      <NewDiv>
      <MintInput>
          <Minus onClick={decrementCount}>-</Minus>
          <Input >{count}</Input>
          <Plus onClick={incrementCount}>+</Plus>
      </MintInput>
      <Spacer></Spacer>
      <ConnectButton>
        Connect Wallet
      </ConnectButton>
      </NewDiv>
      <MyNFT>
        My total NFT minted (pull data from wallet)
      </MyNFT>
      </MintDiv>
      </HeroContent>
    </HeroContainer>
  );
  
};
export default HeroSection;

