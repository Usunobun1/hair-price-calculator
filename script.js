function calculate() {
    let length = parseInt(document.getElementById("length").value);
    let density = parseInt(document.getElementById("density").value);

    let checkboxes = document.querySelectorAll(".options input:checked");
    let addOns = 0;
    checkboxes.forEach(item => {
        addOns += parseInt(item.value);
    });

    let total = length + density + addOns;

    document.getElementById("result").innerText = "Total: £" + total;
}