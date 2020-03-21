import React, { Component } from 'react';
import { Table, Button, Container, FormGroup, Label, Input } from 'reactstrap';

import NuevoTourModal from './tours/nuevoTourModal';


class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <Container>        
        <h1>Tours</h1>
        <NuevoTourModal buttonLabel="+ Nuevo" /><br />
        <FormGroup>
          <Label for="exampleEmail">Introduce algun dato del tour:</Label>
          <Input type="text" name="buscaTour" id="buscaTour" placeholder="Buscar tour..." />
        </FormGroup>
        <Table dark striped>
          <thead>
            <tr>
              <th>Tour</th>
              <th>Destino</th>
              <th>Fecha</th>
              <th>Qty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TECATE republica 2019	</td>
              <td>CUU</td>
              <td>2019-10-19</td>
              <td>50</td>
              <td>
                <Button color="success" className="mr-5">Precios</Button>
                <Button color="warning">Editar</Button>
              </td>
            </tr>
            <tr>
              <td>TECATE republica 2019	</td>
              <td>CUU</td>
              <td>2019-10-19</td>
              <td>50</td>
              <td>
                <Button color="success" className="mr-5">Precios</Button>
                <Button color="warning">Editar</Button>
              </td>
            </tr>
            <tr>
              <td>TECATE republica 2019	</td>
              <td>CUU</td>
              <td>2019-10-19</td>
              <td>50</td>
              <td>
                <Button color="success" className="mr-5">Precios</Button>
                <Button color="warning">Editar</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Tours;