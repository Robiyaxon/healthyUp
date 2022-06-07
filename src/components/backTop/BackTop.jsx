import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

export const MyBackTop = () => {
  return (
    <BackTop>
      <div style={style}><UpCircleOutlined /></div>
    </BackTop>
  );
};
