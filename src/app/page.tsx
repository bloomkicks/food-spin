import type { MealInfoProps } from "@/types/meal-info-props";
import WheelList from "@/components/wheel/WheelList";
import MealInfo from "@/components/meal-info/MealInfo";
import Header from "@/components/header/Header";

const meals: MealInfoProps[] = [
  {
    title: "Green Goddess Chicken Salad",
    description:
      "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    price: "$32",
    id: "m001",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <MealInfo mealInfo={meals[0]} />
        <WheelList />
      </div>
    </div>
  );
}
