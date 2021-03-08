import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ListItem} from 'native-base';
import {_} from 'lodash';

import generalStyles from '../../generalStyles';

const itemListing = [
  {id: '1', name: 'Item!'},
  {id: '2', name: 'Item@'},
];

const ItemList = props => {
  const flatListRef = useRef(null);

  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const [clientData, setClientData] = useState([]);
  const [serverData, serverDataLoaded] = useState([]);
  const [pending_process, setPending_process] = useState(true);
  const [loadmore, setLoadmore] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const ApiRequest = async thePage => {
    await setTimeout(() => {}, 1500);
    return itemList.slice((thePage - 1) * limit, thePage * limit);
  };

  const requestToServer = async thePage => {
    let data = await ApiRequest(thePage);
    console.log('data', data);
    serverDataLoaded(data);
  };

  useEffect(() => {
    console.log('requestToServer');
    requestToServer(page);
  }, []);

  useEffect(() => {
    console.log('obtained serverData', serverData);
    if (serverData.length > 0) {
      setRefresh(false);
      setClientData([...clientData, ...serverData]);
      setLoadmore(serverData.length == limit ? true : false);
      setPending_process(false);
    } else {
      setLoadmore(false);
    }
  }, [serverData]);

  useEffect(() => {
    console.log('load more with page', page);
    if (serverData.length == limit || page == 1) {
      setPending_process(true);
      requestToServer(page);
    }
  }, [page]);

  const handleLoadMore = () => {
    console.log('loadmore', loadmore);
    console.log('pending_process', pending_process);
    if (loadmore && !pending_process) {
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    setClientData([]);
    setPage(1);
    setRefresh(true);
    setPending_process(false);
  };

  const renderRow = ({item}) => {
    return (
      <ListItem>
        <Text style={{color: 'red'}}>{item.name}</Text>
      </ListItem>
    );
  };

  return (
    <View style={[generalStyles.container, generalStyles.bg_white]}>
      <FlatList
        ref={flatListRef}
        refreshing={refresh}
        data={clientData}
        renderItem={renderRow}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        onRefresh={() => onRefresh()}
      />
    </View>
  );
};

export default ItemListing;