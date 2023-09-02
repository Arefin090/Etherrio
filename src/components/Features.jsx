import React from "react";
import { ReactComponent as Features1} from '../assets/encryption.svg';
import { ReactComponent as Features2} from '../assets/nft.svg';
import { ReactComponent as Features3} from '../assets/wallet.svg';
import { Container } from "@mui/material";
import { Typography } from '@mui/material';
import '../App.css'

const FeaturesSection = () => {
    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"50px", fontFamily:"Light", fontSize:"30px", fontWeight:"bold"}}>Features</h1>
            <div style={{ display: 'flex', alignItems: 'center'}} className='flex justify-center items-center space-x-10'>
                <div>
                    <h6 style={{marginTop:"30px"}}>Security</h6>
                    <Features1 style={{width:"120",height:"120",marginTop:"10", marginBottom:"40"}}/>
                </div>
                <div>
                    <h6 style={{marginTop:"30px"}}>Transactions</h6>
                    <Features2 style={{width:"120",height:"120",marginTop:"10", marginBottom:"40"}}/>
                    
                </div>
                <div>
                    <h6 style={{marginTop:"30px"}}>Rapid View</h6>
                    <Features3 style={{width:"120",height:"120",marginTop:"10", marginBottom:"40"}}/>
                    
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;