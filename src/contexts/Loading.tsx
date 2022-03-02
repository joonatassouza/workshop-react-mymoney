import React, {
  useState,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { getTotalIncome } from "../services/income";
import { getTotalOutcome } from "../services/outcome";

export const TransactionsContext = createContext({} as BalanceProviderData);

export interface BalanceProviderData {
  balance: number;
  reload: () => void;
}

export const BalanceProvider: React.FC = ({ children }) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);

  const reload = useCallback(() => {
    getTotalIncome().then(setTotalIncome);
    getTotalOutcome().then(setTotalOutcome);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const balance = useMemo(
    () => totalIncome - totalOutcome,
    [totalIncome, totalOutcome]
  );

  return (
    <TransactionsContext.Provider value={{ balance, reload }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useBalance(): BalanceProviderData {
  return useContext(TransactionsContext);
}
