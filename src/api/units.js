/*
--Unit attributes--
var type;
var special;
var name;
var ability;
var fly;
var swim;
var injured;
*/

const units = {
  generic_hero: {type:"hero"},
  generic_army: {type:"army"},
  generic_monster: {type:"monster"},
  jason: {type:"hero",special:"y",name:"Jason",swim:"y"},
  minotaur: {type:"monster",special:"y",name:"Minotaur",ability:"cleave"}
}

export default units;
