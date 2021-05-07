import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = { userName: "", city: "" }
    onChangeHandler = (event) => {
        //this.setState({ userName: event.target.value }) //inputtan okunan deger event parametresi ile gelir, gelen paratmerinin inputtan okunan deger username aktarilir
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value })
    }
    onSubmitHandler = (event) => {
        event.preventDefault(); //sayfa yenilenice bilgiler rest oluyor falseyi, true yapmak lazim onun icin event.preventDefault(); yazilidi
        alert(this.state.userName)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3> {/*namenin icindeki state de ki ile ayni olmak zorund*/}
                    <input name="userName" onChange={this.onChangeHandler} type="text"></input> {/*onCahange input da degisim oldukca calisan komut*/}
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City Name</h3>
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    <h3>City Name is {this.state.city}</h3>

                    <input type="submit" value="save"></input>
                </form>
            </div>
        )
    }
}
