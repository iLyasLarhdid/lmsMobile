import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LeftBtn = ({iconUrl,dimension, handlePress})=>{
    return(
        <TouchableOpacity onPress={()=>console.log("clicked")}> 
            <Icon name="arrow-left" size={10} color="#000000" />
        </TouchableOpacity>
    );
}

export default LeftBtn;