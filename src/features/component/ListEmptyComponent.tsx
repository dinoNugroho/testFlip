import { Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export interface IListEmpty {
    message: string
}

const ListEmptyData: React.FC<IListEmpty> = ({ message }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Icon
                name="wallet"
                style={{
                    fontSize: 70,
                    color: "#999",
                    marginBottom: 10,
                }}
            />
            <Text style={{ fontSize: 17, color: "Black" }}>{message}</Text>
        </View>
    )
}

export default ListEmptyData;