import React from 'react'
import { Chart } from 'react-charts';
import { UserContext } from '../../user-context';
import "./TransactionChart.css";
import { parseDate } from '../../Utils/parseDate';



function TransactionChart() {

    const { wallet, token } = React.useContext(UserContext);

    const [histogram, setHistogram] = React.useState([]);


    React.useEffect(() => {
        const options = {

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token

            }

        }


        fetch(`http://localhost:5000/api/transactions/${wallet}/lastWeek`, options)
            .then((response) => response.json())
            .then((json) => {
                let preparingData = [];
                json.forEach(element => {
                    preparingData.unshift({ x: parseDate(new Date (element.date)), y: element.amount });
                    console.log('test2')
                });
                console.log(preparingData);
                setHistogram(preparingData);
            })
            .catch((err) => console.log(err));
    }, []);



    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: histogram && histogram
            }
        ], [histogram]);

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ], [histogram]);

    const series = React.useMemo(
        () => ({
            type: "bar"
        }),
        [histogram]
    );

    return (
        <div className="histogram">
            <Chart data={data} axes={axes} series={series} tooltip/>
        </div>
    )
}

export default TransactionChart;