import React from 'react'
import { Button, Card ,Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import "./ItemCount.css"

class Counting extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {counter: 0}
    }

    substract(){
        this.setState({counter: this.state.counter - 1})
    }

    add(){
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <Card>
            <Card.Content>
            <h1>Count</h1>
            <h2>{this.state.counter}</h2>
            </Card.Content>
            <Card.Content extra>
            <div className='ui two buttons'>
                <Button onClick={this.add.bind(this)} basic color='green'>
                <Icon name='plus' color="green" />
                </Button>
                <Button onClick={this.substract.bind(this)} basic color='red'>
                <Icon name='minus' color="red" />
                </Button>
            </div>
            </Card.Content>
        </Card>
        )
    }
}

export default Counting