import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                'name':'Max',
                'job':'Dog'
            },
            {
                'name':'Gobi',
                'job':'Dog'
            },
            {
                'name':'Bear',
                'job':'Cat'
            }
        ];

        return (
            <div className="container">
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App;