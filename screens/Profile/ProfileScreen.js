import { FlatList, Text, View, Image, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

export const ProfileScreen = () => {

    const favorites = useSelector(state => state.movies.favorites);

    const user = {
        name: "Ramazan Sefa BULUT",
        email: "sefa@example.com",
        avatar:"https://avatar.iran.liara.run/public/boy",
      };

    return (
        <View>
            <View style={styles.profileContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                </View>
            </View>
            
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Favorite Movies</Text>
          {favorites.length === 0 ? (
            <Text style={{ textAlign: "center", marginTop: 20 }}>No favorite movies yet!</Text>
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", padding: 10, borderBottomWidth: 1 }}>
                  <Image source={{ uri: item.poster }} style={{ width: 80, height: 120, marginRight: 10 }} />
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                    <Text>{item.year}</Text>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      );
}

const styles = StyleSheet.create({
    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    avatar: {
      width: 140,
      height: 140,
      borderRadius: 30,
      marginRight: 15,
    },
    userName: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
    },
    userEmail: {
      fontSize: 14,
      color: "#666",
    },
  });
