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
                <li><Studio401 /></li>
                <li><SnowG /></li>
                <li><GalvanizeUnity /></li>
          </ul>
        </div>

    )
}
export default Linkage