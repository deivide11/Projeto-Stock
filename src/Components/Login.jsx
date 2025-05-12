import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../Services/Api';


function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario,
          senha,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('Login bem-sucedido!', data)
        navigate('/stock')
      } else {
        console.error('Erro no login:', data.message)
      }
    } catch (error) {
      console.error('Erro de conexão:', error)
    }
  }

  return (
    <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
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
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Entrar
      </button>
      <p className="mt-4 text-center text-sm">
        Não tem uma conta? <Link to="/cadastro" className="text-blue-500">Cadastre-se</Link>
      </p>
    </form>
  )
}

export default Login
