import {Avatar, Card, Divider} from "react-native-paper";
import {Styles} from "@/components/post/post.style";

export function Post({simplePost, onPress}) {
    return (
        <Card style={Styles.container} onPress={onPress}>
            <Card.Title
                left={(props) => <Avatar.Icon {...props} icon={simplePost.type} style={Styles.container}/>}
                title={simplePost.name}
                titleStyle={Styles.title}
                subtitle={simplePost.simpleAbout}
                subtitleStyle={Styles.title}
            />
            <Divider/>
            <Card.Cover  source={{ uri: simplePost.imagesPaths[0] }} style={Styles.image}/>
        </Card>
    )
}
