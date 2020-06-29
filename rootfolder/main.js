$(document).ready(function () {
    $(".dropdown").click(function () {
        $(".social-box").slideToggle();
    });
    $("#advance-button").click(function () {
        window.location.href="#calc";
        $(".normal, .value1,.value2, .values p, #advance-button").hide();
        $(".value3, #normal-button, .advanced, .later").fadeIn();
    });
    $("#normal-button").click(function () {
        $(".normal, .value1,.value2, .values p, #advance-button").fadeIn();
        $(".value3, #normal-button, .advanced, .later").hide();
        window.location.href="#calc";
     });
    $("#add").click(function(){
        Add();
    });
    $("#sub").click(function(){
        Sub();
    });
    $("#mul").click(function(){
        Mul();
    });
    $("#divide").click(function(){
        Divide();
    });
    $("#square").click(function(){
        Square();
    });
    $("#sr").click(function () {
        Sroot();
    });
    $("#sr, #add, #sub, #mul, #divide, #square, .advanced").click(function () {
        $("#reload").show();
        window.location.href="#calc";
    });

    $("#reload, #reload-bmi").click(function () {
        location.reload();
    });
    $("#cal").click(function () {
        $(".details, #cal").hide();
        $("#bmi-cal").fadeIn();
        window.location.href="#bmi";
    });
    $("#result").click(function () {
        Bmi();
        $("#reload-bmi").show();
    });
});

function Add() {
    let val1 = parseInt($("#value1").val());
    let val2 = parseInt($("#value2").val());
    let result = val1 + val2;
    if (Number.isInteger(val1) && Number.isInteger(val2)){
        $(".operators").html("<h4>The result is " + result + "</h4>");
    }
    else {
        $(".operators").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $(".operators").html("<h4>Please enter a smaller number!</h4>");
    }
}
function Sub(){
  let result = val1 - val2;
  if (Number.isInteger(val1) && Number.isInteger(val2)){
        $(".operators").html("<h4>The result is " + result + "</h4>");
    }
    else {
        $(".operators").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $(".operators").html("<h4>Please enter a smaller number!</h4>");
    }
}
function Mul(){
  let val1 = parseInt($("#value1").val());
  let val2 = parseInt($("#value2").val());

  let result = val1 * val2;
  if (Number.isInteger(val1) && Number.isInteger(val2)){
        $(".operators").html("<h4>The result is " + result + "</h4>");
    }
    else {
        $(".operators").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $(".operators").html("<h4>Please enter a smaller number!</h4>");
    }
}
function Divide(){
  let val1 = parseInt($("#value1").val());
  let val2 = parseInt($("#value2").val());

  let result = val1 / val2;
  result = result.toFixed(2);
  if (Number.isInteger(val1) && Number.isInteger(val2)){
        $(".operators").html("<h4>The result is " + result + "</h4>");
    }
    else {
        $(".operators").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $(".operators").html("<h4>Please enter a smaller number!</h4>");
    }
}
function Square(){
  let val3 = parseInt($("#value3").val());

  let result = val3 * val3;
  if (Number.isInteger(val3)){
        $(".operators").html("<h4>The result is " + result + "</h4>");
    }
    else {
        $(".operators").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $(".operators").html("<h4>Please enter a smaller number!</h4>");
    }
}
function Sroot(){
  let val = parseInt($("#value3").val());

  let result = Math.sqrt(val);
  result = result.toFixed(2);
  if (Number.isInteger(val)){
        $(".operators").html("<h4>The result is " + result + "</h4>");
    }
    else {
        $(".operators").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $(".operators").html("<h4>Please enter a smaller number!</h4>");
    }
}
function Bmi(){
  let Weight = parseInt($("#weight").val());
  let Height = parseInt($("#height").val());
  let mHeight = Height/100;
  let res = mHeight * mHeight;
  let result = Weight / res;
  result = result.toFixed(2);
  if (Number.isInteger(Weight) && Number.isInteger(Height)){
      if(result < 18){
        $("#operators-bmi").html("<h4>Your result is " + result + ". You are underweight.</h4>");
    }
      if(result < 25 && result > 18){
          $("#operators-bmi").html("<h4>Your result is " + result + ". Your weight is normal.</h4>");
      }
      if(result < 30 && result > 25){
          $("#operators-bmi").html("<h4>Your result is " + result + ". You are overweight.</h4>");
      }
      if(result > 30){
          $("#operators-bmi").html("<h4>Your result is " + result + ". You are obese.</h4>");
      }
   }
    else {
        $("#operators-bmi").html("<h4>Please enter a valid number!</h4>");
    }
    if(result > 10000000 ){
        $("#operators-bmi").html("<h4>Please enter a smaller number!</h4>");
    }
}