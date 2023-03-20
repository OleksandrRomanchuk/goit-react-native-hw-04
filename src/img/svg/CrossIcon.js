import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const CrossIcon = ({ isAvatarShown }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: isAvatarShown ? "#E8E8E8" : "#FF6C00",
        transform: [{ rotate: isAvatarShown ? "45deg" : "0deg" }],
      }}
    >
      <Svg width={13} height={13} viewBox="0 0 13 13">
        <Path
          d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z"
          fill={isAvatarShown ? "#BDBDBD" : "#FF6C00"}
        />
      </Svg>
    </View>
  );
};

export default CrossIcon;
