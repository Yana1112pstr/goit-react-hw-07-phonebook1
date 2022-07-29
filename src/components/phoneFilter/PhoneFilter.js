import MyInput from "components/UI/input/MyInput";
import React from "react";
import  { changeFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from "react-redux";

const PhoneFilter = () => {

  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  
  return (
    <form>
      <MyInput
        placeholder="search..."
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </form>
  );
};

export default PhoneFilter;
