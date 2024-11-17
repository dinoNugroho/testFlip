import React from "react";
import { ActivityIndicator, View } from "react-native";

export interface ILoading {
    height?: number
}

const LoadingSpinnerComponent: React.FC<ILoading> = ({ height }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                minHeight: 100
            }}
        >
            <ActivityIndicator color={"#000000"} size="large" />
        </View>
    )
}

export default LoadingSpinnerComponent;