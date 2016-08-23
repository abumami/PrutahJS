import React from 'react';
import ValueRow from './ValueRow';

var currencies = 
[
	{
		currency: "ILS",
        symbol: "₪",
		flag: "IL"
	},
	{
		currency: "USD",
        symbol: "$",
		flag: "US"
	},
	{
		currency: "GBP",
        symbol: "£",
		flag: "GB"
	},
	{
		currency: "EUR",
        symbol: "€",
		flag: "EU"
	},
    {
		currency: "CAD",
        symbol: "$",
		flag: "CA"
	}
];

var ValueTable = React.createClass({
    render: function() {
        return  <table className="ValuesDisplayTable">
                <tbody>
                    {currencies.map(function(row, i) {
                        return (
                            <ValueRow key={i} currency={currencies[i]} />
                        );
                    })}
                </tbody>
                </table>;
    }
});

module.exports = ValueTable;