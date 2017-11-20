import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };

        this.onInputChange = this.onInputChange.bind(this); // 컨텍스트와 바인딩
        this.onFormSubmit = this.onFormSubmit.bind(this); // 컨텍스트와 바인딩
    }

    onInputChange(event){
        this.setState({ term : event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();

        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term : '' });
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);