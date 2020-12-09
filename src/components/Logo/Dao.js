import React from 'react'
import { Icon } from "@material-ui/core";
import daologo from 'assets/logo/dao.svg';


export default function Dao () {
    return (
        <Icon>
            <img src={daologo} height={100} width={100}/>
        </Icon>
    );
}
