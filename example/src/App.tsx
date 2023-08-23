import {StyleSheet, View} from "react-native";
import {Form} from "@react-native-ui-components/form";

export default function App() {
	return (
		<View style={styles.container}>
			<Form color="#32a852" style={styles.box} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	box: {
		width: 60,
		height: 60,
		marginVertical: 20
	}
});
