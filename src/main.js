import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Title from './img/title.png';
import { Monster } from './monsterFarm.js';

let title = document.getElementById('title');
title.src = Title;

$(document).ready(function() {
  $("#start").click(function() {
    $("#gameBefore").hide();
    $("#gamePlay").show();
    setInterval(attributeTracker, 1000);
  });

    let monsterList = [];
    console.log(monsterList);

  $("#farm").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let type = $("#monsters").val();
    let newMonster = new Monster(name, type);
    monsterList.push(newMonster);
    newMonster.setHunger();
    newMonster.setThirst();
    newMonster.setSleep();
    let num = 1;
    let itemNum = 3;
    monsterList.forEach(function(monster) {
      $("#name" + num).html(monster.name);
      $("#type" + num).html(monster.type);
      $("#hunger" + num).html(monster.hunger);
      $("#sleep" + num).html(monster.sleep);
      $("#thirst" + num).html(monster.thirst);
      $("#item" + itemNum).show();
      num++;
      itemNum++;
    });
  });

    // $("#hunger1").html(this.hunger);
    // $("#sleep1").html(this.sleep);
    // $("#thirst1").html(this.thirst);

  function attributeTracker() {
    let num = 1;
    let itemNum = 3;
    monsterList.forEach(function(monster) {
      $("#name" + num).text(monster.name);
      $("#type" + num).text(monster.type);
      $("#hunger" + num).text(monster.hunger);
      $("#sleep" + num).text(monster.sleep);
      $("#thirst" + num).text(monster.thirst);
      num++;
      itemNum++;
    });
    }


});
