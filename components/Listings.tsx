
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { RenderListItems } from "./RenderListItem";
import { useEffect, useState } from "react";

type Props = {
  listings: any[];
  category: string;
};
export function Listings({ listings, category }: Props) {
  const [loading, setLoading] = useState(false)
  const [currentListings, setCurrentListings] = useState<any[]>([]);

  useEffect(() => {
    console.log('Update Listing');
    setLoading(true);

    if (category === 'All') {
      setCurrentListings(listings);
    } else {
      const filteredListings = listings.filter((item) => item.category === category);
      setCurrentListings(filteredListings);
    }

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  return (
    <View>
      <FlatList
        data={loading ? [] : currentListings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderListItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}