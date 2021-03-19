import React from 'react'
import "./MoneyChart.css";
import { Chart } from 'react-charts';
import { UserContext } from '../../user-context';

function ChartDay() {

    const { wallet, token } = React.useContext(UserContext);

    const [histogram, setHistogram] = React.useState();
    console.log(histogram);


    React.useEffect( () => {
        console.log('test');
        const options = {

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token

            }
        }


        fetch(`http://localhost:5000/api/wallet/${wallet}/histogram`, options)
            .then((response) => response.json())
            .then((json) => {setHistogram(json); console.log(json)});
    }, []);

    const data = React.useMemo(() => [
            {
                label: 'Series 1',
                data: [{ x: 1, y: histogram && histogram[6] }, { x: 2, y: histogram && histogram[5] }, { x: 3, y: histogram && histogram[4] }, { x: 4, y: histogram && histogram[3] }, { x: 5, y: histogram && histogram[2] }, { x: 6, y: histogram && histogram[1] }, { x: 7, y: histogram && histogram[0] }]
            },

        ],[histogram]);

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}

export default ChartDay;