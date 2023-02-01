import { StyleSheet, Text, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../contexts/user"

const Profile = () => {
  const { token } = useContext(UserContext)
  return <Text>Profile</Text>
}

export default Profile
