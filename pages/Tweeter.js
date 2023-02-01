import { StyleSheet, Text, View, FlatList, Button } from "react-native"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-native"

import { UserContext } from "../contexts/user"
import { getAllTweets } from "../api/tweets"
import Card from "../components/Card"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Tweeter = () => {
  const navigate = useNavigate()
  console.log("tweeter")
  const [tweets, setTweets] = useState([])
  const { token } = useContext(UserContext)
  const fetchTweets = async () => {
    const data = await getAllTweets(token)
    setTweets(data)
  }
  useEffect(() => {
    if (token) {
      fetchTweets()
    } else {
      navigate("/")
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>Tweeter</Text>
      {tweets.length > 0 && (
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Card content={item.content} />}
          keyExtractor={(item, i) => i}
        />
      )}
      {/* <Button onPress={() => console.log(tweets)} title="Log" /> */}
    </View>
  )
}

export default Tweeter
