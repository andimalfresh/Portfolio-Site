import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class MonicaAnderson extends React.Component {
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
          <p className="titleText">MonicaDAnderson</p>
  
          <img onClick={this.handleShow} alt="PetSwipe" src={require('./monicaAnderson.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Monica D Anderson</Modal.Title>
              <div className="navDeco">
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
                    <li><a href="http://monicadanderson.com/" rel="noopener noreferrer" target="_blank">http://monicadanderson.com</a></li>
               </ul>
               <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>Google Analytics</li>
                   <li>Google Tag Manager</li>
                   <li>Real Geeks Platform</li>
               </ul>
              <hr />
  
              <h4>Monica D Anderson (.com)</h4>
              <p> After Returning back home to the Grand County after graduating Galvanize I was soon contacted by my good
                  friend Monica Anderson to help her launch her new site for real estate and get her site set up for the with 
                  Google Analytics, Google Tag Manger, and Google Adwords. With the real estate market being so comptetive Grand
                  County she needed solutions to aquire and capture leads for potential and returning clients. 
              </p>
              <p>At first it was a challange returning to CMS systems such as the RealGeeks platform after building everything
                from scratch for the previous 6 months. Those challanges were quickly over came and we were able to get her site 
                and Google Business platforms up in a matter of days. 
              </p>
              <p>
                I am excited to expand on this project in the near future with my new partnership with local photographer Jay Stewart
                to build an even better UX/UI experience with visuals that paint a better picture for the user of what its like to live in Grand Country
                with all of its spectacular views of nature, the continental divide, and gorgeous sunsets.
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
  
 

  export default MonicaAnderson