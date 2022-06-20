import React from "react"
import { BiWorld } from 'react-icons/bi';

export default function Header(){
    return (
        <header>
          <h1><span className="title-icon"><BiWorld/> </span> <span className="title"> my travel journal.</span></h1>
        </header>
    )
}