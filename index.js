/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * PRICE_RANGE.max - PRICE_RANGE.min);

  return { name, occupation, rate };
}

function getAverageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0
  );
  return total / freelancers.length;
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
console.log(freelancers);

function FreelancerRow(freelancer) {
  const { name, occupation, rate } = freelancer;

  const $tr = document.createElement("tr");
  $tr.classList.add("freelancer");
  $innerHTML = `
  <td>${name}</td>
  <td>${occupation}</td>
  <td>${rate}</td>
  `;
  return $tr;
}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  $tbody.classList.add("freelancers");

  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);

  return $tbody;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
        <h1>Freelancers For Hire</h1>
        <AverageRate></AverageRate>
        <table>
          <thread>
            <tr>
            <th>Name</th>
            <th>Occupation></th>
            <th>Rate</th>
            </tr>
         </thread>
        <tbody id="FreelancerRows></tbody>
        </table>
    `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}
render();
