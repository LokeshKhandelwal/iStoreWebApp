import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
    color1: "#c70049",
    color1_light: "rgba(227,25,99,1)",
    color1_light2: "rgba(199,0,73,0.8)",
    color2: "white",
    color3: "rgb(45,45,45)",
    color4: "transparent",
    color5: "#f2f2f2",
    color6: "#f7f7f7"
};

//Default stylings
export const defaultStyles = StyleSheet.create({
    padding: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2
});

export const inputStyling = StyleSheet.create({
    height: 50,
    backgroundColor: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20
});
export const formHeading= {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
}

export const inputOptions = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
}

export const formStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10,
    },
    forget: {
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: "flex-end",
        fontWeight: "100"
    },
    btn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,

    },
    or: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "100",
        color: colors.color2
    },
    link: {
        color: colors.color2,
        alignSelf: "center",
        fontSize: 19,
        textTransform: "uppercase",
        marginVertical: 10,
        marginHorizontal: 20
    }
})

export const defaultImg = "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png";