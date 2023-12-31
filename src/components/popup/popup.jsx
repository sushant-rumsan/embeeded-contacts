import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup(props) {
    const [readyLink, setReadyLink] = useState(`<embed type="image/jpg" src="https://embeeded-contact.netlify.app/contact/${props.iconId}" width="300" height="200">`)

    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(readyLink);
        setCopied(true);
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your link is ready.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Copy and paste link in index.html file.</b></p>
        <p>
        {readyLink}
        </p>
        {
            copied ? <button className="learnMore" onClick={copyLink}>Copied to clipboard</button> : (<><button className="createBtn" onClick={copyLink}>Copy link</button></>)
        }
        
      </Modal.Body>
      <Modal.Footer>
      {
            copied ? <button className="createBtn" onClick={props.onHide}>Create Another</button> : (<button className="learnMore" onClick={props.onHide}>Create Another</button>)
        }
        
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;