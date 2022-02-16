import Chart from "../../AdminComponents/chart/Chart";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../AdminComponents/widgetLg/WidgetLg"
import WidgetSm from "../../AdminComponents/widgetSm/WidgetSm"
import FeaturedInfo from "../../AdminComponents/featuredInfo/FeaturedInfo"


export default function AdminHome() {
  return (
    <>
    
      <div className="home">
      
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
     </>
   
  );
}
