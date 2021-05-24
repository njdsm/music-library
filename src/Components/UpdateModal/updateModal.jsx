import React, { Component } from "react";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class updateSongModal extends Component {
  constructor() {
    super();
    this.state = {
      show: this.props.show
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
        <Modal 
            show={this.state.show} 
            handleClose={this.hideModal}
            backdrop="static"
            keyboard="false">
                <ModalHeader>
                    <ModalTitle >Edit Song Details</ModalTitle>
                </ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={this.hideModal}>Cancel</Button>
                    <Button variant="primary" onClick={this.props.updateSong}>Update Song</Button>
                </ModalFooter>                
            <p>Modal</p>
        </Modal>
    );
  }

}

export default updateSongModal