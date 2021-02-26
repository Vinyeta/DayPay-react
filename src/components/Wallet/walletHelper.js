const token = localStorage.getItem("token");

const options = {

  headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token

  }}


export const incomeTransactions = (setTransactions, id) => {

    fetch(`http://localhost:5000/api/transactions/${id}/received`, options)
      .then((response) => response.json())
      .then((json) => setTransactions(json));
  }

export  const outcomeTransactions = (setTransactions, id) => {

    fetch(`http://localhost:5000/api/transactions/${id}/sent`, options)
      .then((response) => response.json())
      .then((json) => setTransactions(json));

  }

export  const allTransactions = (setTransactions, id) => {

    fetch(`http://localhost:5000/api/transactions/${id}/all`, options)
      .then((response) => response.json())
      .then((json) => setTransactions(json));

  }


export  const getBalance = (setBalance, id) => {
    fetch(`http://localhost:5000/api/wallet/${id}/balance`, options)
      .then((response) => response.json())
      .then((json) => setBalance(json));
  }

 export const addFunds = (id, balance) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
              "Authorization": "Bearer " + token
  
          }
      ,
      body: JSON.stringify({

        funds: parseInt(balance.slice(1, balance.length)) + 10

      }),
    };



    fetch(`http://localhost:5000/api/wallet/${id}`, options).then((response) =>
      console.log(response.status)
    );
  };

  export const weeklyIncrement = (setPercentage, id) => {
    
    fetch(`http://localhost:5000/api/wallet/${id}/increment`, options)
      .then((response) => response.json())
      .then((json) => setPercentage(parseInt(json)));
  };