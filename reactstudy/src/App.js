import React, { Component } from 'react';
import ListBoard from './components/board/ListBoard';
import CreateBoard from './components/board/CreateBoard';
import ReadBoard from './components/board/ReadBoard';
import UpdateBoard from './components/board/UpdateBoard';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedKey : -1,
      maxKey : 5,
      type : 'List',
      userNm: '',
      contents : [
        {key: 1, subject : "111", content : "1111", register : "등록자", updater : "수정자"},
        {key: 2, subject : "222", content : "2222", register : "등록자", updater : "수정자"},
        {key: 3, subject : "333", content : "3333", register : "등록자", updater : "수정자"},
        {key: 4, subject : "444", content : "4444", register : "등록자", updater : "수정자"},
        {key: 5, subject : "555", content : "5555", register : "등록자", updater : "수정자"},
      ],
      selectedData : {}
    };

    // const userNm = prompt('이름을 입력해주세요');
    // this.state.userNm = userNm;

    this.typechange = this.typechange.bind(this);
    this.boardChoice = this.boardChoice.bind(this);
    this.creatBoard = this.creatBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  typechange(type) {
    this.setState(
      {
        type : type
      }
    );
  }


  boardChoice(type, selectedData) {
    this.setState(
      {
        type : type,
        selectedData : selectedData,
        selectedKey : selectedData.key
      }
    );
  }

  creatBoard(content) {
    const contents = this.state.contents.concat(content);
    

    this.setState({
      selectedKey : -1,
      maxKey : content.key,
      type : 'List',
      contents : contents
    });
  }

  updateBoard(content) {
    const contents = Array.from(this.state.contents);
    debugger;
    for(let i=0; i<contents.length; i++) {
      if(content.key == contents[i].key){
        contents[i] = content;
        break;
      }
    }
    this.setState({
      selectedKey : -1,
      type : "List",
      contents : contents
    });

  }

  deleteBoard(key) {
    let contents = Array.from(this.state.contents);
    debugger;
    for(let i=0; i<contents.length; i++) {
      if(key == contents[i].key){
        contents.splice(i, 1);
        break;
      }
    }
    this.setState({
      type : "List",
      selectedKey : -1,
      contents : contents
    });
  }


  
  render() {

    const listDiv = <ListBoard data={this.state.contents} onTypeChange={this.typechange} onBoardChoice={this.boardChoice} />; 
    const CreateDiv = <CreateBoard maxKey={this.state.maxKey} onTypeChange={this.typechange} onCreatBoard={this.creatBoard} />; 
    const ReadDiv = <ReadBoard selectedData={this.state.selectedData} onTypeChange={this.typechange} onDeleteBoard={this.deleteBoard} />; 
    const UpdateDiv = <UpdateBoard selectedData={this.state.selectedData} onTypeChange={this.typechange} onUpdateBoard={this.updateBoard} />; 

    let mainDiv = listDiv;
    if(this.state.type === 'List') {
      mainDiv = listDiv;
    } else if(this.state.type === 'Create') {
      mainDiv = CreateDiv;
    } else if(this.state.type === 'Read') {
      mainDiv = ReadDiv;
    } else if(this.state.type === 'Update') {
      mainDiv = UpdateDiv;
    }
     
    

    return (
      <div className="App">
        <h3>State {this.state.type}{this.state.userNm} 님 환영합니다.</h3>
        {mainDiv}
      </div>
      
    );
  }
}



export default App;
