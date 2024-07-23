import { Text, View, StyleSheet, Platform } from "react-native";



export default function PokemonHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>View your Pokemons here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        borderWidth: 2,
        padding: 10,
        margin: 16,
        backgroundColor: "white",
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 3 },
                shadowColor: "gray",
                shadowOpacity: 0.5,
                shadowRadius: 4
            }
        })
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 24
    },

})