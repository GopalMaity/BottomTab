import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';

const Home = ({ navigation }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View styles={{ flex: 1 }}>
            <List.Accordion
                title="Drawer Navigation"
                left={props => <List.Icon {...props} icon="folder" />}>
                <List.Item title="Tab1" onPress= {() => navigate('Tab1')} />
                <List.Item title="Tab2" onPress= {() => navigate('Tab2')}/>
                <List.Item title="Tab3" onPress= {() => navigate('Tab3')}/>
            </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({})
export default Home