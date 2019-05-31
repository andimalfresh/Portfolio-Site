import React from 'react'
import SnowG from './SnowG'
import Studio401 from './Studio401'
import Resume from './Resume'
import GalvanizeUnity from './GalvanizeUnity'

const Linkage = () => {
    return(
        <div className="linkContent">
          <ul className="linkList">
                <li><Resume /></li>
                <li><SnowG /></li>
                <li><Studio401 /></li>
                <li><GalvanizeUnity /></li>
          </ul>          
          <ul className="linkListMiddleRes">
                <li><Resume /> <SnowG /></li>
                <li><Studio401 /> <GalvanizeUnity /></li>
          </ul>
        </div>

    )
}
export default Linkage