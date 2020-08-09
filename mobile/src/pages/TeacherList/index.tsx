import React from "react";
import { View } from "react-native";

//Components
import PageHeader from "../../components/PageHeader";

//Styles
import styles from "./styles";

function TeacherList() {
	return (
		<View style={styles.container}>
			<PageHeader title="Proffys disponíveis" />
		</View>
	);
}

export default TeacherList;
