import {FlatList, View} from 'react-native';
import {Appbar, Divider} from "react-native-paper";
import Colors from "@/constants/Colors";
import {router} from "expo-router";
import {Styles} from "@/app/index/index.style";
import React, {useState} from "react";
import {getAllAnimals} from "@/components/post/simple-post.model";
import {Post} from "@/components/post/post";

export default function PostsScreen() {
    const [items] = useState([]);  // Lista de itens
    items.push(...getAllAnimals())

    const renderItem = ({item}) => (
        <View>
            <Post simplePost={item} onPress={() => router.push({pathname: '/detail', params: item.id})}></Post>
            <Divider/>
        </View>
    );

  return (
    <View style={Styles.container}>
        <Appbar.Header style={Styles.container}>
            <Appbar.Content color={Colors.dark.text} title="Ado PET ions" />
            <Appbar.Action icon={"menu"} color={Colors.dark.text} onPress={() => router.navigate('/account')} animated={true}/>
        </Appbar.Header>
      <Divider/>
        <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollToOverflowEnabled={true}
        />
    </View>
  );
}
