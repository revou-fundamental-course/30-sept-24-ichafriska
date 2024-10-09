function convertToF() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        alert("Masukkan nilai yang valid untuk Celsius!");
        return;
    }
    
    let fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    
    document.getElementById("calculation").value = `${celsius}°C * (1.8) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

function reverseConversion() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan nilai yang valid untuk Fahrenheit!");
        return;
    }

    let celsius = (fahrenheit - 32) * 1.8;
    document.getElementById("celsius").value = celsius.toFixed(2);

    document.getElementById("calculation").value = `${fahrenheit}°F - 32 * (1.8) = ${celsius.toFixed(2)}°C`;
}
