import { FlatList, Image, Text, View } from "react-native"
import useFetchMovies from "../../hooks/useFetchMovies"
import { fetchMovies } from "../../hooks/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { setMovies } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const movies = useSelector((state)=>state.movies.movies);
    const [loading,setLoading] = useState(true);
    
    const nav = useNavigation();


    useEffect(() => {
        const loadMovies = async () => {
          console.log("veri çekme işlemi başladı")
          const data = await fetchMovies();
          dispatch(setMovies(data))
          setLoading(false);
          console.log("veri çekme işlemi sonlandı")
        };
        loadMovies();
      }, []);

    if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
    }

    return(
        <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => nav.navigate('MovieDetail', { movie: item })} >
            <View style={{ flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}>
              <Image source={{ uri: item.poster }} style={{ width: 80, height: 120, marginRight: 10 }} />
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ fontSize: 14, color: "gray" }}>{item.year}</Text>
                <Text style={{ fontSize: 14 }}>⭐ {item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    )
}