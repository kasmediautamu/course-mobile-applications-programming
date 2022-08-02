import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
  CustomTextInput,
  HomeHeader,
} from "../components";

const LoginHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Login = ({ route, navigation }) => {
  // const { data } = route.params;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <HomeHeader isLogin={true} />
      <View>
        <CustomTextInput
          onChangeText={(newUsername) => setUsername(newUsername)}
          defaultValue={username}
          label={"Username"}
          placeholder={"Enter user name"}
        />
        <CustomTextInput
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={password}
          label={"Password"}
          placeholder={"Enter password"}
        />
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: "30%",
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          isBid={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
