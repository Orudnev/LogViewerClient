import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { Link } from 'react-router-dom';
import {Container, Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {CancelIcon}  from './icons';
import {PlusIcon}  from './icons';
import {RefreshIcon}  from './icons';
import DropdownList from './DropdownList';

const space10 = {
   width: "10px"
};

const columns = [
    {
        key:'Container',
        name:'Container',
        resizable: true,
        width:100
    },
    {
        key:'Item',
        name:'Item',
        resizable: true,
    },
];

class StorageMainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                containerFilter:null,
                itemFilter:"",
                dataGrid:null,
                newRowId:-1
        } 
    }

    componentDidMount(){
        console.log(this.props.CloudStore.LastAddedRow);
        this.props.requestRows(false);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.CloudStore.LastAddedRow)
        {
            this.scrollToRow(this.props.CloudStore.LastAddedRow.Id); 
        } 
    }

    handleRefreshButtonClick(){
        this.props.requestRows(true);
    }

    handleChangeFilter(e){
        var itemFilter = e.target.value;
        this.setState({itemFilter});
        var fltCriteria = {itemFilter,containerFilter:this.state.containerFilter}; 
        this.props.filterRows(fltCriteria);
    }

    handleClearFilterButtonClick()
    {
        var fltCriteria = "";
        this.setState({filterCriteria:fltCriteria});
        this.props.filterRows(fltCriteria);    
    }

    handleContainerFilterChange(container){

        this.setState({containerFilter:container});
        var fltCriteria = {itemFilter:this.state.itemFilter,containerFilter:container}; 
        this.props.filterRows(fltCriteria);        
    }

    scrollToRow(rowIndex) {
        console.log('scroll'+rowIndex);
        var top = this.dataGrid.getRowOffsetHeight() * rowIndex;
        var gridCanvas = this.dataGrid.getDataGridDOMNode().querySelector('.react-grid-Canvas');
        gridCanvas.scrollTop = top;
        this.dataGrid.selectCell({ rowIdx: rowIndex , idx: 1});
    }
 
    render() {
        if(this.props.CloudStore.Items != null && this.props.CloudStore.Items.length>0)
        {
            
            return(
                    <div>
                        <div className="btn-group" role="group" >
                            <Link to="/storecloud/addrow">
                                <Button type='button' >
                                    <PlusIcon />
                                </Button>
                            </Link>
                            <span style={space10}></span>
                            <Button type='button' onClick={(e) => this.handleRefreshButtonClick(e)}>
                                <RefreshIcon />
                            </Button>
                        </div>
                    
                        <div className="row" >
                            <div className="col-5">
                                <DropdownList containers={this.props.CloudStore.Containers} onItemSelected={(cont)=>this.handleContainerFilterChange(cont)} showAllElementsItem={true} />
                            </div>
                            <div className="col">
                                <InputGroup>
                                    <Button className="btn-sm" onClick={(e)=>this.handleClearFilterButtonClick()} disabled={!this.state.itemFilter} >
                                        <CancelIcon />   
                                    </Button>
                                    <span style={space10}></span>
                                    <FormControl placeholder="filter" aria-describedby="basic-addon1" onChange={(e)=>this.handleChangeFilter(e)} value={this.state.itemFilter} />
                                </InputGroup>
                            </div>    
                        </div>    

                        <ReactDataGrid 
                            columns={columns}
                            rowGetter={i=>this.props.CloudStore.Items[i]} 
                            rowsCount={this.props.CloudStore.Items.length}
                            minHeight={500}
                            ref={(g)=>this.dataGrid=g}
                        />
                    </div>
                );
        } else
        {
            return (<h2>Loading...</h2>);
        }
    }


}




export default StorageMainPage;