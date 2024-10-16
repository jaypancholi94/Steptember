export const TABS = { STEPS: 'steps', DASHBOARD: 'dashboard' };
export const STEP_ERROR_INIT_VALUE = { date: false, step: false };
export const USER_ERROR_INIT_VALUE = { name: false, weight: false };

export const INITIAL_USER_STATE = { name: '', weight: 0 };
export const INITIAL_STEP_STATE = {
  data: [],
  total: 0,
};

export const AVERAGE_STEP_LENGTH = 0.75; // average step length is 0.75m

export const LOCAL_STORAGE_USER_KEY = 'user';
export const LOCAL_STORAGE_STEP_KEY = 'step-data';
