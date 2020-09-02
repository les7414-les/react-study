import React, {Component} from 'react';

export default class CreateBoard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div >
                <form name="fomeNm" method="post" onSubmit={(e) => {
                        e.preventDefault();
                        const data = {
                            key : this.props.maxKey  + 1,
                            subject : e.target.subject.value,
                            content : e.target.content.value
                        }
                        this.props.onCreatBoard(data);
                    }}> 
                    <p>제목 : <input type="text" name="subject" /></p>
                    <p>내용 : <input type="text" name="content" /></p>
                    <input type="submit" value="저장" ></input>
                    <button onClick={() => {
                        this.props.onTypeChange('List')
                    }}>목록</button>
                </form>
                
                

            </div>
        );
    }


}