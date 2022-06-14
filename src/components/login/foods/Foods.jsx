import React from 'react'
import style from "./Foods.module.css"
import { Select, Tag } from 'antd';
const options = [
    {
      value: 'gold',
    },
    {
      value: 'lime',
    },
    {
      value: 'green',
    },
    {
      value: 'cyan',
    },
  ];
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
  
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
  
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };
  
 const Foods = () => {
    
  return (
    <div className={style.Foods}>
        <h1>Yemaydigan mahsulotingizni belgilab qo‘ying</h1>
        <div className={style.Select_block}>
                <Select
    mode="multiple" 
    listHeight="240px"
    showArrow
    tagRender={tagRender}
    // defaultValue={['gold', 'cyan']}
    placeholder="Mahsulotlar"
  className={style.Select}
    options={options}
  />   
        </div>
 
    </div>
  )
}
export default Foods