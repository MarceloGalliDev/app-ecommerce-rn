import { Text, View } from "react-native";

export default function ProductScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-700">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}