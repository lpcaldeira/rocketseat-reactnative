import React, { Component } from 'react'
import { View, Text } from 'react-native'
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

    render() {
        return (
            <View>
                <Text>Página Main</Text>
                {this.state.products.map(product => (
                    <Text key={product._id}>{product.title}</Text>
                ))}
            </View>
        )
    }
}