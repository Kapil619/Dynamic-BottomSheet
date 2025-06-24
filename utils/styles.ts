import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    mainContent: {
        flex: 1,
    },
    header: {
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    headerSubtitle: {
        fontSize: 16,
        color: "#666",
        marginTop: 4,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginBottom: 12,
        paddingHorizontal: 20,
    },

    // Horizontal Cards
    horizontalScroll: {
        paddingLeft: 20,
        paddingRight: 10,
    },
    horizontalCard: {
        width: 100,
        height: 70,
        backgroundColor: "#007AFF",
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        justifyContent: "center",
    },
    horizontalTitle: {
        fontSize: 12,
        fontWeight: "600",
        color: "white",
    },
    horizontalSubtitle: {
        fontSize: 10,
        color: "rgba(255,255,255,0.8)",
        marginTop: 2,
    },

    // Vertical Cards
    verticalCard: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: "#666",
    },

    // Bottom Sheet
    sheetContent: {
        // flex: 1,
        backgroundColor: "white",
    },
    contentPadding: {
        padding: 20,
    },
    sheetTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    sheetDescription: {
        fontSize: 16,
        color: "#666",
        lineHeight: 22,
        marginBottom: 20,
    },

    // Feature Cards
    horizontalContainer: {
        marginBottom: 20,
    },
    featureCard: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    featureIcon: {
        fontSize: 20,
    },
    featureTitle: {
        fontSize: 10,
        fontWeight: "600",
        color: "white",
        marginTop: 4,
        textAlign: "center",
    },
});
