let man = document.getElementById("radio_1.1");

let maxVolume = 0;

man.onclick = function(){
  maxVolume = 25;
}

let woman = document.getElementById("radio_1.2");

woman.onclick = function(){
  maxVolume = 18;
}

let isthmusMoreThan1sm = document.getElementById("radio_2.2");

isthmusMoreThan1sm.onclick = function () {
  alert("Рекомендуется дополнительно оценить объем перешейка и прибавить к объему двух долей. В данном калькуляторе этой опции нет.");
}


let button = document.getElementById ("button");

 function volumeCalculate() {
    if (maxVolume == 0) {
      alert ("Вы не выбрали пол");
      return false;
    }
    let lengthOfRightLobe = Number.parseFloat(document.getElementById("length1").value);
    let thicknessOfRightLobe = Number.parseFloat(document.getElementById("thickness1").value);
    let widthOfRightLobe = Number.parseFloat(document.getElementById("width1").value);
    let lengthOfLeftLobe = Number.parseFloat(document.getElementById("length2").value);
    let thicknessOfLeftLobe = Number.parseFloat(document.getElementById("thickness2").value);
    let widthOfLeftLobe = Number.parseFloat(document.getElementById("width2").value);
    let volumeOfRightLobe = lengthOfRightLobe * thicknessOfRightLobe * widthOfRightLobe * 0.479;
    let volumeOfLeftLobe = lengthOfLeftLobe * thicknessOfLeftLobe * widthOfLeftLobe * 0.479;
    let volumeOfThyroid = (volumeOfRightLobe + volumeOfLeftLobe).toFixed(2);
    if (isNaN(volumeOfThyroid)){
        alert("Укажите все размеры щитовидной железы, а также убедитесь, что размеры указаны в числовом формате.") 
      } else {
        document.getElementById ("result_1").innerHTML = volumeOfThyroid;
        document.getElementById("volume_1").style.backgroundColor = "#FFE4E1";
        if (volumeOfThyroid < maxVolume) {
          document.getElementById ("normal_volume1").removeAttribute ("hidden");
          let patologiclVolume = document.getElementById("patologic_volume1");
          if (!patologiclVolume.hasAttribute("hidden")) {
            patologiclVolume.setAttribute ("hidden","hidden");
          }
      } else {
         document.getElementById ("patologic_volume1").removeAttribute ("hidden");
         let normalVolume = document.getElementById("normal_volume1");
         if (!normalVolume.hasAttribute("hidden")) {
           normalVolume.setAttribute ("hidden", "hidden");
        }
       } 
    }
}

button.onclick = volumeCalculate;

// переменные меню
let thyroid_calculator = document.getElementById("thyroid_calculator");
let thyroid_measure = document.getElementById("thyroid_measure");
let thyroid_anatomy = document.getElementById("thyroid_anatomy");
let less5_kg = document.getElementById("less5_kg");
let more5_kg = document.getElementById("more5_kg");
let thyroid_protocol = document.getElementById("thyroid_protocol");
let video = document.getElementById("video");
let literature = document.getElementById("literature");

// переменные для main
let calculator = document.getElementById("calculator");
let sizes = document.getElementById("sizes");
let anatomy = document.getElementById("anatomy");
let weight_les_than_5kg = document.getElementById("weight_les_than_5kg");
let weight_more_than_5kg = document.getElementById("weight_more_than_5kg");
let protocol_gen = document.getElementById("protocol_gen");
let books = document.getElementById("books");
let thyroid_videos = document.getElementById("thyroid_videos");


function checkStyleAndDoItNone(array) {
  for (let i = 0; i < array.length; i++) {
    if (getComputedStyle(array[i]).display == "block") {
      array[i].style.display = "none";
    }
  }
}

thyroid_calculator.onclick = function() {
  calculator.style.display = "block";
  let array = [sizes, anatomy, weight_les_than_5kg, weight_more_than_5kg, protocol_gen, books, thyroid_videos];
  checkStyleAndDoItNone(array);
}


 thyroid_measure.onclick = function() {
  sizes.style.display = "block";
  let array = [calculator, anatomy, weight_les_than_5kg, weight_more_than_5kg, protocol_gen, books, thyroid_videos];
  checkStyleAndDoItNone(array);
}


 thyroid_anatomy.onclick = function() {
  anatomy.style.display = "block";
  let array = [calculator, sizes, weight_les_than_5kg, weight_more_than_5kg, protocol_gen, books, thyroid_videos];
  checkStyleAndDoItNone(array);
}


 less5_kg.onclick = function() {
  weight_les_than_5kg.style.display = "block";
  let array = [calculator, sizes, anatomy, weight_more_than_5kg, protocol_gen, books, thyroid_videos];
  checkStyleAndDoItNone(array);
}


 /* more5_kg.onclick = function() {
  weight_more_than_5kg.style.display = "block";
  let array = [calculator, sizes, anatomy, weight_les_than_5kg, protocol_gen, books, thyroid_videos];
  checkStyleAndDoItNone(array);
} */

 thyroid_protocol.onclick = function() {
  protocol_gen.style.display = "block";
  let array = [calculator, sizes, anatomy, weight_les_than_5kg, weight_more_than_5kg, books, thyroid_videos];
  checkStyleAndDoItNone(array);
}
 
 video.onclick = function() {
  thyroid_videos.style.display = "block";
  let array = [calculator, sizes, anatomy, weight_les_than_5kg, weight_more_than_5kg, protocol_gen, books];
  checkStyleAndDoItNone(array);
}


literature.onclick = function() {
 books.style.display = "block";
 let array = [calculator, sizes, anatomy, weight_les_than_5kg, weight_more_than_5kg, protocol_gen, thyroid_videos];
 checkStyleAndDoItNone(array);
}










