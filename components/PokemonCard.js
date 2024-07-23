import { SafeAreaView, Text, StyleSheet, Platform, View, Image } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};

export default function PokemonCard({
    name, image, type, hp, moves, weaknesses
}) {
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hpText}>❤️HP: {hp}</Text>
            </View>
            <Image source={image} resizeMode="contain" style={styles.image} />

            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Weakness: {weaknesses.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 3 },
                shadowColor: "gray",
                shadowOpacity: 0.3,
                shadowRadius: 4
            }
        })
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
        marginTop: 24

    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        fontWeight: "bold",
        fontSize: 20
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeText: {
        fontWeight: "bold",
        fontSize: 18
    },
    movesContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    movesText: {
        fontWeight: "bold",
        fontSize: 18,
        margin: 10
    },
    hpText: {
        fontWeight: "bold",
        fontSize: 16
    },
    typeEmoji: {
        marginRight: 10
    }
});