import React, {Component} from 'react';

export default class ReadBoard extends Component {
    
    render() {
        const data = this.props.selectedData;
        return (
            <div >
                <button onClick={ () => {
                    this.props.onTypeChange('Update');
                } } >Update</button>
                <button onClick={ () => {
                    this.props.onTypeChange('List');
                } } >list</button>
                <button onClick={ () => {
                    this.props.onDeleteBoard(data.key);
                } } >delete</button>
                
                <p>순번 {data.key} 제목 {data.subject}</p>
                <p>내용 {data.content}</p>
                <p>등록자 {data.register} 수정자 {data.updater} </p>
            </div>
        );
    }


}