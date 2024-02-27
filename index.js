
    let data = []; // Ma'lumotlarni saqlash uchun massiv

    function addInfo() {
        let inputElement = document.getElementById("infoInput");
        let inputValue = inputElement.value.trim();
        console.log(inputValue);
        if (inputValue !== '') {
            data.push(inputValue); // Ma'lumotni massivga qo'shish
            inputElement.value = '';
            displayData(); // Ma'lumotlarni chiqarish
        } else {
            alert("Iltimos, ma'lumot kiritish!");
        }
    }

    function searchInfo() {
        let searchElement = document.getElementById("searchInput");
        let searchValue = searchElement.value.trim();
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ''; // Izlash natijalarini tozalash
        console.log(searchValue);

        if (searchValue !== '') {
            let found = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].toLowerCase().includes(searchValue.toLowerCase())) { // Kichik katta harf farqi bilan izlash
                    outputDiv.innerHTML += "<p>" + data[i] + "</p>"; // Izlash natijasini chiqarish
                    found = true;
                }
            }
            if (!found) {
                outputDiv.innerHTML = "<p>Ma'lumot topilmadi.</p>"; // Natija topilmadi xabari
            }
        } else {
            alert("Iltimos, qidirish so'zini kiriting!");
        }
    }

    function displayData() {
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ''; // Ma'lumotlarni chiqarishdan oldin bo'sh qilish
        for (let i = 0; i < data.length; i++) {
            outputDiv.innerHTML += "<p>" + data[i] + "</p>"; // Ma'lumotlarni chiqarish
        }
        console.log(outputDiv);
    }
    function clearData() {
      data = []; // Ma'lumotlarni tozalash
      displayData(); // Ekranga qo'shish
  }