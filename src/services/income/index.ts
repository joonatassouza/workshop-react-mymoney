import { Income } from "./types";

export async function postIncome(data: Income): Promise<boolean> {
  try {
    const incomes = await getAllIncome();

    localStorage.setItem(
      "@mymoney:incomes",
      JSON.stringify([
        ...incomes,
        {
          ...data,
          id: String(Date.now()),
        },
      ])
    );
  } catch {
    return false;
  }

  return true;
}

export async function getAllIncome(): Promise<Income[]> {
  const data = localStorage.getItem("@mymoney:incomes");

  if (!data) return [];

  const parsedData = JSON.parse(data) as Income[];

  return parsedData.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
}

export async function getLastIncome(): Promise<Income[]> {
  const data = localStorage.getItem("@mymoney:incomes");

  if (!data) return [];

  const parsedData = JSON.parse(data) as Income[];

  return parsedData.splice(0, 5).map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
}

export async function getTotalIncome(): Promise<number> {
  const data = localStorage.getItem("@mymoney:incomes");

  if (!data) return 0;

  const parsedData = JSON.parse(data) as Income[];

  return parsedData.reduce((acc, cur) => acc + Number(cur.value), 0);
}

export async function deleteIncome(id: string): Promise<boolean> {
  const incomes = await getAllIncome();

  const newIncomes = incomes.filter((item) => item.id !== id);

  localStorage.setItem("@mymoney:incomes", JSON.stringify(newIncomes));

  return true;
}
