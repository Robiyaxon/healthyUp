import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  // backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

export const MyBackTop = () => {
  return (
    <BackTop style={style}>
      <div>
        <UpCircleOutlined />
      </div>
    </BackTop>
  );
};
