import React, { useState } from "react";
import { LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from "react-native";
import styles from "./Transaction.styles";
import colors from "../../../themes/colors";

export interface ICollapsView {
    title: string
    children: React.ReactNode
}

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const CollapsibleView: React.FC<ICollapsView> = ({ title, children }) => {
    const [isCollaps, setIsCollabs] = useState<boolean>(true)

    const handleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setIsCollabs(prev => !prev)
    }
    return (
        <View>
            <View style={styles.viewDetail}>
                <Text style={styles.textTitle}>{title}</Text>
                <TouchableOpacity onPress={handleExpand}>
                    <Text style={[styles.textTitle,{color:colors.oramge}]}>TUTUP</Text>
                </TouchableOpacity>
            </View>
            {isCollaps && <View>{children}</View>}
        </View>
    )

}

export default CollapsibleView;