import React, { Component } from 'react'
import Note from './Note'

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [
				{
					id: 0,
					note: "Call Lisa"
				},
				{
					id: 1,
					note: "Email John"
				},
				{
					id: 2,
					note: "Order printer ink"
				}
			]
		}
		this.eachNote = this.eachNote.bind(this)
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
	}

	update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

	remove(id) {
		console.log('removing item at', id)
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id !== id)
		}))
	}

	eachNote(note, i) {
		return (
			<Note key={i}
				  index={i}
				  onChange={this.update}
				  onRemove={this.remove}>
				  {note.note}
		    </Note>
		)
	}

	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
			</div>
		)
	}
}

export default Board