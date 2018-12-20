import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Max</td>
                <td>Dog</td>
            </tr>
            <tr>
                <td>Gobi</td>
                <td>Dog</td>
            </tr>
            <tr>
                <td>Bear</td>
                <td>Cat</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }

}

export default Table;