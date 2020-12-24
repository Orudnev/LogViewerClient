import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class StorageMainPage extends React.Component{
    constructor(props){
        super(props); 
    }

    componentDidMount(){
        //axios.get("https://script.google.com/macros/s/AKfycbyjRdA18bzdVoNSkQyeu-mbE3CfM83Qng48ynNGziMEzINAe2I/exec?method=getAllRows")
        //.then(response=>response.data.result)
        //.then(allRows=>this.setState({rows:allRows}));
        this.props.requestRows(false);
    }

    renderTableData(){
            return this.props.Items.map((row,index) => {
                let {Container,Item} = row;
                return(
                    <tr key={index}>
                        <td>{Container}</td>
                        <td>{Item}</td>
                    </tr>);
            });
    }

    handleRefreshButtonClick(){
        this.props.requestRows(true);
    }
 
    render() {
        console.log('render');
        if(this.props.Items != null)
        {
            return(
                    <div>
                    <Link to="/storecloud/editrow">
                        <button type='button'  >
                            Edit
                        </button>
                    </Link>
                    <button type='button' onClick={(e) => this.handleRefreshButtonClick(e)}>
                        Refresh
                    </button>
                    <table id='tblItems'>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    </div>
                );
        } else
        {
            return (<h2>Loading...</h2>);
        }
    }


}




export default StorageMainPage;