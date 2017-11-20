import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };

        this.onInputChange = this.onInputChange.bind(this); // 컨텍스트와 바인딩
    }

    onInputChange(event){
        console.log(event.target.value)
        this.setState({ term : event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault();

        // we need to go and fetch weather data
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className='input-group'>
                <input
                    type="text"
                    placeholder="5일의 날씨를 확인할 도시"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
export default SearchBar;
