import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { PortalData } from "../supporting_files/Data";
import PortalCard from "./PortalCard";

const PortalGrid = props => (
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
      <PortalCard code={item.code} name={item.name} image={item.image} />
    )}
  />
);

export default PortalGrid;

const styles = StyleSheet.create({
  gridView: {
    marginTop: -40,
    flex: 1,
    height: 450
  }
});
