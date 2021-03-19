import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Body: {
    flex: 1,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  end: {
    alignItems: "flex-end",
    marginVertical: 10,
    marginHorizontal: 16,
  },
  img: {
    height: 200,
    marginHorizontal: 10,
  },
  //boton del medio
  buttonCenter: {
    marginVertical: 7,
  },
  //notas
  itemtop: {
    backgroundColor: "#ffd700",
    width: 6,
    marginVertical: 0,
    marginEnd: 10,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "khaki",
    padding: 0,
    marginVertical: 3,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 32,
  },
  categoryText: {
    fontSize: 30,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  listTitle: {
    fontSize: 25,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    marginLeft: 6,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  ContainerView: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#eee",
    borderColor: "#eee",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    alignItems: "center",
  },
  myLists: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default styles;
