import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export interface CheckoutModalProps { show: boolean, count: number, onClose?: Function };

const CheckoutConfirmation = ({ show, count, onClose = () => { } }: CheckoutModalProps) => {
    const onModalClose = () => {
        onClose();
    };

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You will receive a total of { count } products soon.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onModalClose}>Got it</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutConfirmation