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

export async function getMealById(id:number):Promise<Meal> {

  const res = await fetch(`${URL}/${id}`)
  
  if(!res.ok) throw new Error("failed to fetch meal from api")
  
    const data:Meal = await res.json()

    return data
}