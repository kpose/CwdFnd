import {StyleSheet, Dimensions, Platform} from 'react-native';
import {hp} from '~utils';
const G_WIN_WIDTH = Dimensions.get('window').width;
const HEAD_HEIGHT = hp(73);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  tabbarStyle: {
    height: 60,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: 'red',
  },
  tabbarBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarImage: {
    width: 15,
    height: 15,
  },
  tabviewLayout: {
    width: G_WIN_WIDTH,
  },
  headerStyle: {
    //backgroundColor: '#fff',
    width: '100%',
    height: HEAD_HEIGHT,
  },
  titleStyle: {
    color: '#333',
    fontSize: 15,
  },
  detailStyle: {
    color: '#888',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#4D4D4D',
    fontSize: 15,
  },
  flatItem: {
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionItem: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
  },
  carouselImage: {
    width: '100%',
    height: 200,
  },
  headerTitle: {
    fontSize: 18,
  },
  addHeaderTitle: {
    color: 'red',
    fontSize: 18,
  },
  subTitle: {
    color: '#848484',
    fontSize: 15,
    marginTop: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontFamily: '',
      },
    }),
  },
});

export default styles;
