import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useReducer,
} from 'react';
import styled from 'styled-components';
import { reducer, initialState } from '../reducer';
const TestPageBlock = styled.div`
  max-width: 600px;
  padding: 1rem;
  box-shadow: 1px 1px 15px 15px rgb(0 0 0 / 20%);
  margin: 2rem;
  .select__container {
    border-radius: 6px;
    height: 40px;
    width: 120px;
    font-size: 18px;
    font-weight: 600;
    padding: 0.5rem;
    padding-right: 12px;
    border: none;
  }
`;

const useAppContext = createContext(null);

export default function TestPage() {
  const [values, setValues] = useState({
    isChecked: false,
  });
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    video: { videoObject },
  } = state;
  useEffect(() => {
    console.log('컴포넌트 마운트');
    const newNumber = number + 1;
    setNumber(newNumber);
    console.log('[useEffect]: ', number);
    console.log('[useEffect]: ', videoObject);

    return () => {
      console.log('컴포넌트 언마운트');
    };
  }, [videoObject]);

  const onHandleClick = (e) => {
    const { name, value } = e.target;
    console.log('name: ', name);
    console.log('value: ', value);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log('helloworld: ', e.target.checked);
    // setValues({});
  };
  console.log(values.isChecked);
  console.log('[inner function]: ', number);
  console.log('[main]: ', state);
  return (
    <useAppContext.Provider value={{ state, dispatch }}>
      <TestPageBlock>
        <select className="select__container" name="fruits" id="fruits">
          <option value="grape">포도</option>
          <option value="apple">애플</option>
          <option value="banana">바나나</option>
          <option value="strawberry">스트로베리</option>
        </select>
        <input type="checkbox" onChange={onHandleChange} name="checkbox" />
        <FirstChild />
        {!videoObject ? <div>비디오 없습니다</div> : <div>비디오 있습니다</div>}
      </TestPageBlock>
    </useAppContext.Provider>
  );
}

function FirstChild() {
  const { state, dispatch } = useContext(useAppContext);
  useEffect(() => {
    console.log('FirstChild 마운트');
    setTimeout(() => {
      dispatch({
        type: 'VIDEO_UPDATE',
        payload: 'video',
      });
    }, 5000);
    return () => {
      console.log('FirstChild 언마운트');
    };
  }, []);

  return <div>first child</div>;
}
