import MealItem from "./MealItem";

export default function MealsGrid(props: { meals: any }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]
      gap-20 my-8 mx-auto list-none p-0
      ">
      {props.meals.map((meal: any) => <li key={meal.id}>
        <MealItem {...meal} />
      </li>)}
    </ul>
  );
}
