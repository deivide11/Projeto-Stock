import React from 'react'
// import { FiLogOut, FiEdit, FiTrash2, FiEye } from 'react-icons/fi'
// import { BsBoxSeam, BsExclamationTriangleFill, BsFillTagFill } from 'react-icons/bs'

function Stock() {
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center py-10">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-6xl">
        
        {/* Topo */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold flex items-center gap-2">
            {/* <BsBoxSeam /> Gestão de Estoque */}
          </h1>
          <button className="border px-4 py-1 rounded flex items-center gap-1 text-sm hover:bg-gray-100">
            {/* <FiLogOut /> Sair */}
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-600 text-white p-4 rounded-lg">
            <p>Total de Produtos</p>
            <h2 className="text-2xl font-bold">3</h2>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-lg">
            <p>Estoque Baixo</p>
            <h2 className="text-2xl font-bold">1</h2>
          </div>
          <div className="bg-green-600 text-white p-4 rounded-lg">
            <p>Unidades de Estoque</p>
            <h2 className="text-2xl font-bold">39</h2>
          </div>
        </div>

        {/* Adicionar Categoria */}
        <div className="flex justify-between items-start gap-6 mb-6 flex-wrap">
          <div className="flex-1">
            <p className="mb-2 font-medium">Adicionar Categoria</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nome da categoria"
                className="border p-2 rounded w-full"
              />
              <button className="bg-purple-700 text-white px-4 rounded w-[40%]">Nova Categoria</button>
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2 font-medium">Categorias Existentes</p>
            <div className="flex flex-wrap gap-2">
              {['Exemplo 01', 'Exemplo 02', 'Exemplo 03', 'Exemplo 04'].map((cat, index) => (
                <span key={index} className="bg-gray-100 px-4 py-3 rounded text-sm">{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Adicionar Produto */}
        <div className="mb-4">
          <p className="mb-2 font-medium">Adicionar Produtos</p>
          <div className="flex gap-2 flex-wrap mb-4">
            <input type="text" placeholder="Nome do produto" className="border p-2 rounded flex-1" />
            <input type="number" placeholder="Quantidade" className="border p-2 rounded flex-1" />
            <input type="text" placeholder="Preço" className="border p-2 rounded flex-1" />
            <button className="bg-purple-700 text-white px-4 rounded">+ Adicionar Produto</button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="🔍 Buscar produtos..."
              className="border p-2 rounded flex-1"
            />
            
            <button className="bg-purple-700 text-white p-2 ml-4 rounded"> Buscar Produto</button>
            <button className="border p-2 rounded ml-4 text-sm">Ordenar por Nome</button>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="space-y-4">
          {[
            { nome: 'Exemplo 01', qtd: 12, preco: 'R$ 1.23', cat: 'Exemplo 01' },
            { nome: 'Exemplo 02', qtd: 9, preco: 'R$ 3.21', cat: 'Exemplo 02' },
            { nome: 'Exemplo 03', qtd: 32, preco: 'R$ 15.20', cat: 'Exemplo 03' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow-sm flex justify-between items-start">
              <div>
                <p className="font-bold">{item.nome}</p>
                <p className="text-sm text-gray-600">
                  Quantidade: {item.qtd} | Preço: {item.preco} | Categoria: {item.cat}
                </p>
              </div>
              {/* <div className="flex gap-3 text-lg">
                <BsExclamationTriangleFill className="text-orange-500 cursor-pointer" />
                <FiEye className="text-green-500 cursor-pointer" />
                <FiEdit className="text-blue-500 cursor-pointer" />
                <FiTrash2 className="text-red-500 cursor-pointer" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stock
