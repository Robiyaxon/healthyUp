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
export const MyBackTop = () => {
  return (
    <BackTop className="style">
      <div>
        <UpCircleOutlined />
      </div>
    </BackTop>
  );
};
