import React, { useState, useEffect } from "react";
import {
    ScrollingGiF,
    Video,
} from "./PreviewElements";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../Wallet/connectors";
import vid from "../../images/scroll.mp4";

const Preview = ({ isOpen, toggle }) => {
return (
    <ScrollingGiF >
        <Video 
        autoPlay loop muted 
        src={vid} type="video/mp4">
        </Video>
    </ScrollingGiF>
  );
};

export default Preview;