import React, { useEffect, useState } from "react";
import logo from "./images/918dcx.png";
import { ConnectButton, Modal} from "web3uikit"
import "./App.css";
import Coin from "./components/Coin.js"
import {abouts} from "./about";
import { useMoralisWeb3Api, useMoralis } from "react-moralis";

const App = () => {
  const [btc, setBtc] = useState(40);
  const [eth, setEth] = useState(60);
  const [link, setLink] = useState(70);
  const [visible, setVisible] = useState(false);
  const [modalToken, setModalToken] = useState();
  const [modalPrice, setModalPrice] = useState();
  const Web3Api = useMoralisWeb3Api();
  const {Moralis, isInitialized} = useMoralis();

  async function getRatio(tick, setPerc) {
    
    const Votes = Moralis.Object.extend("Votes");
    const query = new Moralis.Query(Votes);
    query.equalTo("ticker", tick);
    query.descending("createdAt");
    const results = await query.first();
    let up = Number(results.attributes.up);
    let down = Number(results.attributes.down);
    let ratio = Math.round(up/(up+down)*100);
    setPerc(ratio);
  }

   useEffect(() => {
    if(isInitialized){
    getRatio("BTC", setBtc);
    getRatio("ETH", setEth);
    // getRatio("LINK", setLink);

    async function createLiveQuery(){
      let query = new Moralis.Query('Votes');
      let subscription = await query.subscribe();
      subscription.on('update', (object) => {
        
        if(object.attributes.ticker === "LINK"){
          getRatio("LINK", setLink);
        }else if(object.attributes.ticker === "ETH"){
          getRatio("ETH", setEth);
        }else if(object.attributes.ticker === "BTC"){
          getRatio("BTC", setBtc);
        }
      });
    }
    createLiveQuery();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);




  useEffect(() => {
 
    async function fetchTokenPrice() {
      const options = {
        address:
          abouts[abouts.findIndex((x) => x.token === modalToken)].address,
      };
      const price = await Web3Api.token.getTokenPrice(options);
      setModalPrice(price.usdPrice.toFixed(2));
    }
  
    if(modalToken){
    fetchTokenPrice()
  }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalToken]);

  return (
    <><div className="everything">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="50px" />
          Sentiment
        </div>
        <ConnectButton />
      </div>
      <div className="instructions">
          You think its goin up or down Bruh?
      </div>

      <div className="list">
       <Coin
         perc={btc}
         setPerc={setBtc}
         token={"BTC"}
         setModalToken={setModalToken}
         setVisible={setVisible}
       />
       <Coin
         perc={eth}
         setPerc={setEth}
         token={"ETH"}
         setModalToken={setModalToken}
         setVisible={setVisible}
       />
       <Coin
         perc={link}
         setPerc={setLink}
         token={"LINK"}
         setModalToken={setModalToken}
         setVisible={setVisible}
       />
      </div>
      <Modal
       isVisible={visible}
       onCloseButtonPressed={() => setVisible(false)}
       hasFooter={false}
       title={modalToken}
      >
        <div>
         <span style={{ color: "green" }}>{`Price: `}</span>
         {modalPrice}$
       </div>
        <div>
         <span style={{ color: "grey" }}>{`About:`}</span>
       </div>
       <div>
         {modalToken &&
           abouts[abouts.findIndex((x) => x.token === modalToken)].about}
       </div>
        </Modal>
        </div>



    </>
  );
};

export default App;
