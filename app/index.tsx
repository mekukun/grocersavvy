import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  Paragraph,
  Text,
  XStack,
  YStack
} from "tamagui";

import { MyStack } from "../components/MyStack";
import { green, amber } from "../utils/colors";

export default function Home() {
  const router = useRouter();

  return (
    <MyStack>
      <YStack
        space="$1"
        maxWidth={600}
        alignItems="center"
      >
        <XStack>
          <H1 color={amber[400]}>Grocer</H1>
          <H1 color={green[600]}>Savvy</H1>
        </XStack>

        <Paragraph
          textAlign="center"
          color="grey"
        >
          Simplify Your Grocery Experience
        </Paragraph>
      </YStack>

      <YStack
        space="$3"
        maxWidth={600}
      >
        <Button
          backgroundColor={green[600]}
          color="white"
          onPress={() => router.push("/pages/Login")}
        >
          Sign In
        </Button>
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
    </MyStack>
  );
}
