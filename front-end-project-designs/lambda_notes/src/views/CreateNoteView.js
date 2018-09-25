import React from 'react';
import {connect} from 'react-redux';
import CreateNote from '../components/CreateNote';
import { addNewNote, updateAvenger } from '../store/actions';

class CreateNoteView extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note:{
                title: "",
                textBody: "",
            },
            isUpdate: false
        }
    }

    // componentDidMount() {
    //     console.log(this.props);
    //     if (this.props.noteToUpdate) {
    //       this.setState({ isUpdating: true, note: this.props.noteToUpdate });
    //     }
    //   }

    handleInput = event =>{
        event.preventDefault();
        this.setState({ ...this.state,
                        note:{...this.state.note, [event.target.name]: event.target.value}});

    }

    handleAddNewNote = event => {
        event.preventDefault();
        // console.log(this.state.note);
        this.props.addNewNote(this.state.note,this.props.history);
    }

    // handleUpdateNote = () => {
    //   this.props.updateNote(this.state.note);
    //   this.props.history.push('/');
    // }

    render(){
        return (
            <div className="create-view-container">
                <CreateNote {...this.props}
                            note={this.state.note}
                            isUpdate={this.state.isUpdate}
                            handleInput={this.handleInput}
                            handleAddNewNote={this.handleAddNewNote}
                            // handleUpdateNote={this.handleUpdateNote}
                            />  
                {/* {this.props.history.push('/')} */}
            </div>
    )}      
}

const mapStateToProps = state => ({
    
});

export default connect( mapStateToProps,
                        {addNewNote //,updateAvenger
                        })(CreateNoteView);