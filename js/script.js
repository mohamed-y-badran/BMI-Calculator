    
function BMICAL(){
    
    var Gender = document.getElementById('Gender').value;
    var AGE = parseInt(document.getElementById('AGE').value);
    var Feet = parseInt(document.getElementById('Feet').value);
    var Inch = parseInt(document.getElementById('Inch').value);
    var Weight = parseFloat(document.getElementById('Weight').value);

    if(Gender !="Choose Gender" && !(isNaN(AGE)) && !(isNaN(Feet)) && !(isNaN(Inch)) && !(isNaN(Weight))) {
        var HeightM = ((Feet * 12) + Inch) * 0.0254
        var BMI = Weight / (HeightM**2)

        let Cat = ""
               

        if (BMI >30){
            Cat= "Your Cateogry is Obese"
        } else if (BMI >25) {
            Cat= "Your Cateogry is Over Weight"
        } else if (BMI >18.5) {
            Cat= "Your Cateogry is Normal"
        } else {
            Cat= "Your Cateogry is Underweight"
        }
            
        var result = document.getElementById('result')

        result.innerHTML = "Your BMI is " + BMI.toFixed(2) + "<br>" + Cat
        
    } else {
          alert('Add all Rquired Data')  
    }
}