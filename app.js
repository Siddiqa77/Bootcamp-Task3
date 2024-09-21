// Task 03

// Create a logic for a coffee shop that has an default value for the customer's age and displays: (Using JavaScript)
//     - "You get a 10% discount" if they are 65 or older
//     - "You get a 5% discount" if they are a student (18-25)
//     - "No discount" otherwise

function getDiscount(age = 25, isStudent = false) {
  if (age >= 65) {
    return "You get a 10% discount.";
  } else if (age >= 18 && age <= 25 && isStudent) {
    return "You get a 5% discount.";
  } else {
    return "No discount.";
  }
}

function showDiscount() {
  const age = document.getElementById("age").value || 25; // Default age is 25
  const isStudent = document.getElementById("student").checked;

  // Calculate discount
  const discountMessage = getDiscount(age, isStudent);

  // Display result
  document.getElementById("result").innerText = discountMessage;
}
