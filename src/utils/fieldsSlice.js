import { createSlice } from '@reduxjs/toolkit';

const fieldsSlice = createSlice({
  name: 'fields',
   initialState : {
    types: []
  },  
  
  reducers: {
    addNewType: (state, action)=> {       
      state.types.push(action.payload);  
    },
    addDynamicField: (state, action) => {
      const { typeId, value } = action.payload;
      const type = state.types.find((type) => type.typeId === typeId);    
      if (type) {
        type.data.dynamicFields.push({ name: '', type: value });
      }
    },
    
    updateStaticFieldType:(state,action)=>{
      const {typeId, fieldName , targetValue} = action.payload;
      const type = state.types.find((type)=>type.typeId==typeId);      
      if(type){
        const staticField = type.data.staticFields.find(field => field.name === fieldName);
        if (staticField) {
          staticField.value = targetValue;
        }

      }
    },
    updateDynamicFieldType:(state,action)=>{
     const {typeId, index, key, targetValue} = action.payload;
     const type = state.types.find((type)=>type.typeId==typeId);
      if(type){
        if(key=="name"){
          const dynamicField = type.data.dynamicFields[index];
          dynamicField.name= targetValue
        }
        if(key=="type"){
          const dynamicField = type.data.dynamicFields[index];
          dynamicField.type= targetValue
        }
      }
    },
    addItemToType:(state,action)=>{
      const { typeId, item } = action.payload;
      console.log(action.payload);
      
      const type = Array.isArray(state.types) ? state.types.find((t) => t.typeId === Number(typeId)) : undefined;
      if (type) {
        if (!type.items) type.items = [];
        type.items.push(item);
        
      } else {
        console.error(`Type with typeId ${typeId} not found`);
      }     
    },
    updateItemValue: (state, action) => {
      const { itemId, fieldName, value, typeId } = action.payload;
      const type = Array.isArray(state.types) ? state.types.find((t) => t.typeId === Number(typeId)) : undefined;
      
      if (type) {
        const item = type.items.find((item) => item.itemId === itemId);        
        if (item) {
          item[fieldName] = value;
        } else {
          console.error(`Item with itemId ${itemId} not found in type ${typeId}`);
        }
      } else {
        console.error(`Type with typeId ${typeId} not found`);
      }
    }    
  }
});
export const {  addNewType ,addDynamicField, updateStaticFieldType , updateDynamicFieldType,addItemToType,updateItemValue } = fieldsSlice.actions;

export default fieldsSlice.reducer;
