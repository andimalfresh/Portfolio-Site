import React from 'react'


const About = (props) => {
    return(
        
        <div className="aboutContent">
            
            <div className="picContainer"> 
                <ul className="picList">
                    <li className="picLine">
                        <img className="personalPic" src={require('./img/img1.jpg')} alt="The Boss" />
                    </li>
                    <li className="picLine">
                        <img className="personalPic" src={require('./img/img2.jpg')} alt="The Boss" />
                    </li>
                    <li className="picLine">
                        <img className="personalPic" src={require('./img/img3.jpg')} alt="The Boss" />
                    </li>
                    <li className="picLine">
                        <img className="personalPic" src={require('./img/img4.jpg')} alt="The Boss" />
                    </li>
                </ul>
            </div> 
            <div className="aboutText">
            <p>Hello friend !! My name is Andrew. I am a Software Engineer in both front-end and back-end development.
            From a young age I have been enthralled in technology. I began learning front end development in the late 
            90's and kept it up as a hobby over the years along with graphic design.</p>
            <p> In early 2018, I decided to make 
            a pivot in my career and focus solely on Software Engineering. In Feburary 2019 I graduated Galvanize's 
            Full Stack Immersive Web Development Program which is over 800 hours of front and back end application development. </p>

            <p>Currently I am working doing freelance design work, marketing and SEO optimization while pursuing a full
            time career in software development. Check out some of my past and ongiong projects further down the page. Also feel free
            to contact me through any of the resources below! </p>
            <p>Outside of Development I am father of two crazy boys, designer for SnowG Streetwear, Guitarist for 18 years, enjoy international travel, and being a world-rankned computer hardware enthusiast.</p>
            <p>I am constantly adding features and easter eggs to my site so feel free to click around or mess with the resolutions and see whats under the hood.</p>
            </div>
            <ul className="contactList">
                <li>
                    <a className="contactLink" rel="noopener noreferrer" target="_blank" href="http://linkedin.com/in/wandrewpedersen">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn</a>
                </li>
                <li>
                    <a className="contactLink" rel="noopener noreferrer" target="_blank" href="https://www.github.com/andimalfresh/">
                        <i className="fab fa-instagram"></i>
                        GitHub</a>
                </li>
                <li>
                    <a className="contactLink" href="mailto:w.andrew.pedersen@gmail.com?Subject=SnowG%20question" rel="noopener noreferrer" target="_top">
                        <i className="fas fa-envelope"></i>
                        Email</a>
                </li>
                <li>
                    <a className="contactLink" rel="noopener noreferrer" target="_blank" href="tel:+19705319665">
                        <i className="fas fa-phone-square"></i>
                        Phone</a>
                </li>
            </ul>
        </div>
    )
}
export default About