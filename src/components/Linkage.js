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
                <li><UltimaUmbrella /></li>
                <li><GalvanizeUnity /></li>
                <li><Studio401 /></li>
          </ul>
          <ul className="linkList">
                <li><MonicaAnderson /></li>      
                <li><SnowG /></li>
                <li><EagleWind /></li>
          </ul>          
        </div>

    )
}
export default Linkage