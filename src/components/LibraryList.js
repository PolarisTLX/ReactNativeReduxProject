import React, { Component } from 'react';
// import { ListView } from 'react-native';  //DEPRECATED
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  
  // componentWillMount() {
  //   const ds = new FlatList.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  
  //   this.dataSource = ds.cloneWithRows(this.props.libraries);
  // }
  
  // renderRow(library) {
  //   return <ListItem library={library} />;
  // }
  
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);
    return (
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      // />
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);