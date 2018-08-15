import React, { Component } from 'react';
import { FlatList, ScrollView, View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
  return {
    leaders: state.leaders
  }
}

class About extends Component {

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
        avatar={{ uri: baseUrl + leader.image }}
      />
    )
  }

  renderLeaders() {
    return (
      <Card title='Corporate Leadership'>
        {this.props.leaders.leaders.map((leader) => this.renderLeader(leader))}
      </Card>
    )
  }

  render() {

    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          {this.renderHistory()}
          <Card
            title='Corporate Leadership'>
            <Loading />
          </Card>
        </ScrollView>
      )
    }
    else if (this.props.leaders.errMess) {
      return (
        <ScrollView>
          {this.renderHistory()}
          <Card
            title='Corporate Leadership'>
            <Text>{this.props.leaders.errMess}</Text>
          </Card>
        </ScrollView>
      )
    }
    
    return (
      <ScrollView>
        {this.renderHistory()}
        {this.renderLeaders()}
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(About);
