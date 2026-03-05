//60 math questions
const questions = [
  // --- Sequences and Series ---
  {
    id: 1,
    topic: "Sequences and Series",
    question: "What is the 10th term of the arithmetic sequence: 3, 7, 11, 15, ...?",
    options: { A: "35", B: "39", C: "43", D: "47" },
    answer: "B"
  },
  {
    id: 2,
    topic: "Sequences and Series",
    question: "Find the 6th term of the geometric sequence: 2, -6, 18, -54, ...",
    options: { A: "-486", B: "486", C: "-1458", D: "1458" },
    answer: "A"
  },
  {
    id: 3,
    topic: "Sequences and Series",
    question: "What is the sum of the infinite geometric series: 8 + 4 + 2 + 1 + ...?",
    options: { A: "12", B: "14", C: "16", D: "∞" },
    answer: "C"
  },
  {
    id: 4,
    topic: "Sequences and Series",
    question: "What is the sum of the first 20 positive integers?",
    options: { A: "190", B: "200", C: "210", D: "400" },
    answer: "C"
  },
  {
    id: 5,
    topic: "Sequences and Series",
    question: "Evaluate the sum from n=1 to 5 of (2n - 1).",
    options: { A: "20", B: "25", C: "30", D: "35" },
    answer: "B"
  },

  // --- Limits and Continuity ---
  {
    id: 6,
    topic: "Limits and Continuity",
    question: "Evaluate lim (x -> 2) of (x^2 - 4) / (x - 2).",
    options: { A: "4", B: "2", C: "0", D: "Undefined" },
    answer: "A"
  },
  {
    id: 7,
    topic: "Limits and Continuity",
    question: "Find lim (x -> ∞) of (3x^2 - 5x + 1) / (2x^2 + x - 7).",
    options: { A: "0", B: "1", C: "1.5", D: "∞" },
    answer: "C"
  },
  {
    id: 8,
    topic: "Limits and Continuity",
    question: "Evaluate lim (x -> 0) of sin(5x) / x.",
    options: { A: "0", B: "1", C: "1/5", D: "5" },
    answer: "D"
  },
  {
    id: 9,
    topic: "Limits and Continuity",
    question: "Evaluate lim (x -> 0) of (1 - cos(x)) / x.",
    options: { A: "0", B: "1", C: "-1", D: "Undefined" },
    answer: "A"
  },
  {
    id: 10,
    topic: "Limits and Continuity",
    question: "Find the horizontal asymptote of the function y = (4x - 1) / (x + 2).",
    options: { A: "y = -2", B: "y = 0", C: "y = 4", D: "y = 1" },
    answer: "C"
  },
  {
    id: 11,
    topic: "Limits and Continuity",
    question: "Evaluate the right-sided limit lim (x -> 1+) of |x - 1| / (x - 1).",
    options: { A: "1", B: "-1", C: "0", D: "Undefined" },
    answer: "A"
  },
  {
    id: 12,
    topic: "Limits and Continuity",
    question: "If f(x) = (x^2 - 9)/(x - 3) for x ≠ 3, and f(x) = k for x = 3. Find k so that f(x) is continuous at x = 3.",
    options: { A: "3", B: "6", C: "9", D: "0" },
    answer: "B"
  },

  // --- Derivatives and Applications ---
  {
    id: 13,
    topic: "Derivatives",
    question: "Find the derivative of y = 3x^4 - 2x^2 + 5.",
    options: { A: "12x^3 - 4x + 5", B: "12x^3 - 4x", C: "12x^2 - 4", D: "x^3 - x" },
    answer: "B"
  },
  {
    id: 14,
    topic: "Derivatives",
    question: "What is the derivative of y = x * sin(x)?",
    options: { A: "cos(x)", B: "x * cos(x)", C: "sin(x) + x * cos(x)", D: "sin(x) - x * cos(x)" },
    answer: "C"
  },
  {
    id: 15,
    topic: "Derivatives",
    question: "Find dy/dx for y = e^(2x).",
    options: { A: "e^(2x)", B: "x * e^(2x)", C: "2 * e^x", D: "2e^(2x)" },
    answer: "D"
  },
  {
    id: 16,
    topic: "Derivatives",
    question: "Find the derivative of y = ln(x^2 + 1).",
    options: { A: "2x / (x^2 + 1)", B: "1 / (x^2 + 1)", C: "2 / (x^2 + 1)", D: "2x * ln(x^2 + 1)" },
    answer: "A"
  },
  {
    id: 17,
    topic: "Derivatives",
    question: "What is the equation of the tangent line to the curve y = x^2 at x = 2?",
    options: { A: "y = 4x - 2", B: "y = 4x - 4", C: "y = 2x", D: "y = 4x + 4" },
    answer: "B"
  },
  {
    id: 18,
    topic: "Derivatives",
    question: "At what value of x does the function f(x) = x^2 - 4x + 3 have a local minimum?",
    options: { A: "0", B: "1", C: "2", D: "4" },
    answer: "C"
  },
  {
    id: 19,
    topic: "Derivatives",
    question: "On which interval is the function f(x) = x^3 - 3x increasing?",
    options: { A: "(-∞, -1) U (1, ∞)", B: "(-1, 1)", C: "(0, ∞)", D: "(-∞, 0)" },
    answer: "A"
  },
  {
    id: 20,
    topic: "Derivatives",
    question: "Given x^2 + y^2 = 25. Find dy/dx implicitly at the point (3, 4).",
    options: { A: "3/4", B: "-4/3", C: "4/3", D: "-3/4" },
    answer: "D"
  },
  {
    id: 21,
    topic: "Derivatives",
    question: "Find the x-coordinate of the point of inflection for y = x^3 - 6x^2.",
    options: { A: "1", B: "2", C: "3", D: "6" },
    answer: "B"
  },
  {
    id: 22,
    topic: "Derivatives",
    question: "The radius of a circle increases at 0.5 cm/s. At what rate is the area increasing when the radius is 4 cm?",
    options: { A: "2π cm^2/s", B: "3π cm^2/s", C: "4π cm^2/s", D: "8π cm^2/s" },
    answer: "C"
  },

  // --- Integrals and Applications ---
  {
    id: 23,
    topic: "Integrals",
    question: "Evaluate the indefinite integral ∫ 4x^3 dx.",
    options: { A: "x^4 + C", B: "12x^2 + C", C: "x^3 + C", D: "4x^4 + C" },
    answer: "A"
  },
  {
    id: 24,
    topic: "Integrals",
    question: "Evaluate the definite integral from x=0 to x=2 of x^2 dx.",
    options: { A: "4", B: "8", C: "8/3", D: "4/3" },
    answer: "C"
  },
  {
    id: 25,
    topic: "Integrals",
    question: "Evaluate ∫ 2x * cos(x^2) dx.",
    options: { A: "cos(x^2) + C", B: "sin(x^2) + C", C: "-sin(x^2) + C", D: "2 * sin(x^2) + C" },
    answer: "B"
  },
  {
    id: 26,
    topic: "Integrals",
    question: "Find the area under the curve y = x^2 from x = 0 to x = 3.",
    options: { A: "3", B: "6", C: "8", D: "9" },
    answer: "D"
  },
  {
    id: 27,
    topic: "Integrals",
    question: "Evaluate ∫ (1/x) dx for x > 0.",
    options: { A: "ln|x| + C", B: "e^x + C", C: "-1/x^2 + C", D: "x + C" },
    answer: "A"
  },
  {
    id: 28,
    topic: "Integrals",
    question: "Find the volume of the solid generated by revolving the region bounded by y = x, x = 0, and x = 1 about the x-axis.",
    options: { A: "π/2", B: "π/4", C: "π/3", D: "π" },
    answer: "C"
  },
  {
    id: 29,
    topic: "Integrals",
    question: "Evaluate the integral from 0 to π/2 of sin(x) dx.",
    options: { A: "0", B: "1", C: "-1", D: "π/2" },
    answer: "B"
  },
  {
    id: 30,
    topic: "Integrals",
    question: "Using integration by parts, find ∫ x * e^x dx.",
    options: { A: "x*e^x - e^x + C", B: "x*e^x + e^x + C", C: "e^x - x*e^x + C", D: "x^2 * e^x + C" },
    answer: "A"
  },
  {
    id: 31,
    topic: "Integrals",
    question: "If F(x) = ∫(from 0 to x) cos(t^2) dt, what is F'(x)?",
    options: { A: "-sin(x^2)", B: "2x * cos(x^2)", C: "-2x * sin(x^2)", D: "cos(x^2)" },
    answer: "D"
  },
  {
    id: 32,
    topic: "Integrals",
    question: "Evaluate the improper integral from 1 to ∞ of (1/x^2) dx.",
    options: { A: "0", B: "1", C: "2", D: "∞" },
    answer: "B"
  },

  // --- 3D Geometry and Vectors ---
  {
    id: 33,
    topic: "3D Geometry and Vectors",
    question: "Find the distance between the points (1, 2, 3) and (4, 6, 15).",
    options: { A: "5", B: "12", C: "13", D: "169" },
    answer: "C"
  },
  {
    id: 34,
    topic: "3D Geometry and Vectors",
    question: "Find the dot product of vectors u = (1, -2, 3) and v = (3, 1, -1).",
    options: { A: "-2", B: "0", C: "2", D: "4" },
    answer: "A"
  },
  {
    id: 35,
    topic: "3D Geometry and Vectors",
    question: "What is the cross product of the unit vectors i and j (i × j)?",
    options: { A: "0", B: "k", C: "-k", D: "1" },
    answer: "B"
  },
  {
    id: 36,
    topic: "3D Geometry and Vectors",
    question: "Find the equation of the plane passing through (1,1,1) with a normal vector n = (2, -1, 3).",
    options: { A: "2x - y + 3z = 0", B: "x + y + z = 4", C: "2x + y + 3z = 6", D: "2x - y + 3z = 4" },
    answer: "D"
  },
  {
    id: 37,
    topic: "3D Geometry and Vectors",
    question: "What is the vector projection of a = (2,0,0) onto b = (1,1,0)?",
    options: { A: "(2, 2, 0)", B: "(0.5, 0.5, 0)", C: "(1, 1, 0)", D: "(1, 0, 0)" },
    answer: "C"
  },
  {
    id: 38,
    topic: "3D Geometry and Vectors",
    question: "Find the angle θ between vectors u = (1, 0) and v = (1, 1).",
    options: { A: "π/4", B: "π/3", C: "π/6", D: "π/2" },
    answer: "A"
  },
  {
    id: 39,
    topic: "3D Geometry and Vectors",
    question: "If points A(1,2,3), B(2,4,6), and C(x,y,z) are collinear and C is 3 times the vector A from the origin, what is C?",
    options: { A: "(2,4,6)", B: "(3,6,9)", C: "(4,8,12)", D: "(1,2,3)" },
    answer: "B"
  },
  {
    id: 40,
    topic: "3D Geometry and Vectors",
    question: "The scalar triple product (u × v) · w represents the volume of which geometric solid?",
    options: { A: "Tetrahedron", B: "Sphere", C: "Parallelepiped", D: "Cone" },
    answer: "C"
  },

  // --- Complex Numbers ---
  {
    id: 41,
    topic: "Complex Numbers",
    question: "What is the modulus of the complex number z = 3 - 4i?",
    options: { A: "5", B: "7", C: "25", D: "1" },
    answer: "A"
  },
  {
    id: 42,
    topic: "Complex Numbers",
    question: "Find the principal argument of z = -1 + i.",
    options: { A: "π/4", B: "-π/4", C: "3π/4", D: "-3π/4" },
    answer: "C"
  },
  {
    id: 43,
    topic: "Complex Numbers",
    question: "What is the product of (1 + i) and (2 - i)?",
    options: { A: "2 - i", B: "3 + i", C: "1 + 3i", D: "3 - i" },
    answer: "B"
  },
  {
    id: 44,
    topic: "Complex Numbers",
    question: "Using De Moivre's Theorem, if z = 2(cos(π/6) + i*sin(π/6)), what is z^3?",
    options: { A: "6i", B: "8", C: "8i", D: "4 + 4i" },
    answer: "C"
  },
  {
    id: 45,
    topic: "Complex Numbers",
    question: "What is the complex conjugate of z = 5 + 2i?",
    options: { A: "5 - 2i", B: "-5 + 2i", C: "-5 - 2i", D: "2 + 5i" },
    answer: "A"
  },
  {
    id: 46,
    topic: "Complex Numbers",
    question: "What is the multiplicative inverse of z = i?",
    options: { A: "1", B: "-1", C: "i", D: "-i" },
    answer: "D"
  },
  {
    id: 47,
    topic: "Complex Numbers",
    question: "What is the real part of Euler's formula e^(iπ)?",
    options: { A: "0", B: "-1", C: "1", D: "π" },
    answer: "B"
  },
  {
    id: 48,
    topic: "Complex Numbers",
    question: "Which of the following represents the square roots of i?",
    options: { A: "±(1 + i)", B: "±(1 - i)", C: "±(√2/2 + i√2/2)", D: "±(√2/2 - i√2/2)" },
    answer: "C"
  },

  // --- Matrices, Determinants & Linear Programming ---
  {
    id: 49,
    topic: "Matrices and Determinants",
    question: "If Matrix A = [[1, 2], [3, 4]] and B = [[0, 1], [1, 0]], what is A + B?",
    options: { A: "[[1, 3], [4, 4]]", B: "[[1, 2], [3, 4]]", C: "[[0, 3], [4, 0]]", D: "[[2, 3], [4, 5]]" },
    answer: "A"
  },
  {
    id: 50,
    topic: "Matrices and Determinants",
    question: "Find the determinant of the 2x2 matrix [[2, 3], [1, 4]].",
    options: { A: "5", B: "11", C: "8", D: "-5" },
    answer: "A" // 2*4 - 3*1 = 5
  },
  {
    id: 51,
    topic: "Matrices and Determinants",
    question: "What is the inverse of the matrix [[2, 0], [0, 3]]?",
    options: { A: "[[3, 0], [0, 2]]", B: "[[-2, 0], [0, -3]]", C: "[[0.5, 0], [0, 1/3]]", D: "Does not exist" },
    answer: "C"
  },
  {
    id: 52,
    topic: "Linear Programming",
    question: "Find the maximum value of Z = 3x + 2y subject to the constraints: x ≤ 4, y ≤ 5, x + y ≤ 6, and x, y ≥ 0.",
    options: { A: "12", B: "13", C: "15", D: "16" },
    answer: "D" // Corners are (0,0), (4,0), (4,2), (1,5), (0,5). Z(4,2) = 12+4=16.
  },
  {
    id: 53,
    topic: "Matrices and Determinants",
    question: "Using Cramer's rule to solve the system (x + y = 3) and (x - y = 1), what is the determinant of the coefficient matrix (D)?",
    options: { A: "-2", B: "2", C: "0", D: "1" },
    answer: "A" // |1 1| / |1 -1| = -1 - 1 = -2
  },
  {
    id: 54,
    topic: "Matrices and Determinants",
    question: "If a square matrix is singular, what must its determinant be?",
    options: { A: "1", B: "0", C: "-1", D: "Infinity" },
    answer: "B"
  },

  // --- Statistics and Probability ---
  {
    id: 55,
    topic: "Statistics and Probability",
    question: "What is the arithmetic mean of the data set: 2, 4, 6, 8, 10?",
    options: { A: "4", B: "5", C: "6", D: "8" },
    answer: "C"
  },
  {
    id: 56,
    topic: "Statistics and Probability",
    question: "Find the median of the following set of numbers: 1, 3, 4, 7, 9, 10.",
    options: { A: "5.5", B: "4", C: "7", D: "6" },
    answer: "A"
  },
  {
    id: 57,
    topic: "Statistics and Probability",
    question: "What is the mode of the data set: 2, 3, 3, 4, 5?",
    options: { A: "2", B: "3", C: "4", D: "5" },
    answer: "B"
  },
  {
    id: 58,
    topic: "Statistics and Probability",
    question: "What is the probability of rolling a prime number on a fair, standard 6-sided die?",
    options: { A: "1/3", B: "1/2", C: "2/3", D: "1/6" },
    answer: "B" // Primes: 2, 3, 5 -> 3/6 = 1/2
  },
  {
    id: 59,
    topic: "Statistics and Probability",
    question: "Evaluate the combination 5C2 (the number of ways to choose 2 items from 5).",
    options: { A: "5", B: "10", C: "20", D: "120" },
    answer: "B"
  },
  {
    id: 60,
    topic: "Statistics and Probability",
    question: "Evaluate the permutation 5P2 (the number of ways to arrange 2 items from 5).",
    options: { A: "10", B: "20", C: "60", D: "120" },
    answer: "B"
  }
];
