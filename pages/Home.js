import { StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"

import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/user"
import Form from "../components/Form"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Home = () => {
  console.log("Home")
  const navigate = useNavigate()
  const { user, token } = useContext(UserContext)
  useEffect(() => {
    if (user) {
      navigate("/tweets")
    }
  }, [user])

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Form />
    </View>
  )
}

export default Home
