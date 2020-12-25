import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {CancelIcon}  from './icons';
import {PlusIcon}  from './icons';
import {PencilIcon}  from './icons';
import {RefreshIcon}  from './icons';

const space10 = {
   width: "10px"
};

class StorageMainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filtertCriteria:""
        } 
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

    handleChangeFilter(e)
    {
        var fltCriteria = e.target.value;
        this.setState({filterCriteria:fltCriteria});
        this.props.filterRows(fltCriteria);
    }

    handleClearFilterButtonClick()
    {
        var fltCriteria = "";
        this.setState({filterCriteria:fltCriteria});
        this.props.filterRows(fltCriteria);    
    }
 
    render() {
        if(this.props.Items != null)
        {
            return(
                    <div>
                    <div className="btn-group" role="group" >
                        <Link to="/storecloud/editrow">
                            <Button type='button' >
                                <PlusIcon />
                            </Button>
                        </Link>
                        <span style={space10}></span>
                        <Button type='button' onClick={(e) => this.handleRefreshButtonClick(e)}>
                            <RefreshIcon />
                        </Button>
                    </div>
                    <Table id='tblItems' striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th key="0">Контейнер</th>
                                <th key="1">
                                    <InputGroup>
                                        <Button className="btn-sm btn-danger" onClick={(e)=>this.handleClearFilterButtonClick()} disabled={!this.state.filterCriteria} >
                                            <CancelIcon />   
                                        </Button>
                                        <span style={space10}></span>
                                        <FormControl placeholder="filter" aria-describedby="basic-addon1" onChange={(e)=>this.handleChangeFilter(e)} value={this.state.filterCriteria} />
                                    </InputGroup>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </Table>
                    </div>
                );
        } else
        {
            return (<h2>Loading...</h2>);
        }
    }


}




export default StorageMainPage;