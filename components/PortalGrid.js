import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { PortalData } from "../supporting_files/Data";
import PortalCard from "./PortalCard";
import TouchableScale from "react-native-touchable-scale";

const PortalGrid = props => {
  const { navigate } = props.navigation;

  function navigator(p) {
    navigate(p);
  }

  return (
    <FlatGrid
      showsHorizontalScrollIndicator={false}
      itemDimension={110}
      items={PortalData}
      style={styles.gridView}
      horizontal={true}
      staticDimension={400}
      fixed
      spacing={10}
      renderItem={({ item, index }) => (
        <TouchableScale
          activeScale={0.9}
          tension={0.5}
          onPress={() => navigator(item.navigator)}
          key={index}
        >
          <PortalCard code={item.code} name={item.name} image={item.image} />
        </TouchableScale>
      )}
    />
  );
};

export default PortalGrid;

const styles = StyleSheet.create({
  gridView: {
    marginTop: -40,
    flex: 1,
    height: 450
  }
});
