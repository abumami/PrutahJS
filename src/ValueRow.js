import React from 'react';
import fxHelpers from './utils/fxHelpers';

const Direction = ({val = 0}) => {
    switch(val) {
        case 0:
            return <td> </td> 
        case -1:
            return <td style={{ color: "red" }}>{"\u25bc"}</td> 
        case 1:
            return <td style={{ color: "green" }}>{"\u25b2"}</td>
        default:
            break;
    }
}

const Value = ({val, symbol}) => val === -1 ?
    <td><img src={'./images/loading.gif'} alt={'loading'} /></td> :
    <td>{symbol + val}</td>;

var ValueRow = React.createClass({

    getInitialState: function () {
        return {
            value: -1,
            dir: 0
        }
    },
    componentDidMount: function () {
        this.interval = setInterval(this.tick, 5000);
    },
   
    tick: function () {
        var pair = 'XAG' + this.props.currency.currency;
        fxHelpers.getRate(pair)
            .then(function (result) {
/*
    // FOR TESTING
                var max = 10;
                var min = 0;
                var rnd = (Math.floor(Math.random() * (max - min + 1)) + min) / 1000;
                result += rnd;
                result = Math.ceil(result * 1000) / 1000;
                console.log(result);
*/
                var prev = this.state.value;
                var dir;
                if(result === prev || prev === -1)
                    dir = 0;
                else if(result > prev)
                    dir = 1;
                else if(result < prev)
                    dir = -1;
                this.setState({
                    dir: dir,
                    value: result
                })
            }.bind(this))          
    },
    render: function() {
        return  <tr>
                    <td><img src={'./images/' + this.props.currency.flag + '.png'} alt={''}/></td>
                    <Value val={this.state.value} symbol={this.props.currency.symbol} />
                    <td>{this.props.currency.currency}</td>
                    <Direction val={this.state.dir} />
                </tr>
    }
});

module.exports = ValueRow;