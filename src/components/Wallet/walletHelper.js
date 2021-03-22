import { API_ROOT } from "../../hostSettings";

export const incomeTransactions = (setTransactions, id, token) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  fetch(`${API_ROOT}api/transactions/${id}/received`, options)
    .then((response) => response.json())
    .then((json) => setTransactions(json));
};

export const outcomeTransactions = (setTransactions, id, token) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  fetch(`${API_ROOT}api/transactions/${id}/sent`, options)
    .then((response) => response.json())
    .then((json) => setTransactions(json));
};

export const allTransactions = (setTransactions, id, token) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  fetch(`${API_ROOT}api/transactions/${id}/all`, options)
    .then((response) => response.json())
    .then((json) => setTransactions(json));
};

export const getBalance = (setBalance, id, token) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  fetch(`${API_ROOT}api/wallet/${id}/balance`, options)
    .then((response) => response.json())
    .then((json) => {
      setBalance(json);
    });
};

export const weeklyIncrement = (setPercentage, id, token) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  fetch(`${API_ROOT}api/wallet/${id}/increment`, options)
    .then((response) => response.json())
    .then((json) => setPercentage(json));
};
