import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class CrookedCreek extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div className="picDiv">
          <p className="titleText">Crooked Creek Saloon</p>
  
          <img onClick={this.handleShow} alt="Crooked Creek Saloon" src={require('./creek.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Crooked Creek Saloon</Modal.Title>
              <div className="navDecom">
                <div className="navBarDeco1m">
                </div>
              <div className="navBarDeco2m">
              </div>
              <div className="navBarDeco3m">
              </div>  
             </div> 
            </Modal.Header>
            <Modal.Body>
               <ul>
                    <li><a href="https://whale-amethyst-slr6.squarespace.com/" rel="noopener noreferrer" target="_blank">http://crookedcreeksalooncolorado.com</a></li>
               </ul>
               <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>Google Analytics</li>
                   <li>Google Tag Manager</li>
                   <li>Google Tag AdWords</li>
                   <li>Square Space</li>
                   <li><a href="http://stewartphotoco.com">Jay Stewart Photography</a></li>
               </ul>
              <hr />
  
              <h4>Crooked Creek Saloon</h4>
              <p>
                My former employers at the Crooked Creek Saloon came to me in August to help them launch a self sustaining web solutions project to better show off weekly events and menu offerings.
              </p>
              <p>They chose the Square Space platform due to easy to use anayltics and to also allow in house changes of presented content without the need of a web developer.</p>
              <p>The bread and butter of the site, the menu photograpy, was done by my good friend and long time photographer <a href="http://stewartphotoco.com">Jay Stewart @stewartphotoco</a>.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
 

  export default CrookedCreek