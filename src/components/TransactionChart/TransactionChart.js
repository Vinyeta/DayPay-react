import React from "react";
import { Chart } from "react-charts";
import { UserContext } from "../../user-context";
import "./TransactionChart.css";
import { parseDate } from "../../Utils/parseDate";
import { API_ROOT } from "../../hostSettings";

function TransactionChart() {
  const { wallet, token } = React.useContext(UserContext);

  const [histogram, setHistogram] = React.useState([]);

  React.useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    fetch(`${API_ROOT}api/transactions/${wallet}/lastWeek`, options)
      .then((response) => response.json())
      .then((json) => {
        let preparingData = [];
        json.forEach((element) => {
          preparingData.unshift({
            x: parseDate(new Date(element.date)),
            y: element.amount,
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
    // eslint-disable-next-line
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

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    // eslint-disable-next-line
    [histogram]
  );

  return (
    <>
      {wallet && (
        <div className="histogram">
          <Chart data={data} axes={axes} series={series} tooltip />
        </div>
      )}
    </>
  );
}

export default TransactionChart;
