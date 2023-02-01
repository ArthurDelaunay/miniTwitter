import { API_URL } from "@env"
import { API_KEY } from "@env"

const login = async ({ email, password }) => {
  const request = await fetch(`${API_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  const response = await request.json()

  return response
}

const signUp = async ({ email, password }) => {
  const request = await fetch(`${API_URL}/auth/v1/signup`, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  const response = await request.json()
  return response
}

export { login, signUp }
