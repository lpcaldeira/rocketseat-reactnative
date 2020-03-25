import React, { Component } from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import api from '../services/api'

export default class Main extends Component {
    static navigationOptions = {
        title: "Rocketseat React-Native"
    }

    state = {
        products: [],
        counter: 0
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get(`/products`);
        const { docs } = response.data
        this.setState({
            products: docs,
            counter: docs.length
        })
    }

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity
                onPress={() => { }}>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.products}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}