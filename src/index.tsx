import {requireNativeComponent, UIManager, Platform} from "react-native";
import {type FormProps} from "./types";

const LINKING_ERROR =
	`The package '@react-native-ui-components/form' doesn't seem to be linked. Make sure: \n\n` +
	Platform.select({ios: "- You have run 'pod install'\n", default: ""}) +
	"- You rebuilt the app after installing the package\n" +
	"- You are not using Expo Go\n";

const ComponentName = "FormView";

export const Form =
	UIManager.getViewManagerConfig(ComponentName) != null
		? requireNativeComponent<FormProps>(ComponentName)
		: () => {
				throw new Error(LINKING_ERROR);
		  };
