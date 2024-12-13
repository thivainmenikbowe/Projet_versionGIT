document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("table tbody");
    const sousTotalEl = document.getElementById("stotal");
    const totalFinalEl = document.getElementById("sold");
    const remiseEl = document.getElementById("remise");
    const taxeEl = document.getElementById("tax");
    const fraisExpeditionEl = document.getElementById("pre");

    document.getElementById("ajouter-ligne").addEventListener("click", ajouterLigne);
    document.getElementById("remplir-automatiquement").addEventListener("click", remplirAuto);
    document.getElementById("calculer").addEventListener("click", calculer);
    document.getElementById("reset").addEventListener("click", reset);

// Here we don't need to put "onclick" to buttons bcs it takes directly from the id. it because of the event listner. Without event listeners, it won't do anything
// Ensures the script runs only after the HTML document is fully loaded.Without this, if your JavaScript tries to interact with elements before they exist, it could throw errors.
//The DOMContentLoaded event fires when the browser has parsed the HTML but before images, CSS, or other resources are fully loaded.
// document.querySelector("selector") = Finds the first element that matches a CSS.


    function ajouterLigne() {
        // Create a new row."createElement"This creates a new <tr> (table row) element.
        const nouvelleLigne = document.createElement("tr");
        nouvelleLigne.classList.add("row");
        nouvelleLigne.innerHTML = `
            <td><input type="text" class="desc" placeholder="Description"></td>
            <td><input type="number" class="qte" value="1"></td>
            <td><input type="number" class="prix" value="0"></td>
            <td><input type="text" class="readonly total-ligne" value="0.00" readonly></td>
        `;
        // "appendChild" This inserts the new row into the <tbody>.
        tableBody.appendChild(nouvelleLigne);
    }


//Functions like remplirAuto and calculer use document.querySelectorAll to work with multiple rows.
    function remplirAuto() {
        const descriptions = ["Article A", "Article B", "Article C", "Article D"];
        document.querySelectorAll(".row").forEach(row => {
            const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
            const randomQte = Math.floor(Math.random() * 10) + 1;
            const randomPrix = Math.floor(Math.random() * 100) + 1;

            row.querySelector(".desc").value = randomDesc;
            row.querySelector(".qte").value = randomQte;
            row.querySelector(".prix").value = randomPrix;
            row.querySelector(".total-ligne").value = (randomQte * randomPrix).toFixed(2);
        });
    }

    function calculer() {
        let sousTotal = 0;
//querySelectorAll("selector") selects all elements matching a CSS selector.
        document.querySelectorAll(".row").forEach(row => {
            const qte = parseInt(row.querySelector(".qte").value) || 0; //parseInt or parseFloat converts current value to a number.
            const prix = parseFloat(row.querySelector(".prix").value) || 0;
            const totalLigne = qte * prix;
            row.querySelector(".total-ligne").value = totalLigne.toFixed(2); // This is for formats the num to 2 decimal places. 
            sousTotal += totalLigne;
        });

        const remise = parseFloat(remiseEl.value) || 0;
        const taxe = parseFloat(taxeEl.value) || 0;
        const fraisExpedition = parseFloat(fraisExpeditionEl.value) || 0;

        const sousTotalMoinsRemise = sousTotal - (sousTotal * remise / 100);
        const taxeTotale = sousTotalMoinsRemise * taxe / 100;
        const totalFinal = sousTotalMoinsRemise + taxeTotale + fraisExpedition;

        sousTotalEl.value = sousTotal.toFixed(2);
        totalFinalEl.value = totalFinal.toFixed(2);
    }

    function reset() {
        // Clear all rows except the first three and reset fields
        const rows = document.querySelectorAll("table tbody tr");
        rows.forEach((row, index) => {
            if (index < 3) {
                row.querySelector(".desc").value = "";
                row.querySelector(".qte").value = 1;
                row.querySelector(".prix").value = 0;
                row.querySelector(".total-ligne").value = "0.00";
            } else {
                row.remove();
            }
        });

        sousTotalEl.value = "0.00";
        remiseEl.value = "0";
        taxeEl.value = "10";
        fraisExpeditionEl.value = "0";
        totalFinalEl.value = "0.00";
    }
});
