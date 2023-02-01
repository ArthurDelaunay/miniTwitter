import { StyleSheet, Text, View } from "react-native"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "semi-bold",
  },
})
const Nav = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.font}>Home</Text>
      </Link>
      <Link to="/profile">
        <Text style={styles.font}>Profile</Text>
      </Link>
      <Link to="/tweets">
        <Text style={styles.font}>Tweets</Text>
      </Link>
    </View>
  )
}

export default Nav
