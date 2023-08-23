import {View} from "react-native";
import {type FormProps} from "./types";

export const Form = ({color, ...props}: FormProps) => {
	return (
		<View {...props}>
			<View style={{flex: 1, backgroundColor: color}} />
		</View>
	);
};
