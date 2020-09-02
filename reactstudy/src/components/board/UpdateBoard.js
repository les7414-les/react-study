import React, {Component} from 'react';

export default class UpdateBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subject : this.props.selectedData.subject,
            content : this.props.selectedData.content
        }
    }

    

    render() {
        const data = this.props.selectedData;
        return (
            <div >
                <form name="fomeNm" method="post" onSubmit={(e) => {
                        e.preventDefault();
                        const data = {
                            key : e.target.key.value,
                            subject : e.target.subject.value,
                            content : e.target.content.value
                        }
                        this.props.onUpdateBoard(data);
                    }}> 
                    <input type="hidden" name="key" value={data.key} />
                    <p>제목 : <input type="text" name="subject" value={this.state.subject} onChange={
                        function(e){
                            this.setState({
                                subject : e.target.value
                            }) 
                        }.bind(this)
                    } /></p>
                    <p>내용 : <input type="text" name="content" value={this.state.content}  onChange={
                        function(e){
                            this.setState({
                                content : e.target.value
                            }) 
                        }.bind(this)
                    } /></p>
                    <input type="submit" value="저장" ></input>
                    <button onClick={() => {
                        this.props.onTypeChange('List')
                    }}>목록</button>
                </form>

            </div>
        );
    }


}