import React from 'react';
import axios from 'axios';

class StorageMainPage extends React.Component{
    constructor(props){
        super(props); 
    }

    componentDidMount(){
        //axios.get("https://script.google.com/macros/s/AKfycbyjRdA18bzdVoNSkQyeu-mbE3CfM83Qng48ynNGziMEzINAe2I/exec?method=getAllRows")
        //.then(response=>response.data.result)
        //.then(allRows=>this.setState({rows:allRows}));
        this.props.requestRows(true);
    }

    renderTableData(){
        console.log('renderTableData');
        return this.props.Items.map((row,index) => {
            let {Container,Item} = row;
            return(
                <tr key={index}>
                    <td>{Container}</td>
                    <td>{Item}</td>
                </tr>);
        });
    }

    render() {
        console.log('render');
        return(
                <div>
                  <h1>All Rows</h1>
                  <table id='tblItems'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                  </table>
                </div>
              );
    }


}




export default StorageMainPage;