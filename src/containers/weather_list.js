import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
    renderWeather(cityData){
        console.log(cityData);

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);

        return  (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines data={temps} width={120} height={180}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    // const weather = state.weather; // 위의 { weather }과 같은 기능
    /*return { weather : state.weather }
    return { weather : weather } 리펙토링 과정 -> 최종 하단*/
    return { weather };  // { weather === { weather : weather } } 과 동일
}

export default connect(mapStateToProps)(WeatherList); // connect 버전으로 내보냄