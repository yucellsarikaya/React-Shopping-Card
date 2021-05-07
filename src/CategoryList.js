import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class CategoryList extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        this.getCategories(); //apiden gelen verileri çeker
    }

    //fetch apiye ulasmaya yarayan fonk.
    getCategories = () => {
        fetch("http://localhost:3000/categories") // bir api calistir
            .then(response => response.json()) //apiden gelen(response) jsona dondur
            .then(data => this.setState({ categories: data })); //gelen veriyi state.categories verisi yapıyoruz
    }

    render() {
        return (
            <div>
                <p>{this.props.info.title} Component</p>
                <ListGroup >
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem
                                active={category.categoryName === this.props.currentCategory ? true : false} //tiklanilan butonu mavi yapar
                                onClick={() => this.props.changeCategory(category)}
                                key={category.id}
                            >
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        )
    }
}
