
import '../App.css';
import { Toggle, ButtonToggle, Container, Row, Col, Table } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { InputGroupText, InputGroup, InputGroupAddon, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';


const Clientes = (props) => {
  const { Nuevo, nombreclase } = props;

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    console.log('useEffect');
  })
 
  const changeUnmountOnClose = e => {
    let value = e.target.value;
    setUnmountOnClose(JSON.parse(value));
  }


  return (
    <div>
      <br></br><br></br>
      <Container>
        <Row xs="2">
          <Col sm={{ size: 'auto', offset: -1 }}><h3 >Clientes</h3></Col>
          <Col sm={{ size: 'auto', offset: 2 }}><h3 >163</h3></Col>
        </Row>
        <Row xs="2">
          <Col sm={{ size: 'auto', offset: -1 }} ><h4 >Introduce algun dato del cliente:</h4></Col>

          <div>
            <Col inline onSubmit={(e) => e.preventDefault()} sm={{ size: 'auto', offset: 6 }} onClick={toggle} ><Button color="primary" size="md"  >{Nuevo}+Nuevo</Button>{' '}
            </Col>
            <Modal isOpen={modal} toggle={toggle} className={nombreclase} unmountOnClose={unmountOnClose}>
              <ModalHeader toggle={toggle}>Admin clientes</ModalHeader>
              <ModalBody>
                <div>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre" />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Celular" />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <Input placeholder="Email" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>@example.com</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Guardar</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </Row>






        <Form >
          <FormGroup row>
            <Col sm={8}>
              <Label for="exampleSearch"></Label>
              <Input className="forma"
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Buscador"
              />
            </Col>
          </FormGroup>
        </Form>

        <Table Row xs="2" dark striped>

          <thead>

            <tr>
              <Row >
                <Col> <th>Nombre</th></Col>
                <Col><th>Celular</th></Col>
                <Col ><th>E-mail</th></Col>
                <Col><th></th></Col>

              </Row>
            </tr>

          </thead>
          <tbody>
            <tr>
              <Row>
                <Col> <td>Mark</td></Col>
                <Col><td>Otto</td></Col>
                <Col><td>@mdo</td></Col>
                <Col xs="3.5"><td><Row>
                  <Col xs="8" sm="4"> <ButtonToggle color="primary">Expediente</ButtonToggle>{' '}</Col>
                  <Col xs="6" sm="3"><ButtonToggle color="warning">Editar</ButtonToggle>{' '}</Col>
                  <Col xs="6" sm="3"><ButtonToggle color="danger">Eliminar</ButtonToggle>{' '}</Col>
                </Row></td></Col>

              </Row>
            </tr>
            <tr>
              <Row>
                <Col> <td>Jacob</td></Col>
                <Col><td>Jacob</td></Col>
                <Col><td>@fat</td></Col>
                <Col xs="3.5"><td><Row>
                  <Col xs="8" sm="4"> <ButtonToggle color="primary">Expediente</ButtonToggle>{' '}</Col>
                  <Col xs="6" sm="3"><ButtonToggle color="warning">Editar</ButtonToggle>{' '}</Col>
                  <Col xs="6" sm="3"><ButtonToggle color="danger">Eliminar</ButtonToggle>{' '}</Col>
                </Row></td></Col>

              </Row>
            </tr>


            <tr>
              <Row>
                <Col> <td>Jacob</td></Col>
                <Col><td>Jacob</td></Col>
                <Col><td>@fat</td></Col>
                <Col xs="3.5"><td><Row>
                  <Col xs="8" sm="4"> <ButtonToggle color="primary">Expediente</ButtonToggle>{' '}</Col>
                  <Col xs="6" sm="3"><ButtonToggle color="warning">Editar</ButtonToggle>{' '}</Col>
                  <Col xs="6" sm="3"><ButtonToggle color="danger">Eliminar</ButtonToggle>{' '}</Col>
                </Row></td></Col>
              </Row>
            </tr>
          </tbody>

        </Table>
      </Container>
    </div>
  )
}


export default Clientes;