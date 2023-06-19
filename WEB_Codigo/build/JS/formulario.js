document.getElementById('calorie-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
  
    // Obtener los valores ingresados en el formulario
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const activityLevel = document.getElementById('activity-level').value;
    const goal = document.getElementById('goal').value;
  
    // Calcular las calorías según la fórmula correspondiente a cada género
    let calories;
    if (gender === 'male') {
      calories = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender === 'female') {
      calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
  
    // Ajustar las calorías según el nivel de actividad
    switch (activityLevel) {
      case 'sedentary':
        calories *= 1.2;
        break;
      case 'lightly-active':
        calories *= 1.375;
        break;
      case 'moderately-active':
        calories *= 1.55;
        break;
      case 'very-active':
        calories *= 1.725;
        break;
      case 'super-active':
        calories *= 1.9;
        break;
    }
  
    // Definir el rango de calorías según el objetivo
    let calorieRange;
    switch (goal) {
      case 'lose-weight':
        calorieRange = '1500-1800';
        break;
      case 'maintain-weight':
        calorieRange = '1800-2200';
        break;
      case 'gain-weight':
        calorieRange = '2200-2500';
        break;
    }
  
    // Crear objetos con las características de las dietas
    const balancedDiet = {
      name: 'Dieta equilibrada',
      breakfast: {
        calories: 300,
        protein: 10,
        fat: 5,
      },
      snack: {
        calories: 100,
        protein: 5,
        fat: 2,
      },
      lunch: {
        calories: 500,
        protein: 20,
        fat: 10,
      },
      afternoonSnack: {
        calories: 150,
        protein: 5,
        fat: 3,
      },
      dinner: {
        calories: 400,
        protein: 15,
        fat: 8,
      },
    };
  
    const mediterraneanDiet = {
      name: 'Dieta mediterránea',
      breakfast: {
        calories: 400,
        protein: 15,
        fat: 8,
      },
      snack: {
        calories: 200,
        protein: 5,
        fat: 4,
      },
      lunch: {
        calories: 600,
        protein: 25,
        fat: 12,
      },
      afternoonSnack: {
        calories: 200,
        protein: 5,
        fat: 4,
      },
      dinner: {
        calories: 500,
        protein: 20,
        fat: 10,
      },
    };
  
    const lowCarbDiet = {
      name: 'Dieta baja en carbohidratos',
      breakfast: {
        calories: 400,
        protein: 25,
        fat: 10,
      },
      snack: {
        calories: 150,
        protein: 5,
        fat: 3,
      },
      lunch: {
        calories: 500,
        protein: 30,
        fat: 15,
      },
      afternoonSnack: {
        calories: 150,
        protein: 5,
        fat: 3,
      },
      dinner: {
        calories: 400,
        protein: 25,
        fat: 10,
      },
    };
  
    // Mostrar el resultado en un nuevo div
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
  
    const resultMessage = document.createElement('p');
    resultMessage.innerText = `Tu rango de calorías diarias recomendadas es ${calorieRange} kcal.`;
    resultDiv.appendChild(resultMessage);
  
    const dietTitle = document.createElement('h2');
    dietTitle.innerText = 'Opciones de dietas:';
    resultDiv.appendChild(dietTitle);
  
    const dietsContainer = document.createElement('div');
    dietsContainer.classList.add('diets-container');
  
    const diets = [balancedDiet, mediterraneanDiet, lowCarbDiet];
    diets.forEach((diet) => {
      const dietDiv = document.createElement('div');
      dietDiv.classList.add('diet');
  
      const dietName = document.createElement('h3');
      dietName.innerText = diet.name;
      dietDiv.appendChild(dietName);
  
      const dietDetails = document.createElement('ul');
      dietDetails.innerHTML = `
        <li>Desayuno - Calorías: ${diet.breakfast.calories} kcal, Proteínas: ${diet.breakfast.protein} g, Grasas: ${diet.breakfast.fat} g</li>
        <li>Merienda - Calorías: ${diet.snack.calories} kcal, Proteínas: ${diet.snack.protein} g, Grasas: ${diet.snack.fat} g</li>
        <li>Comida - Calorías: ${diet.lunch.calories} kcal, Proteínas: ${diet.lunch.protein} g, Grasas: ${diet.lunch.fat} g</li>
        <li>Merienda - Calorías: ${diet.afternoonSnack.calories} kcal, Proteínas: ${diet.afternoonSnack.protein} g, Grasas: ${diet.afternoonSnack.fat} g</li>
        <li>Cena - Calorías: ${diet.dinner.calories} kcal, Proteínas: ${diet.dinner.protein} g, Grasas: ${diet.dinner.fat} g</li>
      `;
      dietDiv.appendChild(dietDetails);
  
      dietsContainer.appendChild(dietDiv);
    });

    // Crear el botón de cierre
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.classList.add('close-button');

    // Agregar el evento click al botón de cierre
    closeButton.addEventListener('click', () => {
        resultDiv.remove(); // Remover el div de resultados al hacer clic en el botón de cierre
    });

// Agregar el botón de cierre al div de resultados
resultDiv.appendChild(closeButton);
  
    resultDiv.appendChild(dietsContainer);
  
    // Agregar el div de resultados al documento
    const mainContent = document.querySelector('.Introduccion_Cuestionario');
    mainContent.appendChild(resultDiv);
  });
  