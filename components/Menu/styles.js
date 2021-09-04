import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    icon: {
        color: "white",
    },
    menuText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase"
    },
    menuRow: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    menuTextBox: {
        flexGrow: 1,
    },
    arrowicon: {
        color: "#4D4D4E"
    },
    subtitle: {
        color: "gray",
        fontSize: 14,
        marginLeft: 15,
    }

})


export default styles;