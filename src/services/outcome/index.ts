import { Outcome } from "./types";

export async function postOutcome(data: Outcome): Promise<boolean> {
  try {
    const outcomes = await getAllOutcome();

    localStorage.setItem(
      "@mymoney:outcomes",
      JSON.stringify([
        ...outcomes,
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

export async function getAllOutcome(): Promise<Outcome[]> {
  const data = localStorage.getItem("@mymoney:outcomes");

  if (!data) return [];

  const parsedData = JSON.parse(data) as Outcome[];

  return parsedData.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
}

export async function getLastOutcome(): Promise<Outcome[]> {
  const data = localStorage.getItem("@mymoney:outcomes");

  if (!data) return [];

  const parsedData = JSON.parse(data) as Outcome[];

  return parsedData.splice(0, 5).map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
}

export async function getTotalOutcome(): Promise<number> {
  const data = localStorage.getItem("@mymoney:outcomes");

  if (!data) return 0;

  const parsedData = JSON.parse(data) as Outcome[];

  return parsedData.reduce((acc, cur) => acc + Number(cur.value), 0);
}

export async function deleteOutcome(id: string): Promise<boolean> {
  const outcomes = await getAllOutcome();

  const newOutcomes = outcomes.filter((item) => item.id !== id);

  localStorage.setItem("@mymoney:outcomes", JSON.stringify(newOutcomes));

  return true;
}
