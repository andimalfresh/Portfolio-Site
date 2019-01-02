import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class Studio401 extends React.Component {
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
        <div>
          <p>Studio 401</p>
  
          <img onClick={this.handleShow} alt="Studio 401 Salon" src={require('./studio401.jpg')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Studio 401 Salon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <a href="http://studio401llc.com">www.studio401llc.com</a>
  
              <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Squarespace UX</li>
                   <li>Google Maps</li>
                   <li>Google AdWords</li>
                   <li>Google AdWordsExpress</li>
                   <li>Google Business</li>
               </ul>
              <hr />
  
              <h4>Studio 401 Salon</h4>
              <p>
                Studio 401 Salon is a Winter Park, CO's 
               </p>
               <p>
                 The Application is a mobile focused synopsis of SnowG as a brand utilizing HTML/CSS/Firebase to better provide traffic to our retail site
                 and social media platforms.
               </p>
               <p>
                Moving into 2019 we plan to expand the brands product offerings and social media platform presence. As for our website we are currently moving from 
                HTML/CSS to a React/ReactNative version as well as incorperate our own store and payment systems to better serve our growing customer base.  
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
  
 

  export default Studio401