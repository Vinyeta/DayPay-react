export const incomeTransactions = (setTransactions, id) => {

    fetch(`http://localhost:5000/api/transactions/${id}/received`)
      .then((response) => response.json())
      .then((json) => setTransactions(json));
  }

export  const outcomeTransactions = (setTransactions, id) => {

    fetch(`http://localhost:5000/api/transactions/${id}/sent`)
      .then((response) => response.json())
      .then((json) => setTransactions(json));

  }

export  const allTransactions = (setTransactions, id) => {

    fetch(`http://localhost:5000/api/transactions/${id}/all`)
      .then((response) => response.json())
      .then((json) => setTransactions(json));

  }


export  const getBalance = (setBalance, id) => {
    fetch(`http://localhost:5000/api/wallet/${id}/balance`)
      .then((response) => response.json())
      .then((json) => setBalance(json));
  }

 export const addFunds = (id, balance) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        funds: balance + 1000

      }),
    };


    fetch(`http://localhost:5000/api/wallet/${id}`, options).then((response) =>
      console.log(response.status)
    );
  };

  export const weeklyIncrement = (setPercentage, id) => {
    
    fetch(`http://localhost:5000/api/wallet/${id}/increment`)
      .then((response) => response.json())
      .then((json) => setPercentage(json));
  };
