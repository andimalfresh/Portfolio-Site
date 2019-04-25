import React from 'react'
import SnowG from './SnowG'
import GalvanizeUnity from './GalvanizeUnity'
import Studio401 from './Studio401'
import Resume from './Resume'

const Linkage = () => {
    return(
        <div className="linkContent">
          <ul className="linkList">
                <li><Resume /></li>
                <li><SnowG /></li>
                <li><GalvanizeUnity /></li>
                <li><Studio401 /></li>
          </ul>
        </div>

    )
}
export default Linkage