"use client"

import React, { useState } from 'react';
import axios from 'axios';
import "./func.css"

interface Cliente {
  cpf: string;
  nm_cliente: string;
  email: string;
  tipo_deficiencia: string;
}

const API_URL = 'http://localhost:5000/api/clientes';

const Pages = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteAtual, setClienteAtual] = useState<Cliente | null>(null);

  const getAllClientes = async () => {
    try {
      const response = await axios.get<Cliente[]>(API_URL);
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const addCliente = async () => {
    try {
      const response = await axios.post<Cliente>(API_URL, clienteAtual);
      setClientes([...clientes, response.data]);
      setClienteAtual(null);
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
    }
  };

 

 

  return (
    <div className='container'>
      <div className='funcB'>
      <button onClick={getAllClientes}>Carregar Clientes</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo de Deficiência</th>

          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.cpf}>
              <td>{cliente.cpf}</td>
              <td>{cliente.nm_cliente}</td>
              <td>{cliente.email}</td>
              <td>{cliente.tipo_deficiencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="formm">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="CPF" value={clienteAtual?.cpf || ''} onChange={(e) => setClienteAtual({...clienteAtual!, cpf: e.target.value})} required />
        <input type="text" placeholder="Nome" value={clienteAtual?.nm_cliente || ''} onChange={(e) => setClienteAtual({...clienteAtual!, nm_cliente: e.target.value})} required />
        <input type="text" placeholder="Email" value={clienteAtual?.email || ''} onChange={(e) => setClienteAtual({...clienteAtual!, email: e.target.value})} required />
        <input type="text" placeholder="Tipo de Deficiência" value={clienteAtual?.tipo_deficiencia || ''} onChange={(e) => setClienteAtual({...clienteAtual!, tipo_deficiencia: e.target.value})} required />
        <button type="submit" onClick={addCliente}>Adicionar Cliente</button>
      </form>
      </div>
    </div>
  );
};

export default Pages;
