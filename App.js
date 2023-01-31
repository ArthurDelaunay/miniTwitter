import { StyleSheet, View, SafeAreaView } from "react-native"
import { NativeRouter, Routes, Route } from "react-router-native"
// import { API_URL } from "@env"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Tweeter from "./pages/Tweeter"
import Profile from "./pages/Profile"
import Nav from "./components/Nav"

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 20,
    position: "relative",
    height: "95%",
    borderWidth: 3,
    borderColor: "green",
    justifyContent: "space-between",
    backgroundColor: "cyan",
  },
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tweets" element={<Tweeter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Nav />
      </NativeRouter>
    </SafeAreaView>
  )
}

export default App
