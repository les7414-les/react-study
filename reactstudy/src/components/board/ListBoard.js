import React, {Component} from 'react';

export default class ListBoard extends Component {
    
    setData(data) {
        const arrDiv = [];
        for(let i=0; i<data.length; i++) {
            arrDiv.push(<p key={data[i].key}><a href='.' onClick={(e) => {
                e.preventDefault();
                this.props.onBoardChoice('Read', data[i]);
            }}>순번{i+1}제목{data[i].subject}<br/></a></p>)
        }
        return arrDiv;
    }

    render() {
        let data = this.props.data;
        
        let arrDiv = this.setData(data);

        return (
            <div >
                <button onClick={ () => {
                    this.props.onTypeChange('Create');
                }} >Create</button>
                {arrDiv}
            </div>
        );
    }


}