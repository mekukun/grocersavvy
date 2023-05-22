import { Link, useRouter } from "expo-router";
import { Button, H2, Paragraph, Input, Text, XStack, YStack } from "tamagui";
import Constants from "expo-constants";

import { green, amber } from "../../utils/colors";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: ""
  });

  const auth = getAuth();
  const router = useRouter();

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory."
      });
      return;
    }

    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(() => {
        router.push("/users/testuser");
      })
      .catch((error) => {
        setValue({
          ...value,
          error: error.message
        });
        console.log(error);
      });
  }

  return (
    <YStack
      backgroundColor="white"
      space="$true"
      flex={1}
      justifyContent="center"
      paddingHorizontal="$4"
      paddingVertical="$8"
    >
      <YStack space>
        <YStack
          space="$1"
          maxWidth={600}
        >
          <XStack>
            <H2 color={amber[400]}>Welcome&nbsp;</H2>
            <H2 color={green[600]}>back!</H2>
          </XStack>

          <Paragraph color="grey">Please sign in to continue.</Paragraph>
        </YStack>
        <Input
          color="black"
          borderColor="grey"
          backgroundColor="white"
          placeholder="Email"
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <Input
          color="black"
          borderColor="grey"
          backgroundColor="white"
          placeholder="Password"
          onChangeText={(text) => setValue({ ...value, password: text })}
          textContentType="password"
          secureTextEntry
        />

        {/* sign up button */}
        <Button
          backgroundColor={green[600]}
          color="white"
          onPress={signIn}
        >
          Sign In
        </Button>
      </YStack>

      <Text
        textAlign="center"
        color="black"
      >
        Don't have an account?&nbsp;
        <Text
          color={green[600]}
          onPress={() => router.push("/users/testuser")}
        >
          Register
        </Text>
      </Text>
    </YStack>
  );
}
