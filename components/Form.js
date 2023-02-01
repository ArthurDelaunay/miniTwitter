import { StyleSheet, Text, View, Button, TextInput } from "react-native"
import { login } from "../api/auth"

import { Formik } from "formik"
import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/user"

const Form = () => {
  const { user, setUser, setToken, token } = useContext(UserContext)
  const handleSubmit = async (values) => {
    const data = await login(values)
    setToken(data.access_token)
    setUser(data.user)
  }

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <TextInput
              name="email"
              placeholder="Write your email.."
              onChangeText={handleChange("email")}
              value={values.email}
              keyboardType="email-address"
            />
            <TextInput
              onChangeText={handleChange("password")}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </>
  )
}

export default Form
