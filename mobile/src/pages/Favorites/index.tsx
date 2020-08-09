import React from "react";
import { View } from "react-native";

//Component
import PageHeader from "../../components/PageHeader";

//Styles
import styles from "./styles";

function Favorites() {
	return (
		<View style={styles.container}>
			<PageHeader title="Meus proffys favoritos" />
		</View>
	);
}

export default Favorites;
