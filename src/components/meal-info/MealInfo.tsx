import type { MealInfoProps } from "@/types/meal-info-props";

const MealInfo = ({ mealInfo }: { mealInfo: MealInfoProps }) => {
  return (
    <section className="ml-[100px] w-1/3">
      <b className="text-large text-primary ">{mealInfo.price}</b>
      <h2 className="text-heading mb-3">{mealInfo.title}</h2>
      <p className="text-base mb-[28px]">{mealInfo.description}</p>
      <button className="rounded-full bg-primary text-white font-bold text-base py-[14px] px-[41px] [box-shadow:0_20px_40px_#F4E2D1] hover:bg-primary-dark bg-change-transition">
        ORDER NOW
      </button>
    </section>
  );
};

export default MealInfo;
