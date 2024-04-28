
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { RenderListItems } from "./RenderListItem";

type Props = {
  listings: any[];
}
export function Listings({ listings }: Props) {


  return (
    <View>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderListItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}