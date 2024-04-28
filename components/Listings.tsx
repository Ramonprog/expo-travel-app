
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { RenderListItems } from "./RenderListItem";
import { useEffect, useState } from "react";

type Props = {
  listings: any[];
  category: string;
};
export function Listings({ listings, category }: Props) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Update Listing');
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [category]);

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderListItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}