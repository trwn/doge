import * as React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import './css.css'

import {
FAQHeader,
FAQBlock,
A1,
Spacer,

}from "./FAQElements";

const Typography = styled(MuiTypography)(({ theme }) => ({
    color: 'white',
    textAlign: 'left',
  }));

const Accordion = styled((props) => (
    <MuiAccordion  disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      backgroundColor: '#3b3b3b',
      borderBottom: 0,
      width: '800px',
      justifyContent: 'center',
      paddingTop: '10px',
      paddingBottom: '10px',
      margin: 'auto',
      borderRadius: '10px',
    },
    '&:before': {
        backgroundColor: '#3b3b3b',
        display: 'none',
    },
    '&:after': {
      margin: 'auto',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
    backgroundColor: 'black',
    
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
      backgroundColor: '#3b3b3b',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      backgroundColor: '#3b3b3b',
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#3b3b3b',
  }));
  
   function FAQ() {
    const [expanded, setExpanded] = React.useState('panel0');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
    <FAQBlock>

    <FAQHeader>
    FAQ
    </FAQHeader>

    <A1>
    <Spacer/>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography id="panel1d-header">HOW MANY MAINSTREET DOGES ARE THERE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel2d-header">
          There will be 8,888 Dogeverse NFTs in total. Not all Doge Shibes are created equal as some are much rarer than others. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Spacer/>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography id="panel1d-header">HOW MUCH IS MINT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel2d-header">
          Mint price will be 0.05 ETH for each Dogerverse NFT.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Spacer/>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography id="panel1d-header">HOW MANY NFTS CAN BE MINTED PER WALLET?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel2d-header">
          For FREE mint, you can mint up to 1 Dogeverse NFT per wallet. But for the paid mint, you can mint up to X Dogeverse NFTs per wallet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Spacer/>
  
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography id="panel1d-header">WEN REVEAL?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel2d-header">
          Minted Doge Shibes will be revealed upon sellout.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Spacer/>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography id="panel1d-header">COMIC BOOK?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel2d-header"> 
          The holders of the first 2,000 Dogeverse NFTs will receive a physical and digital comic book. The remaining holders will receive a digital comic book.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Spacer/>
      
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
      <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography id="panel1d-header">CHARITY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel2d-header">
          Upon sellout, our team will donate 5 ETH to 5 charities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
 
      </A1>
     

    </FAQBlock>

);
}

export default FAQ;