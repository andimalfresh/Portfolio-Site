import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class EagleWind extends React.Component {
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
          <p className="titleText">Eagle Wind Sound</p>
  
          <img onClick={this.handleShow} alt="Eagle Wind Sound" src={require('./eagleWind.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Eagle Wind Sound</Modal.Title>
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
                    <li><a href="http://eaglewindsound.com/" rel="noopener noreferrer" target="_blank">http://eaglewindsound.com</a></li>
               </ul>
               <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>Google Analytics</li>
                   <li>Google Tag Manager</li>
                   <li>WordPress 5.0</li>
               </ul>
              <hr />
  
              <h4>Eagle Wind Sound</h4>
              <p>
                Current Project .... 
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
 

  export default EagleWind