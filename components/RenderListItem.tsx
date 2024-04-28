import Colors from "@/constants/Colors"
import { ListingType } from "@/types/listingTypes"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const RenderListItems: ListRenderItem<ListingType> = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.bookmark}>
          <Ionicons name='bookmark-outline' color={Colors.white} size={20} />
        </View>

        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.itemTxt}
        >{item.name}
        </Text>

        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.itemLocationTxt}>{item.location}</Text>
          </View>
          <Text style={styles.itemPriceTxt}>${item.price}</Text>
        </View>
      </View>

    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});