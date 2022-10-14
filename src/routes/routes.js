import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home.js';
import Login from '../pages/login.js'
import Restaurant from '../pages/cadastroRestaurante.js';
import Produto from '../pages/cadastroProduto';
import Pedido from '../pages/pedidos.js';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact  component={Login}/>
            <Route path='/home' exact  component={Home}/>
            <Route path='/login' exact  component={Login}/>
            <Route path='/crestaurante' exact  component={Restaurant}/>
            <Route path='/cproduto' exact  component={Produto}/>
            <Route path='/fpedido' exact  component={Pedido}/>
        </BrowserRouter>
    )
}