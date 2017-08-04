import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  getCurrentLocation,
  getInputData,
  toggleSearchResult
} from '../modules/home';

const mapStateToProps = (state) => ({
  region: state.home.region,
  inputData: state.home.inputData || {},
  resultTypes: state.home.resultTypes || {},
});

const mapActionCreators = {
  getCurrentLocation,
  getInputData,
  toggleSearchResult
};

export default connect(mapStateToProps, mapActionCreators)(Home);
