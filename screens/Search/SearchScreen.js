import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { fetchMovies } from "../../hooks/api";
import { useNavigation } from "@react-navigation/native";

export const SearchScreen = () => {
  const [searchText,setSearchText] = useState();
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const nav = useNavigation();

  const handleSearch = (text) => {
    setSearchText(text);
    if(text) {
        const filtered = fetchedProducts && fetchedProducts.filter( (item) => {
            const title = item.title.toLowerCase();
            return title.includes(text.toLowerCase())
        })
        setFilteredProducts(filtered)
      }else{
        setFilteredProducts([])
    }
  };

    const getData = async () => {
        const data = await fetchMovies();
        setFetchedProducts(data);
    };

    useEffect(()=>{
        getData();
    },[])

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        placeholder="Search for a movie..."
        value={searchText}
        onChangeText={(text)=>handleSearch(text)}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => nav.navigate("MovieDetail", { movie: item })}>
            <View style={{ flexDirection: "row", padding: 10, borderBottomWidth: 1 }}>
              <Image source={{ uri: item.poster }} style={{ width: 80, height: 120, marginRight: 10 }} />
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                <Text>{item.year}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
