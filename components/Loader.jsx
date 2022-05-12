import { View, Image } from 'react-native';
import LoaderGif from '../assets/pong.gif';

export default function Loader() {
    return (
        <View>
            <Image source={LoaderGif}/>
        </View>
    )
}