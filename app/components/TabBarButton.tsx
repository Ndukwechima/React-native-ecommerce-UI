// import { Pressable, StyleSheet, Text} from 'react-native'
// import React from 'react'
// import { icon } from '@/constants/Icons';
// import { Colors } from '@/constants/Colors';

// type Props = {
//   onPress: () => void;
//   onLongPress: () => void;
//   isFocused: boolean;
//   label: string;
//   routeName: string;
// };

// const TabBarButton = (props: Props) => {
// const { onPress, onLongPress, isFocused, routeName, label } = props;

//   return (
//     <Pressable
//       onPress={onPress}
//       onLongPress={onLongPress}
//       style={styles.tabbarBtn}
//     >
//      {icon[routeName]({
//         color: isFocused ? Colors.primary : Colors.black,
//      })}   
//       <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text>
//     </Pressable>
//   );
// }

// export default TabBarButton

// const styles = StyleSheet.create({
//   tabbarBtn: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 5,
//   }
// });

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icon } from "@/constants/Icons"; // Assuming this is correct
import { Colors } from "@/constants/Colors";

type RouteName = "index" | "explore" | "notifications" | "cart" | "profile";

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  label: string;
  routeName: RouteName;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, routeName, label } = props;
  // Ensure routeName is valid and exists in icon
  const IconComponent = icon[routeName];

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {routeName === "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}
      {IconComponent ? (
        IconComponent({ color: isFocused ? Colors.primary : Colors.black })
      ) : (
        <Text>Invalid Icon</Text> // Fallback in case of invalid routeName
      )}
      <Text style={{ color: isFocused ? "#673ab7" : "#222", fontSize: 13 }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  badgeWrapper: {
   position: 'absolute',
   backgroundColor: Colors.highlight,
   top: -5,
   right: 20,
   paddingVertical: 2,
   paddingHorizontal: 6,
   borderRadius: 10,
   zIndex: 10,
  },
  badgeText:{
  color: Colors.black,
  fontSize: 12,
  }
});
