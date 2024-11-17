import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Transaction.styles";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../../themes/colors";


export interface IHeaderSearch {
    value: string
    onsearch: (text: string) => void
}

const SearchComponent: React.FC<IHeaderSearch> = ({ value, onsearch }) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name="search-outline" style={{ color: colors.gray, fontSize: 23 }} />
            <TextInput
                placeholder="Cari nama bank atau nominal"
                value={value}
                onChangeText={onsearch}
            />

        </View>
    )
}

export default SearchComponent;