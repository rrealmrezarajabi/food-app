import { Meal } from "../types/meals";

type apiRes = {
  recipes:Meal[]
};

const URL = "https://dummyjson.com/recipes";


export async function getMeals():Promise<Meal[]> {
    const res = await fetch(`${URL}`)
    if (!res.ok) throw new Error("failed to fetch meals from api")
    const data: apiRes = await res.json();

    return data.recipes;
}