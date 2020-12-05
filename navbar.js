// navbar coding here

const NavActive = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // toggle Nav
  nav.classList.toggle("nav-active");

  // Animate Links
  navLinks.forEach((links, index) => {
    if (links.style.animation) {
      links.style.animation = "";
    } else {
      links.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  // burger animation
  burger.classList.toggle("toggle");
};


// bill calculation

const calculate = ()=>
{
    const old_bill = document.getElementById("old").value;
    const new_bill = document.getElementById("new").value;
    const unit = document.getElementById("unit").value;
    const minus = document.getElementById("minus").value;
    const result = new_bill - old_bill;
    const reading = result * unit;
    const finalBill = reading - minus;

    document.getElementById("old_bill").innerHTML = old_bill;
    document.getElementById("new_bill").innerHTML = new_bill;
    document.getElementById("result").innerHTML = Math.abs(result);
    document.getElementById("result_two").innerHTML = Math.abs(result);
    document.getElementById("unit_bill").innerHTML = unit;
    document.getElementById("reading").innerHTML = reading;
    document.getElementById("reading_two").innerHTML = reading;
    document.getElementById("minus_bill").innerHTML = minus;
    document.getElementById("final_bill").innerHTML = finalBill;

};