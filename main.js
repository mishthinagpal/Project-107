function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ik0Tqtei4/model.json', {probabilityThreshold:0.7}, modelReady);

}
function modelReady(){
    classifier.classify(gotResults)
}function gotResults(error,results){
    if(error){
        console.error(error);
    }
        else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;


        result_count_dog=0
        result_count_cat=0
        result_count_cow=0
        result_count_lion=0

        document.getElementById("result_label").innerHTML='Detected voice is of - '+
        results[0].label;

    document.getElementById("result_confidence").innerHTML='Accuracy - '+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("
    +random_number_r+","+random_number_g+","+random_number_b+"";

    img=document.getElementById("ear");

    if(results[0].label=="Barking"){
        img.src='dog.jpeg';
        result_count_dog=1
    }
    else if(results[0].label=="Meowing"){
        img.src='cat.jpeg';
        result_count_cat=1
    }
    else if(results[0].label=="Roar"){
        img.src='lion.jpeg';
        result_count_lion=1
    }
    else if(results[0].label=='Mooing'){
        img.src='cow.jpeg';
        result_count_cow=1
    
    }

    else{
        img.src='ear.jpg.crdownload';
    }
}
}