import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {

  const renderMenuItem = ({item, index}) => {
    return(
      <ListItem
        leftAvatar
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        onPress={() => props.onPress(item.id)}
        avatar={{ source: require('./images/elaicheesecake.png')}}
      />
    )
  }

  return(
    <FlatList style={{marginTop: 50}}
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={item => item.id.toString()}
    />
  );

}

export default Menu;
