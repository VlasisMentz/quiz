import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple";

const AppContext = React.createContext();
//Children refer to the components that are within the AppProvider
const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQusetions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// useGlobalContext is like a custom hook that exports our context.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
