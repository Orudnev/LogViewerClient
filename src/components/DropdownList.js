import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const allItemsCaption = "Все элементы";

class DropDownList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex:0,
            selectedItemStr:allItemsCaption
        } 
    }

    componentDidMount(){
        //this.props.requestRows(false);
        
    }

    renderDropDownItems()
    {
        return this.props.containers.map((row,index) => {
            return(
            <Dropdown.Item eventKey={index+1}>{row}</Dropdown.Item>)
        });
    }

    onItemSelected(index)
    {
        if(this.state.selectedIndex == index){
            return;
        }
        if(index==0)
        {
            this.setState({selectedIndex:0,selectedItemStr:allItemsCaption});
            this.props.onItemSelected(null);
            return;       
        }
        var selectedItem = this.props.containers[index-1];
        this.setState({selectedIndex:index,selectedItemStr:selectedItem});
        this.props.onItemSelected(selectedItem);
    }

    render()
    {
        return (
        <DropdownButton
        title= {this.state.selectedItemStr}
        onSelect = {(index)=>this.onItemSelected(index)}
        >
            <Dropdown.Item eventKey="0">{allItemsCaption}</Dropdown.Item>
            {this.renderDropDownItems()}
        </DropdownButton>
        );
    }
/*
            <a key={index} className="dropdown-item" href="#" onClick={(e)=>console.log('e.target')}>{row}</a>

    render()
    {
        const allItemsCaption = "Все элементы";
        return (
        <div className="dropdown" >    
            <button className="btn btn-light dropdown-toggle border"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"                    
                    aria-haspopup="true" aria-expanded="false">         
                {allItemsCaption}                       
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                    {this.renderDropDownItems()}
                </div>
            </button>
        </div>
        );
    }
                    <a className="dropdown-item" href="#">{allItemsCaption}</a>
*/

}
export default DropDownList;