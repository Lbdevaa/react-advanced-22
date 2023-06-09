import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { githubActions } from '../store/github/github.slice';

const actions = {
  ...githubActions,
};

// для удобной работы с actions
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
