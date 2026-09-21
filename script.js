function scrollToEstimate() {
    const section = document.getElementById("estimate");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function formatCurrency(number) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0
    }).format(number);
}


const form = document.getElementById("estimateForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const amount = Number(
            document.getElementById("amount").value
        );

        const percentage = Number(
            document.getElementById("percentage").value
        );

        if (
            Number.isNaN(amount) ||
            Number.isNaN(percentage) ||
            amount < 0 ||
            percentage < 0 ||
            percentage > 100
        ) {
            alert("Please enter valid numbers.");
            return;
        }

        const result = amount * (percentage / 100);

        const resultBox = document.querySelector(
            "#result strong"
        );

        const displayResult = document.getElementById(
            "displayResult"
        );

        resultBox.textContent = formatCurrency(result);

        displayResult.textContent = formatCurrency(result);

        document.getElementById("result").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}
