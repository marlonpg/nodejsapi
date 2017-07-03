angular.module('app').factory('factoryService',function($http){
	var tpl_monster = {Level:0, Hp:0, Attack:0, Defense:0, MagicAttack:0, MagicDefense:0, Speed:0, CriticalChance:0, CriticalDamage:0, Evasion:0, Accuracy:0};
	var updateMonster = false;
	var updateType = false;
    var updateTarget = false;
    var updateKeyElement = false;
	var skills = [{keyElement:'', skillName:'', type:[],   BaseAttribute:0, Accuracy:0}];
	var atribute = [{Name:''}];
	var type = {Name:''};
    var target = {Name:''};
    var keyElement = {Name:''};
    return{

        setTarget:function(tar){
            target = tar;
        },

        getTarget:function(){
            return target;
        },

        setKeyElement:function(key){
            keyElement = key;
        },

        getKeyElement:function(){
            return keyElement;
        },

        setTpl_monster:function(str){
            tpl_monster = str;
        },

        getTpl_monster:function(){
            return tpl_monster;
        },
		
		setType:function(t){
            type = t;
        },

        getType:function(){
            return type;
        },
		
		setSkills:function(str){
            skills = str;
        },

        getSkills:function(){
            return skills;
        },
		
		setAtribute:function(atr){
            atribute = atr;
        },

        getAtribute:function(){
            return atribute;
        },
		
		setMonsterUpdate: function(up){
			updateMonster = up;
		},
		
		getMonsterUpdate: function(){
			return updateMonster;
		},
		
		setTypeUpdate: function(up){
			updateType = up;
		},
		
		getTypeUpdate: function(){
			return updateType;
		},
        setTargetUpdate: function(up){
			updateTarget = up;
		},
		
		getTargetUpdate: function(){
			return updateTarget;
		},
        setKeyElementUpdate: function(up){
			updateKeyElement = up;
		},
		
		getKeyElementUpdate: function(){
			return updateKeyElement;
		}

    }
});