import { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../Services/Api'

function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('Cadastro bem-sucedido!', data)
      } else {
        console.error('Erro no cadastro:', data.message)
      }
    } catch (error) {
      console.error('Erro de conexão:', error)
    }
  }

  return (
    <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Cadastrar
      </button>
      <p className="mt-4 text-center text-sm">
        Já tem uma conta? <Link to="/" className="text-green-500">Login</Link>
      </p>
    </form>
  )
}

export default Register
