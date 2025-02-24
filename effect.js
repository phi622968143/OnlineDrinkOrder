    let selectedDrink = "";
    let selectedSize = "";

    // 點選飲料卡片
    document.querySelectorAll(".drink-card").forEach(card => {
        card.addEventListener("click", function () {
            document.querySelectorAll(".drink-card").forEach(c => c.classList.remove("selected"));
            this.classList.add("selected");
            selectedDrink = this.getAttribute("data-drink");
        });
    });

    // 點選大小
    document.querySelectorAll(".size-option").forEach(option => {
        option.addEventListener("click", function () {
            document.querySelectorAll(".size-option").forEach(s => s.classList.remove("selected"));
            this.classList.add("selected");
            selectedSize = this.getAttribute("data-size");
        });
    });

    // 送出訂單
    document.getElementById("submit-btn").addEventListener("click", function () {
        if (selectedDrink === "" || selectedSize === "") {
            alert("請選擇飲料和大小！");
            return;
        }
    
        // 透過 Axios 發送訂單到後端
        axios.post("https://04e4-111-184-174-4.ngrok-free.app/order", {
            drink: selectedDrink,
            size: selectedSize
        })
        .then(response => {
            alert(`訂單已送出：${selectedDrink} - ${selectedSize}杯`);
        })
        .catch(error => {
            console.log("訂單送出失敗", error);
            alert("訂單送出失敗，請重試");
        });
    });
