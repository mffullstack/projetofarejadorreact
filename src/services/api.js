// Configuração de API para o projeto
const API_URL = process.env.VITE_API_URL || 'http://localhost:3000/api'

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`)
    return await response.json()
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    throw error
  }
}

export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.error('Erro ao enviar dados:', error)
    throw error
  }
}
