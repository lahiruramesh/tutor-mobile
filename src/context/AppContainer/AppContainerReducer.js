import React from 'react';
import useAppContext from './index';

export const initState = {
  alerts: [],
  loading: false,
};

export function initializeState(state) {
  return {
    alerts: state.alerts ?? [],
    loading: state.loading ?? false,
  };
}

export const ACTIONS = {
  SET_DATA: 'set_data',
  SET_LOADING_TRUE: 'set_loading_true',
  SET_LOADING_FALSE: 'set_loading_false',
};

export function AuthContainerReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {...state, ...action.payload};
    case ACTIONS.SET_LOADING_TRUE:
      return {...state, loading: true};
    case ACTIONS.SET_LOADING_FALSE:
      return {...state, loading: false};
    default:
      return state;
  }
}

export default function useAppContainerReducer() {
  const {state, dispatch} = useAppContext();

  const setLoadingTrue = () => dispatch({type: ACTIONS.SET_LOADING_TRUE});

  const setLoadingFalse = () => dispatch({type: ACTIONS.SET_LOADING_FALSE});

  return {
    state,
    methods: {
      setLoadingTrue,
      setLoadingFalse,
    },
  };
}
