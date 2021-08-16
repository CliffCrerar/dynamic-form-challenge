
import './App.css';
import React from 'react';


const exampleOption = {
    value: '',
    lable: ''
}

function SelectOptions({value,label}) {
    return optionEnumeration.map((option,idx)=>{
        return (
            <option key={'option' + idx} value={value}>{label}</option>
        )
    })
}


class Selectinput extends React.Component {

    constructor(){
        this.setState({})

        console.log(this.state);
    }

    render() {
        return (<div >
            {FormData.map((FormDetail, index) => {
                return <select id="input5">
                    <SelectOptions optionData={}/>
                </select>
            })}
        </div>);
    }
} export default Selectinput;

