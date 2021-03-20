import React from 'react'
import { Chart } from 'react-charts';
import { UserContext } from '../../user-context';
import "./MoneyChart.css";
import { dayOfTheWeek } from '../../Utils/dayOfTheWeek';

function ChartDay() {

    const { wallet, token } = React.useContext(UserContext);

    const [histogram, setHistogram] = React.useState([]);


    React.useEffect(() => {
        console.log('test');
        const options = {

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token

            }
        }


        fetch(`http://localhost:5000/api/wallet/${wallet}/histogram`, options)
            .then((response) => response.json())
            .then((json) => {
                let preparingData = [];
                json.forEach(element => {
                    preparingData.unshift({ x: dayOfTheWeek(element.date), y: element.funds });
                    console.log('test2')
                });
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
        ], []);
    const series = React.useMemo(
        () => ({
            type: "bar"
        }),
        []
    );

    return (
        <div
            style={{
                width: '500px',
                height: '300px',
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}

export default ChartDay;