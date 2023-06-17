window.addEventListener('load', solve);

function solve() {

        const [model, year, partName, partNum] = Array.from(document.querySelectorAll("input"));
        const condition = document.getElementById("condition");
        const nextBtn = document.getElementById("next-btn");
        const [partInfo, confirmOrder] = Array.from(document.querySelectorAll("ul"));
        const completeImg = document.getElementById("complete-img");
        const completeTex = document.getElementById("complete-text");

        nextBtn.addEventListener("click", addPart);

        function addPart(e) {
                e.preventDefault();
                if (model.value.trim() === "" || year.value.trim() === ""
                        || partName.value.trim() === "" || partNum.value.trim() === ""
                        || condition.value.trim() === "" || year.value < 1980 || year.value > 2023) return;

                const li = document.createElement("li");
                li.classList.add("part-content");
                const article = document.createElement("article");
                const pModel = document.createElement("p");
                pModel.textContent = `Car Model: ${model.value}`;
                const pYear = document.createElement("p");
                pYear.textContent = `Car Year: ${year.value}`;
                const pPartName = document.createElement("p");
                pPartName.textContent = `Part Name: ${partName.value}`;
                const pPartNum = document.createElement("p");
                pPartNum.textContent = `Part Number: ${partNum.value}`;
                const pCondition = document.createElement("p");
                pCondition.textContent = `Condition: ${condition.value}`;
                article.appendChild(pModel);
                article.appendChild(pYear);
                article.appendChild(pPartName);
                article.appendChild(pPartNum);
                article.appendChild(pCondition);
                const editBtn = document.createElement("button");
                editBtn.classList.add("edit-btn");
                editBtn.textContent = "Edit";
                editBtn.addEventListener("click", editFunc);
                const continueBtn = document.createElement("button");
                continueBtn.classList.add("continue-btn");
                continueBtn.textContent = "Continue";
                continueBtn.addEventListener("click", continueFunc);
                li.appendChild(article);
                li.appendChild(editBtn);
                li.appendChild(continueBtn);
                partInfo.appendChild(li);
                let modelF = model.value;
                let yearF = year.value;
                let partNameF = partName.value;
                let partNumF = partNum.value;
                let conditionF = condition.value;
                model.value = "";
                year.value = "";
                partName.value = "";
                partNum.value = "";
                condition.value = "";
                nextBtn.disabled = true;


                function editFunc() {
                        model.value = modelF;
                        year.value = yearF;
                        partName.value = partNameF;
                        partNum.value = partNumF;
                        condition.value = conditionF;
                        nextBtn.disabled = false;
                        li.remove();
                }

                function continueFunc() {
                        li.removeChild(editBtn);
                        li.removeChild(continueBtn);
                        const confirmBtn = document.createElement("button");
                        confirmBtn.classList.add("confirm-btn");
                        confirmBtn.textContent = "Confirm";
                        confirmBtn.addEventListener("click", confirmFunc);
                        const cancelBtn = document.createElement("button");
                        cancelBtn.classList.add("cancel-btn");
                        cancelBtn.textContent = "Cancel";
                        cancelBtn.addEventListener("click", cancelFunc);
                        li.appendChild(confirmBtn);
                        li.appendChild(cancelBtn);
                        confirmOrder.appendChild(li);
                }

                function cancelFunc() {
                        li.remove();
                        nextBtn.disabled = false;
                }

                function confirmFunc() {
                        li.remove();
                        completeImg.style.visibility = "visible";
                        completeTex.textContent = "Part is Ordered!";
                        nextBtn.disabled = false;
                }
        }
}




