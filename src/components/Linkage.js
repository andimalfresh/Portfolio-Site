import React from 'react'
import SnowG from './SnowG'
import Studio401 from './Studio401'
import Resume from './Resume'
import GalvanizeUnity from './GalvanizeUnity'
import MonicaAnderson from './MonicaAnderson'
import EagleWind from './EagleWind'
import UltimaUmbrella from './UltimaUmbrella'

const Linkage = () => {
    return(
        <div className="linkContent">
          <ul className="linkList">
                <li><Resume /></li>
                <li><Studio401 /></li>
                <li><SnowG /></li>
                <li><GalvanizeUnity /></li>
          </ul>
          <ul className="linkList">
                <li><UltimaUmbrella /></li>      
                <li><MonicaAnderson /></li>
                <li><EagleWind /></li>
          </ul>          
          <ul className="linkListMiddleRes">
                <li><Resume /> <Studio401 /></li>
                <li><SnowG /> <GalvanizeUnity /></li>
          </ul>
        </div>

    )
}
export default Linkage