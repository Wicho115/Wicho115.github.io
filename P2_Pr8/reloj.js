export function obtenerReloj(){
    let date = new Date();
    let seconds = date.getSeconds().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let militarHour = date.getHours();

    let isPm = militarHour % 12 > 0;
    let amOrPm = isPm ? "pm" : "am";
    let hours = `${isPm ? militarHour % 12 : militarHour}`.padStart(2, "0");

    return `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
}

//Coloco el intervalo en 1001, para poder ver exactamente cuando ya cambio el segundo
