const options = {

  headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJhYjczZmVkYWJhNjY4MzBiN2ExNDEiLCJpYXQiOjE2MTM1Nzg1OTB9.1jXP9kYnGogDcHjPSNFTgpK0k1r5FR9_kc0EsZUSI30"

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
              "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJhYjczZmVkYWJhNjY4MzBiN2ExNDEiLCJpYXQiOjE2MTM1Nzg1OTB9.1jXP9kYnGogDcHjPSNFTgpK0k1r5FR9_kc0EsZUSI30"
  
          }
      ,
      body: JSON.stringify({

        funds: balance + 1000

      }),
    };


    fetch(`http://localhost:5000/api/wallet/${id}`, options).then((response) =>
      console.log(response.status)
    );
  };

  export const weeklyIncrement = (setPercentage, id) => {
    
    fetch(`http://localhost:5000/api/wallet/${id}/increment`, options)
      .then((response) => response.json())
      .then((json) => setPercentage(json));
  };
