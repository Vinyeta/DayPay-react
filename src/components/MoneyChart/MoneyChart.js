import React from "react";
import { Chart } from "react-charts";
import { UserContext } from "../../user-context";
import "./MoneyChart.css";
import { dayOfTheWeek } from "../../Utils/dayOfTheWeek";
import { API_ROOT } from "../../hostSettings";

function ChartDay() {
  const { wallet, token } = React.useContext(UserContext);

  const [histogram, setHistogram] = React.useState([]);

  React.useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    fetch(`${API_ROOT}api/wallet/${wallet}/histogram`, options)
      .then((response) => response.json())
      .then((json) => {
        let preparingData = [];
        json.forEach((element) => {
          preparingData.unshift({
            x: dayOfTheWeek(element.date),
            y: element.funds,
          });
        });
        setHistogram(preparingData);
      });
      // eslint-disable-next-line
  }, [wallet]);

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: histogram && histogram,
      },
    ],
    [histogram]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    // eslint-disable-next-line
    [histogram]
  );

  return (
    <>
      {wallet && (
        <div className="histogram">
          <Chart data={data} axes={axes} tooltip />
        </div>
      )}
    </>
  );
}

export default ChartDay;
