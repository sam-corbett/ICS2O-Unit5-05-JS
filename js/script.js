// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-JS/sw.js", {
    scope: "/ICS2O-Unit5-05-JS/",
  })
}

/**
 * This function will determine the type of triangle.
 */
function myButtonClicked() {
  const lengthA = parseFloat(document.getElementById("side-a").value)
  const lengthB = parseFloat(document.getElementById("side-b").value)
  const lengthC = parseFloat(document.getElementById("side-c").value)

  // using the cosine law
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  if (sumOfAngles == 180) {
    if (angleA == angleB && angleB == angleC && angleA == angleC) {
      document.getElementById("triangle-type").innerHTML =
        "<p>This is an equilateral triangle.</p>"
    } else if (angleA == angleB || angleB == angleC || angleA == angleC) {
      document.getElementById("triangle-type").innerHTML =
        "<p>This is an isosceles triangle.</p>"
    } else {
      document.getElementById("triangle-type").innerHTML =
        "<p>This is an scalene triangle.</p>"
    }
  } else {
    document.getElementById("triangle-type").innerHTML =
      "<p>This is not a triangle.</p>"
  }
}
