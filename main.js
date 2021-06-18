prediction_1 = "";
prediction_2 = "";


Webcam.set({
    width:350,
    height:300,
    Image_format:"jpg",
    Png_quality:500,
}
);

camera=document.getElementById("camera_preview");

Webcam.attach("#camera_preview");

function Takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='IMAGE_MY' src='"+data_uri+"'>";
})
}

console.log("ml5.version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sT37CNwRG/model.json", model_loaded);

function model_loaded() {
    console.log("Model loaded successfully");
}

function identity(){
    img = document.getElementById("IMAGE_MY");
    classifier.classify(img, Getting_result);  
}

function speak() {
    var synth = window.speechSynthesis; 
    var data_1 = "The first prediction is" + prediction_1;
    var data_2 = "And the second Prediction is" + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(data_1 + data_2);
    synth.speak(utterthis);
}



function Getting_result( error, result){
    if (error) {
        console.error(error);
    } 
    
    else {
        console.log(result);
        document.getElementById("result_div_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_div_emotion_name2").innerHTML=result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;

        speak();

        if (result[0].label == "Thumbs up") {
            document.getElementById("update_emoji").innerHTML= "&#128077;";
        }
        if (result[0].label == "Thumbs Down") {
            document.getElementById("update_emoji").innerHTML= "&#128078;";
        }
    
        if (result[0].label == "Good") {
            document.getElementById("update_emoji").innerHTML= "&#128076;";
        }
    
       
        if (result[0].label == "Yo") {
            document.getElementById("update_emoji").innerHTML= "&#129304;";
        }

        if (result[1].label == "Thumbs up ") {
            document.getElementById("update_emoji2").innerHTML= "&#128077;";
        }
        if (result[1].label == "Thumbs Down") {
            document.getElementById("update_emoji2").innerHTML= "&#128078;";
        }
        if (result[1].label == "Good") {
            document.getElementById("update_emoji2").innerHTML= "&#128076;";
        }
        
        if (result[1].label == "Yo") {
            document.getElementById("update_emoji2").innerHTML= "&#129304;";
    }
}
}
