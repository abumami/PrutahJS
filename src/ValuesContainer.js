import React from 'react';
import styles from './styles';
import ValuesTable from './ValuesTable.js';

// No reason for such a trivial component, except for the fact that Amir told
// me to do this in order to help me learn React. I do what Amir says since
// he's younger, smarter, and better looking.
const Title = () => 
    <h3>Current values of a prutah</h3>;

const Icon = () => 
    <div><img src='./images/prutah.png'/></div>;

var ValueContainer = React.createClass({
    render: function() {
        return  <div style={styles.center}>
                <Icon/>
                <Title>title</Title>
                <ValuesTable />
                </div>;
    }
});

module.exports = ValueContainer;