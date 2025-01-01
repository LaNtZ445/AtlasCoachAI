import axios from "axios";

export const generatePlan = async (planType: string, formData: any) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    console.error("API key is missing.");
    return null;
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: createPrompt(planType, formData) }],
        max_tokens: 1500,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const plan = response.data.choices[0].message.content.trim();
    console.log("Plan received from OpenAI:", plan);

    if (plan) {
      return plan;
    } else {
      console.error("Plan is empty or incorrectly formatted:", plan);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    return null;
  }
};

const createPrompt = (planType: string, formData: any) => {
  const {
    gender,
    goal,
    age,
    height,
    weight,
    dietaryPreference,
    days,
    activityLevel,
    bodyFat,
    equipment,
  } = formData;
  const gymMembership = "Yes";

  if (planType === "workout") {
    return `
      Generate a personalized weekly workout plan for a ${gender} with the goal of ${goal}. 
      The person is ${age} years old, ${height} cm tall, weighs ${weight} kg, and has a body fat percentage of ${bodyFat}%. 
      Activity level: ${activityLevel}. 
      Gym membership: ${gymMembership}. 
      They are working out ${days} days per week. 
      Available equipment: ${equipment}.
      
      Workout Plan Format:
      Provide a structured workout plan with a specific focus for each day, including a combination of strength, cardio, and rest days as appropriate for the goal. 
      Use the following format for each day:

      Day X: [Workout Type]
      - [Exercise 1]: [Sets] sets of [Reps] reps or [Duration] minutes
      - [Exercise 2]: [Sets] sets of [Reps] reps or [Duration] minutes
      - [Exercise 3]: [Sets] sets of [Reps] reps or [Duration] minutes

      Example:

      Day 1: Full Body Strength Training
      - Squats: 4 sets of 10 reps
      - Bench Press: 4 sets of 8 reps
      - Deadlifts: 4 sets of 6 reps
      - Pull-ups: 3 sets of 8 reps
      - Planks: 3 sets of 1-minute hold

    `;
  }

  if (planType === "meal") {
    return `
      Generate a personalized meal plan for a ${gender} with the goal of ${goal}.
      The person is ${age} years old, ${height} cm tall, weighs ${weight} kg. 
      Dietary preference: ${dietaryPreference}. 
      Gym membership: ${gymMembership}. 
      Include meals for each day of the week, ensuring the meal plan aligns with the fitness goal. If the person is aiming to lose weight, focus on lower-calorie meals with high protein content. If the person is aiming to gain muscle, include nutrient-dense meals with higher calorie intake.

      **Meal Plan Format**:
      Provide a clear daily meal plan with the following structure:

      Day X:
      - Breakfast: [Meal Name] (e.g., Scrambled eggs with spinach)
      - Snack: [Snack Name] (e.g., Apple slices with almond butter)
      - Lunch: [Meal Name] (e.g., Grilled chicken with quinoa)
      - Snack: [Snack Name] (e.g., Greek yogurt with honey)
      - Dinner: [Meal Name] (e.g., Salmon with roasted vegetables)

      Example:

      Day 1:
      - Breakfast: Greek yogurt with berries and granola
      - Snack: Carrot sticks with hummus
      - Lunch: Grilled chicken with quinoa and steamed broccoli
      - Snack: Cottage cheese with pineapple
      - Dinner: Grilled salmon with sweet potato and steamed asparagus
    `;
  }

  return "";
};
