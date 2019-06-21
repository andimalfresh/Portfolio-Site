import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class UltimaUmbrella extends React.Component {
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
          <p className="titleText">Ultima Umbrella</p>
  
          <img onClick={this.handleShow} alt="PetSwipe" src={require('./uUmbrella.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ultima Umbrella</Modal.Title>
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
                    <li><a href="http://ultimaumbrella.com/" rel="noopener noreferrer" target="_blank">http://ultimaumbrella.com</a></li>
                    <li><a href="https://github.com/andimalfresh/ultima-Umbrella-FrontEnd-React">Front End Repo</a></li>
                    <li><a href="https://github.com/andimalfresh/ultimaUmbrella-ProjectBackEnd">Back End Repo</a></li>
                    <li><a href="https://docs.google.com/presentation/d/1V_9DhZVktS_83C_7h_N-0o-hESjGDeB6w79OYYm-nbw/edit?usp=sharing">Google Slides Presentation</a></li>
               </ul>
               <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>Java</li>
                   <li>React</li>
                   <li>Kotlin</li>
                   <li>NodeJS</li>
                   <li>ExpressJS</li>
                   <li>Knex</li>
                   <li>TwilioAPI</li>
                   <li>PostgreSQL</li>
                   <li>Heroku</li>
                   <li>Firebase</li>
               </ul>
              <hr />
  
              <h4>Ultima Umbrella</h4>
              <p>Ultima Umbrella was a project I created for my capstone project at Galvanize to complete my Web Development Immersive program.
                The application allows the for more clear communication in the relationship between distributor and customer by ingesting the 
                distrubutor's catalog and filtering it to the customers needs. The customer then is provided a UI that offers the products that 
                they order from the distrubutor, chooses the quantity of items they want to order, and then hits a button for the order to populate,
                and then the order is sent to both distributor and customer via Email and SMS utilizing Twillio API. </p>
              <p>I created this project after managing a bar and resturant for many years before switching my career. Often times orders get mixed up 
                when ordering from distributors being as its primarily dones through text messaging.</p>
              <p>Alot of the the workings of this project were taken down to better facilitate my finaly presentation. I look forward to moving this 
                 project into production as my time allows.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
 

  export default UltimaUmbrella