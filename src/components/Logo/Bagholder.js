import React from 'react'
import { Icon } from "@material-ui/core";
import bagholderlogo from 'assets/logo/bag-holder.svg';


export default function Bagholder () {
    return (
        <Icon>
            <img src={bagholderlogo} height={100} width={100}/>
        </Icon>
    );
}
