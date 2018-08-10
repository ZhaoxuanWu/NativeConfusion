import React, { Component } from 'react';
import { FlatList, ScrollView, View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    }
  }

  static navigationOptions = {
    title: 'About Us'
  }

  renderHistory() {
    return (
      <Card title='Our Histroy'>
        <Text style={{margin: 10}}>
        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
        The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world&#39;s best cuisines in a pan.
        </Text>
      </Card>
    )
  }

  renderLeader(leader) {
    return (
      <ListItem
        leftAvatar
        key={leader.id}
        title={leader.name}
        subtitle={leader.description}
        subtitleNumberOfLines={0}
        hideChevron={true}
        avatar={require('./images/alberto.png')}
      />
    )
  }

  renderLeaders() {
    return (
      <Card title='Corporate Leadership'>
        {this.state.leaders.map((leader) => this.renderLeader(leader))}
      </Card>
    )
  }

  render() {
    return (
      <ScrollView>
        {this.renderHistory()}
        {this.renderLeaders()}
      </ScrollView>
    )
  }
}

export default About;
