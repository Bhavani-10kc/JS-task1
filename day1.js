// Task 1: Age-Based Admission Fee
// --------------------------------
// Free admission for children under 5 years old.
// A discounted fee of $10 for visitors aged between 5 and 12 years.
        let age =6;
          let fee = age < 5 ? 0 : (age <= 12 ? 10 : 20);
          console.log(`The Admission fee is ${fee}$`);
//  Task 2: Greeting Based on Time of Day
//  --------------------------------------
    let hour =5;
    let greeting = (hour >= 5 && hour < 12) ? "Good Morning" :
                   (hour >= 12 && hour < 18) ? "Good Afternoon" :
                   (hour >= 18 && hour < 22) ? "Good Evening" :
                   "Good Night";
                   console.log(greeting); 
                   
// Task 3: Check if a Number is Positive, Negative, or Zero
            let number =-5;
             let result = number > 0 ? "The Number is Positive" :
             number < 0 ? "The Number is Negative" :
             "The Number is Zero";
             console.log(result); 
