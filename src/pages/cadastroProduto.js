import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cusuario.css';
import '../css/index.css';
import React,{Component} from 'react';
import apiProduto from '../service/apiProduto.js';

export default class cadastroProduto extends Component {
    
    constructor(props){
        super(props);
            this.state ={
                produto_nome: '',
                produto_descricao: '',
                produto_preco:'',
                produto_qtde_ml:'',
                produto_ativo:'S'
            }
        }

        changeField(field,event){
            let _filed = event.target.value;
            this.setState(prevState => {
                let nextState = Object.assign({},prevState);
                nextState[field] = _filed;
                return nextState;
            })
        }

       async submitForm(){
          const response = await  apiProduto.post('/produto/0',{
            "produto_nome":this.state.produto_nome,
            "produto_descricao": this.state.produto_descricao,
            "produto_ativo":"S",
            "produto_preco":this.state.produto_preco,
            "produto_qtde_ml": this.state.produto_qtde_ml
          });
              if(response.status == 200){
                    alert('Sucesso!');
              } else{
                    alert('Falha');
              }  //alert(JSON.stringify(this.state));
        }

    render(){
  return (
<div className="center">
        <Menu/>
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={this.submitForm.bind(this)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNomeProduto">
                            <Form.Label className="details-form">Nome produto</Form.Label>
                            <Form.Control  className="font-forms" type="text" placeholder="Informe o nome do produto" value={this.state.produto_nome} onChange={this.changeField.bind(this,'produto_nome')} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridNomeProdutoDescricao">
                            <Form.Label className="details-form">Descricao produto</Form.Label>
                            <Form.Control  className="font-forms" type="text" placeholder="Informe a descrição do produto" value={this.state.produto_descricao} onChange={this.changeField.bind(this,'produto_descricao')} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridProdutoPreco">
                                <Form.Label className="details-form">Preço do produto</Form.Label>
                                <Form.Control  className="font-forms" placeholder="Informe o preço do produto" value={this.state.produto_preco} onChange={this.changeField.bind(this,'produto_preco')} />
                            </Form.Group>

                            <Form.Group as={Col}  controlId="formGridProdutoQtdeMl">
                                <Form.Label className="details-form">Qtde ML</Form.Label>
                                <Form.Control  className="font-forms" placeholder="Se necessario informea qtde de ml" value={this.state.produto_qtde_ml} onChange={this.changeField.bind(this,'produto_qtde_ml')} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="dark" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
</div>
  );
}
}
