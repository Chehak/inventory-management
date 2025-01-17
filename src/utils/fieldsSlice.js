import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staticFields: {
    objectType: '',
    objectTitle: '',
  },
  dynamicFields: [],
};

const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    setStaticField(state, action) {
      const { name, value } = action.payload;
      state.staticFields[name] = value;
    },
    addDynamicField(state, action) {
      state.dynamicFields.push({ value: '', type: action.payload });
    },
    updateDynamicField(state, action) {
      const { index, key, value } = action.payload;
      state.dynamicFields[index][key] = value;
    },
    removeDynamicField(state, action) {
      state.dynamicFields.splice(action.payload, 1);
    },
  },
});

export const {
  setStaticField,
  addDynamicField,
  updateDynamicField,
  removeDynamicField,
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
