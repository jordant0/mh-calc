webpackJsonp([1],{"7/Rd":function(t,e){},Fkv4:function(t,e){},NFnT:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(t){i("7/Rd")},null,null).exports,o=i("/ocq"),r={1:{name:"Great Sword",category:"blademaster"},2:{name:"Long Sword",category:"blademaster"},3:{name:"Sword & Shield",category:"blademaster"},4:{name:"Dual Blades",category:"blademaster"},5:{name:"Hammer",category:"blademaster"},6:{name:"Hunting Hon",category:"blademaster"},7:{name:"Lance",category:"blademaster"},8:{name:"Gunlance",category:"blademaster"},9:{name:"Switch Axe",category:"blademaster"},10:{name:"Charge Blade",category:"blademaster"},11:{name:"Insect Glaive",category:"blademaster"},12:{name:"Light Bowgun",category:"gunner"},13:{name:"Heavy Bowgun",category:"gunner"},14:{name:"Bow",category:"bow"}},l={0:{name:"Orange",multiplier:.5},1:{name:"Red",multiplier:.75},2:{name:"Yellow",multiplier:1},3:{name:"Green",multiplier:1.05},4:{name:"Blue",multiplier:1.2},5:{name:"White",multiplier:1.32}},c={0:{name:"None",multiplier:1},1:{name:"Close Range",multiplier:1.18},2:{name:"Power",multiplier:1.35}},u={"(None)":0,Attack:1,Affinity:2},f={name:"WeaponInput",props:{weapon:Object},data:function(){return{weaponList:r,sharpnessList:l,coatingList:c,augmentList:u}},computed:{typeInfo:function(){return r[this.weapon.type]},showSharpness:function(){return"blademaster"===this.typeInfo.category},showCoating:function(){return"bow"===this.typeInfo.category},showActivation:function(){return this.showSharpness||this.showCoating}},methods:{flipSign:function(){this.weapon.affinity=-this.weapon.affinity}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weapon-info bordered-box"},[i("form",{staticClass:"weapon-input"},[i("div",{staticClass:"weapon-stats"},[i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Weapon:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.weapon.type,expression:"weapon.type"}],staticClass:"input-field type-field",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.weapon,"type",e.target.multiple?i:i[0])}}},t._l(t.weaponList,function(e,a){return i("option",{domProps:{value:a}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))]),t._v(" "),i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Raw")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.weapon.raw,expression:"weapon.raw",modifiers:{number:!0}}],staticClass:"input-field",attrs:{type:"number"},domProps:{value:t.weapon.raw},on:{input:function(e){e.target.composing||t.$set(t.weapon,"raw",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Affinity")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.weapon.affinity,expression:"weapon.affinity",modifiers:{number:!0}}],staticClass:"affinity-input input-field",attrs:{type:"number",min:-100,max:100},domProps:{value:t.weapon.affinity},on:{input:function(e){e.target.composing||t.$set(t.weapon,"affinity",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v("%\n        ")])]),t._v(" "),i("a",{staticClass:"convert-to-negative",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.flipSign(e)}}},[t._v("Flip sign")]),t._v(" "),t.showSharpness?i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Sharpness")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.weapon.sharpness,expression:"weapon.sharpness"}],staticClass:"input-field",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.weapon,"sharpness",e.target.multiple?i:i[0])}}},t._l(t.sharpnessList,function(e,a){return i("option",{domProps:{value:a}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))]):t._e(),t._v(" "),t.showCoating?i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Coating")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.weapon.coating,expression:"weapon.coating"}],staticClass:"input-field coating-field",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.weapon,"coating",e.target.multiple?i:i[0])}}},t._l(t.coatingList,function(e,a){return i("option",{domProps:{value:a}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))]):t._e(),t._v(" "),t.showActivation?i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Activation:")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.weapon.activation,expression:"weapon.activation"}],staticClass:"input-field activation-input",attrs:{type:"number",min:0,max:100},domProps:{value:t.weapon.activation},on:{input:function(e){e.target.composing||t.$set(t.weapon,"activation",e.target.value)}}}),t._v("%\n        ")])]):t._e()]),t._v(" "),i("div",{staticClass:"weapon-argments input-item"},[i("span",{staticClass:"input-label"},[t._v("Augments")]),t._v(" "),t._l(t.weapon.augments,function(e,a){return i("select",{directives:[{name:"model",rawName:"v-model",value:t.weapon.augments[a],expression:"weapon.augments[index]"}],staticClass:"input-field",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.weapon.augments,a,e.target.multiple?i:i[0])}}},t._l(t.augmentList,function(e,a){return i("option",{domProps:{value:e}},[t._v("\n          "+t._s(a)+"\n        ")])}))})],2)])])},staticRenderFns:[]};var d=i("VU/8")(f,v,!1,function(t){i("yxD0")},null,null).exports,m=i("gRE1"),p=i.n(m),h=i("VU/8")({methods:{findIdFromList:function(t,e){return e.findIndex(function(e){return e.id===t})},findFromList:function(t,e){var i=this.findIdFromList(t,e);return i>=0?e[i]:null},findItemIndex:function(t){return this.findIdFromList(t,this.items)},findItem:function(t){return this.findFromList(t,this.items)},findSkillIndex:function(t){return this.findIdFromList(t,this.skills)},findSkill:function(t){return this.findFromList(t,this.skills)}}},null,!1,null,null,null).exports,w={methods:{roundToDecimal:function(t,e){void 0===e&&(e=this.settings.precision||2);var i=Math.pow(10,e);return Math.round(t*i)/i}}},g=i("VU/8")(w,null,!1,null,null,null).exports,y=i("mvHQ"),C=i.n(y),_={methods:{deepClone:function(t){return JSON.parse(C()(t))},saveToLocalStorage:function(t,e){window.localStorage&&window.localStorage.setItem(t,C()(e))},loadFromLocalStorage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(window.localStorage){var i=window.localStorage.getItem(t);if(i)return JSON.parse(i)}return e}}},k=i("VU/8")(_,null,!1,null,null,null).exports,S={0:{name:"Critical Boost",defaultActiviation:100,fixedActivation:!0,levels:[1,2,3]},1:{name:"Weakness Exploit",defaultActiviation:100,levels:[{affinityModifier:.15},{affinityModifier:.3},{affinityModifier:.5}]},2:{name:"Maximum Might",defaultActiviation:100,levels:[{affinityModifier:.1},{affinityModifier:.2},{affinityModifier:.3}]},3:{name:"Attack Boost",defaultActiviation:100,fixedActivation:!0,levels:[{rawModifier:3},{rawModifier:6},{rawModifier:9},{rawModifier:12,affinityModifier:.05},{rawModifier:15,affinityModifier:.05},{rawModifier:18,affinityModifier:.05},{rawModifier:21,affinityModifier:.05}]},4:{name:"Critical Eye",defaultActiviation:100,fixedActivation:!0,levels:[{affinityModifier:.03},{affinityModifier:.06},{affinityModifier:.1},{affinityModifier:.15},{affinityModifier:.2},{affinityModifier:.25},{affinityModifier:.3}]},5:{name:"Agitator",defaultActiviation:50,levels:[{rawModifier:4,affinityModifier:.03},{rawModifier:8,affinityModifier:.06},{rawModifier:12,affinityModifier:.09},{rawModifier:16,affinityModifier:.12},{rawModifier:20,affinityModifier:.15}]},6:{name:"Peak Performance",defaultActiviation:25,levels:[{rawModifier:5},{rawModifier:10},{rawModifier:15}]},7:{name:"Critical Draw",defaultActiviation:100,levels:[{affinityModifier:.3},{affinityModifier:.6},{affinityModifier:1}]},8:{name:"Airborne",defaultActiviation:10,levels:[{affinityModifier:.1}]},9:{name:"Latent Power",defaultActiviation:30,levels:[{affinityModifier:.1},{affinityModifier:.2},{affinityModifier:.3},{affinityModifier:.4},{affinityModifier:.5}]},10:{name:"Resentment",defaultActiviation:10,levels:[{rawModifier:5},{rawModifier:10},{rawModifier:15},{rawModifier:20},{rawModifier:25}]},11:{name:"Non-elemental Boost",defaultActiviation:100,fixedActivation:!0,levels:[1]}},b={0:{name:"Power Charm",defaultActiviation:100,fixedActivation:!0,effect:{rawModifier:6}},1:{name:"Power Talon",defaultActiviation:100,fixedActivation:!0,effect:{rawModifier:9}},2:{name:"Demon Drug",defaultActiviation:100,effect:{rawModifier:5},itemCategory:1},3:{name:"Mega Demon Drug",defaultActiviation:100,effect:{rawModifier:7},itemCategory:1},4:{name:"Might Seed",defaultActiviation:30,effect:{rawModifier:10},itemCategory:2},5:{name:"Might Pill",defaultActiviation:5,effect:{rawModifier:25},itemCategory:2},6:{name:"Demon Powder",defaultActiviation:30,effect:{rawModifier:10}},7:{name:"Canteen - Attack Up (S)",defaultActiviation:100,effect:{rawModifier:5},itemCategory:3},8:{name:"Canteen - Attack Up (M)",defaultActiviation:100,effect:{rawModifier:10},itemCategory:3},9:{name:"Canteen - Attack Up (L)",defaultActiviation:100,effect:{rawModifier:15},itemCategory:3},10:{name:"Affinity Booster",defaultActiviation:30,effect:{affinityModifier:.5}},11:{name:"Evasion Mantle",defaultActiviation:5,effect:{rawBoost:.3}},12:{name:"Hunting Horn - Self Improvement",defaultActiviation:100,effect:{rawBoost:.15}},13:{name:"Hunting Horn - Attack Up (S)",defaultActiviation:75,effect:{rawBoost:.5},itemCategory:4},14:{name:"Hunting Horn - Attack Up (M)",defaultActiviation:75,effect:{rawBoost:.1},itemCategory:4},15:{name:"Hunting Horn - Attack Up (L)",defaultActiviation:75,effect:{rawBoost:.15},itemCategory:4},16:{name:"Hunting Horn - Attack Up (XL)",defaultActiviation:75,effect:{rawBoost:.25},itemCategory:4},17:{name:"Palico Coral Orchestra - Attack Up",defaultActiviation:10,effect:{rawBoost:.15}}},M={name:"Calculator",mixins:[h,g,k],props:{weapon:Object,skills:Array,items:Array,finalRaw:Number,settings:{type:Object,default:{}}},created:function(){this.specialSkills={criticalBoost:0,nonElemBoost:11},this.categoriesQueue=[]},computed:{debugOn:function(){return this.settings.debug},verboseOn:function(){return this.debugOn&&this.settings.verbose},attackAugmentsBonus:function(){return 5*this.getAugmentCount(u.Attack)},affinityAugmentsBonus:function(){var t=this.getAugmentCount(u.Affinity);return t<1?0:1===t?10:10+5*(t-1)},weaponRaw:function(){var t=this.weapon.raw+this.attackAugmentsBonus;return this.findSkill(this.specialSkills.nonElemBoost)?1.1*t:t},affinity:function(){return(this.weapon.affinity+this.affinityAugmentsBonus)/100},affinityMultiplier:function(){var t=this.findSkill(this.specialSkills.criticalBoost);return t?.25+.05*t.level:.25},weaponCategory:function(){return r[this.weapon.type].category},middleMultiplierLevel:function(){return"blademaster"===this.weaponCategory?this.weapon.sharpness:"bow"===this.weaponCategory?this.weapon.coating:0},previousMultiplierLevel:function(){var t=this.middleMultiplierLevel-1;return t<0&&(t=0),t},variableMiddleMultiplier:function(){return"gunner"!==this.weaponCategory&&this.weapon.activation<100&&this.middleMultiplierLevel!==this.previousMultiplierLevel},skillsForCalculation:function(){var t=this;return this.skills.filter(function(e){return-1===p()(t.specialSkills).indexOf(e.id)&&e.activation>0})},fixedSkills:function(){return this.skillsForCalculation.filter(function(t){return t.activation>=100})},variableSkills:function(){return this.skillsForCalculation.filter(function(t){return t.activation<100})},itemsForCalculation:function(){return this.items.filter(function(t){return t.activation>0})},fixedItems:function(){return this.itemsForCalculation.filter(function(t){return t.activation>=100})},variableItems:function(){return this.itemsForCalculation.filter(function(t){return t.activation<100})},fixedBonus:function(){var t=0,e=0,i=1;this.categoriesQueue={},this.verboseOn&&console.log("[ Calculating fixed raw and affinity ]");for(var a=0;a<this.fixedItems.length;a++){var n=this.fixedItems[a],s=this.adjustedItemBonus(n);t+=s.raw,e+=s.affinity,i*=s.rawBoost}for(a=0;a<this.fixedSkills.length;a++){var o=this.fixedSkills[a],r=this.getDataForSkill(o);t+=r.raw,e+=r.affinity}return{raw:t,affinity:e,rawBoost:i}},finalAverageRaw:function(){var t=0,e=this.variableItems.length+this.variableSkills.length;if(this.variableMiddleMultiplier&&(e+=1),e<1)t=this.averageRaw(this.fixedBonus.rawBoost,this.fixedBonus.raw,this.middleMultiplierLevel,this.fixedBonus.affinity);else{this.verboseOn&&console.log("[ Calculating variable raw and affinity ]");for(var i=Math.pow(2,e),a=0,n=this.deepClone(this.categoriesQueue),s=0;s<i;s++){var o=this.convertToDecimal(s,e),r=this.getBonusForConfig(o);this.categoriesQueue=this.deepClone(n),this.debugOn&&console.log("Calculating raw for configuration "+o+". Chance: "+100*r.chance+"%"),r.chance>0&&(a+=this.averageRaw(r.rawBoost,r.raw,r.middleMultiplierLevel,r.affinity)*r.chance)}t=a}return t!==this.finalRaw&&this.$emit("updated-final-raw",t),t},displayFixeRaw:function(){return this.roundToDecimal(this.weaponRaw*this.fixedBonus.rawBoost+this.fixedBonus.raw,0)},displayFixedAffinity:function(){return this.roundToDecimal(100*(this.affinity+this.fixedBonus.affinity))},affinityClass:function(){var t=["damage-number"];return(this.displayFixedAffinity<0||this.displayFixedAffinity>100)&&t.push("affinity-overflow"),t},roundedFinalRaw:function(){return this.roundToDecimal(this.finalAverageRaw)}},methods:{getAugmentCount:function(t){return this.weapon.augments.filter(function(e){return e===t}).length},convertToDecimal:function(t,e){var i=(t>>>0).toString(2);return""+"0".repeat(e-i.length)+i},sharpnessMultiplier:function(t){return l[t].multiplier},coatingMultiplier:function(t){return c[t].multiplier},middleMultiplier:function(t){return"blademaster"===this.weaponCategory?this.sharpnessMultiplier(t):"bow"===this.weaponCategory?this.coatingMultiplier(t):1},averageRaw:function(t,e,i,a){var n=this.affinityMultiplier,s=this.adjustAffinity(this.affinity+a),o=this.middleMultiplier(i);s<0&&(n=.25);var r=(this.weaponRaw*t+e)*o*(1+s*n);return this.settings.debug&&console.log("> ("+this.weaponRaw+" * "+t+" + "+e+") * "+o+" * (1 + ("+s+" * "+n+")) = "+r),r},adjustAffinity:function(t){return t=Math.min(1,t),t=Math.max(-1,t)},getBonusForConfig:function(t){var e=0,i=this.fixedBonus.raw,a=this.fixedBonus.affinity,n=this.fixedBonus.rawBoost,s=this.middleMultiplierLevel,o=1;this.variableMiddleMultiplier&&(c=this.weapon.activation/100,"1"===t[e]?(s=this.middleMultiplierLevel,o*=c):(s=this.previousMultiplierLevel,o*=1-c),e++);for(var r=0;r<this.variableItems.length;r++){var l=this.variableItems[r],c=l.activation/100;if("1"===t[e]){var u=this.adjustedItemBonus(l);i+=u.raw,a+=u.affinity,n*=u.rawBoost,o*=c}else o*=1-c;e++}for(r=0;r<this.variableSkills.length;r++){var f=this.variableSkills[r];c=f.activation/100;if("1"===t[e]){var v=this.getDataForSkill(f);i+=v.raw,a+=v.affinity,o*=c}else o*=1-c;e++}return{raw:i,affinity:a,rawBoost:n,middleMultiplierLevel:s,chance:o}},getDataForSkill:function(t){var e=S[t.id],i=e.levels[t.level-1].rawModifier||0,a=e.levels[t.level-1].affinityModifier||0;return this.verboseOn&&console.log('Checking data for skill "'+e.name+'" lv '+t.level+" | Raw: "+i+" | Affinity: "+a),{raw:i,affinity:a}},getDataForItem:function(t){var e=b[t.id],i=e.effect.rawModifier||0,a=e.effect.affinityModifier||0,n=1;return e.effect.rawBoost&&(n=1+e.effect.rawBoost),this.verboseOn&&console.log('Checking data for item "'+e.name+'" | Raw: '+i+" | Affinity: "+a+" | Raw Boost: "+n),{raw:i,affinity:a,rawBoost:n}},adjustedItemBonus:function(t){var e=b[t.id],i=this.getDataForItem(t);if(e.itemCategory)if(this.categoriesQueue[e.itemCategory])for(var a=this.categoriesQueue[e.itemCategory],n=[{name:"raw",multiplicative:!1},{name:"affinity",multiplicative:!1},{name:"rawBoost",multiplicative:!0}],s=0;s<n.length;s++){var o=n[s],r=o.multiplicative?1:0,l=a[o.name]||r,c=i[o.name]||r;c>r&&l>r&&(l>=c?(this.verboseOn&&console.log("Stronger "+o.name+' effect for item "'+e.name+'" already exists, nullifying bonus'),i[o.name]=r):(o.multiplicative?i[o.name]=c/l:i[o.name]=c-l,this.verboseOn&&console.log("Weaker "+o.name+' effect for item "'+e.name+'" already exists at '+l+". Applying a difference of "+i[o.name]),this.categoriesQueue[e.itemCategory][o.name]=c))}else this.verboseOn&&console.log("Initializing category queue for category "+t.itemCategory),this.categoriesQueue[e.itemCategory]=this.deepClone(i);return i}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"damage-display bordered-box"},[i("div",{staticClass:"damage-item damage-detail"},[i("span",{staticClass:"damage-label"},[t._v("Fixed raw:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(t.displayFixeRaw))])]),t._v(" "),i("div",{staticClass:"damage-item damage-detail"},[i("span",{staticClass:"damage-label"},[t._v("Fixed affinity:")]),t._v(" "),i("span",{class:t.affinityClass},[t._v(t._s(t.displayFixedAffinity)+"%")])]),t._v(" "),i("div",{staticClass:"damage-item damage-detail"},[i("span",{staticClass:"damage-label"},[t._v("Affinity multiplier:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(t.affinityMultiplier))])]),t._v(" "),i("div",{staticClass:"damage-item damage-final"},[i("span",{staticClass:"damage-label"},[t._v("Average raw:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(this.roundedFinalRaw))])])])},staticRenderFns:[]};var x=i("VU/8")(M,A,!1,function(t){i("ry4F")},null,null).exports,R=i("T1ft"),I=i.n(R),F=i("W3Iv"),D=i.n(F),L={methods:{convertToOptions:function(t){return D()(t).map(function(t){return{label:t[1].name,value:parseInt(t[0])}}).sort(function(t,e){var i=t.label.toUpperCase(),a=e.label.toUpperCase();return i<a?-1:i>a?1:0})}}},B=i("VU/8")(L,null,!1,null,null,null).exports,$={name:"SkillSelector",mixins:[B],components:{VueSelect:I.a},data:function(){return{skillList:this.convertToOptions(S)}},methods:{skillSelected:function(t){this.$emit("skill-added",t.value)}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skill-selector"},[e("div",{staticClass:"skills-input input-item select-wrapper"},[e("span",{staticClass:"input-label"},[this._v("\n      Select skills\n    ")]),this._v(" "),e("vue-select",{attrs:{placeholder:"Type to search...",options:this.skillList},on:{input:this.skillSelected}})],1)])},staticRenderFns:[]},U=i("VU/8")($,N,!1,null,null,null).exports,O=i("Gu7T"),E=i.n(O),H={name:"SkillDisplay",props:{skill:Object},computed:{skillData:function(){return S[this.skill.id]},skillName:function(){return this.skillData.name},skillLevels:function(){return[].concat(E()(Array(this.skillData.levels.length).keys())).map(function(t){return t+1})},enableActivationEdit:function(){return!this.skillData.fixedActivation}},methods:{updateSkillLevel:function(t){this.$emit("skill-level-update",this.skill.id,parseInt(t.target.value))},updateSkillActivation:function(t){this.skill.activation>100&&(this.skill.activation=100),this.skill.activation<0&&(this.skill.activation=0),this.$emit("skill-level-activation",this.skill.id,parseInt(t.target.value))},removeSkill:function(){this.$emit("skill-remove",this.skill.id)}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-display-item bordered-box dashed-border"},[i("div",{staticClass:"skill-header"},[i("div",{staticClass:"skill-name"},[t._v("\n      "+t._s(t.skillName)+"\n    ")]),t._v(" "),i("a",{staticClass:"remove-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeSkill(e)}}},[t._v("x")])]),t._v(" "),i("div",{staticClass:"skill-edit"},[i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Level:")]),t._v(" "),i("select",{staticClass:"input-field",attrs:{type:"number"},domProps:{value:t.skill.level},on:{change:t.updateSkillLevel}},t._l(t.skillLevels,function(e){return i("option",[t._v("\n          "+t._s(e)+"\n        ")])}))]),t._v(" "),t.enableActivationEdit?i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Activation:")]),t._v(" "),i("div",[i("input",{staticClass:"activation-input input-field",attrs:{type:"number",min:0,max:100},domProps:{value:t.skill.activation},on:{change:t.updateSkillActivation}}),t._v("%\n      ")])]):t._e()])])},staticRenderFns:[]};var P={name:"SkillControl",components:{SkillSelector:U,SkillDisplay:i("VU/8")(H,T,!1,function(t){i("NNZn")},null,null).exports},mixins:[h],props:{skills:Array},methods:{addSkill:function(t){if(this.findSkillIndex(t)<0){var e=this.skills;e.push({id:t,level:1,activation:S[t].defaultActiviation}),this.$emit("update:skills",e)}},updateSkillLevel:function(t,e){var i=this.findSkillIndex(t);if(i>=0&&this.skills[i].level!==e){var a=this.skills;a[i].level=e,this.$emit("update:skills",a)}},updateSkillActivation:function(t,e){var i=this.findSkillIndex(t);if(e>100&&(e=100),e<0&&(e=0),i>=0&&this.skills[i].activation!==e){var a=this.skills;a[i].activation=e,this.$emit("update:skills",a)}},removeSkill:function(t){var e=this.findSkillIndex(t);if(e>=0){var i=this.skills;i.splice(e,1),this.$emit("update:skills",i)}}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-controls bordered-box"},[i("skill-selector",{on:{"skill-added":t.addSkill}}),t._v(" "),i("div",{staticClass:"skills-display"},t._l(t.skills,function(e){return i("skill-display",{key:e.id,attrs:{skill:e},on:{"skill-level-update":t.updateSkillLevel,"skill-level-activation":t.updateSkillActivation,"skill-remove":t.removeSkill}})}))],1)},staticRenderFns:[]};var V=i("VU/8")(P,j,!1,function(t){i("Fkv4")},null,null).exports,Q={name:"ItemSelector",mixins:[B],components:{VueSelect:I.a},data:function(){return{itemList:this.convertToOptions(b)}},methods:{itemSelected:function(t){this.$emit("item-added",t.value)}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-selector"},[e("div",{staticClass:"items-input input-item select-wrapper"},[e("span",{staticClass:"input-label"},[this._v("\n      Select item/buff\n    ")]),this._v(" "),e("vue-select",{attrs:{placeholder:"Type to search...",options:this.itemList},on:{input:this.itemSelected}})],1)])},staticRenderFns:[]},G=i("VU/8")(Q,W,!1,null,null,null).exports,q={1:"Demon Drug/Mega Demon Drug",2:"Might Seed/Might Pill",3:"Canteen Meals - Attack Up",4:"Hunting Horn Songs - Attack Up"},J={name:"ItemDisplay",props:{item:Object},computed:{itemData:function(){return b[this.item.id]},itemName:function(){return this.itemData.name},enableActivationEdit:function(){return!this.itemData.fixedActivation},showCategory:function(){return this.itemData.itemCategory},itemCategory:function(){return q[this.itemData.itemCategory]}},methods:{updateItemActivation:function(t){this.item.activation>100&&(this.item.activation=100),this.item.activation<0&&(this.item.activation=0),this.$emit("item-level-activation",this.item.id,parseInt(t.target.value))},removeItem:function(){this.$emit("item-remove",this.item.id)}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-display-item bordered-box dashed-border"},[i("div",{staticClass:"item-header"},[i("div",{staticClass:"item-name"},[t._v("\n      "+t._s(t.itemName)+"\n    ")]),t._v(" "),i("a",{staticClass:"remove-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeItem(e)}}},[t._v("x")])]),t._v(" "),t.enableActivationEdit?i("div",{staticClass:"input-item item-edit"},[i("span",{staticClass:"input-label"},[t._v("Activation:")]),t._v(" "),i("div",[i("input",{staticClass:"activation-input input-field",attrs:{type:"number",min:0,max:100},domProps:{value:t.item.activation},on:{change:t.updateItemActivation}}),t._v("%\n    ")])]):t._e(),t._v(" "),t.showCategory?i("div",{staticClass:"item-category"},[i("span",{staticClass:"input-label category-label"},[t._v("Category:")]),t._v(" "),i("span",{staticClass:"category-name"},[t._v(t._s(t.itemCategory))])]):t._e()])},staticRenderFns:[]};var Y={name:"ItemControl",components:{ItemSelector:G,ItemDisplay:i("VU/8")(J,X,!1,function(t){i("mjGH")},null,null).exports},mixins:[h],props:{items:Array},methods:{addItem:function(t){if(this.findItemIndex(t)<0){var e=this.items;e.push({id:t,activation:b[t].defaultActiviation}),this.$emit("update:items",e)}},updateItemActivation:function(t,e){var i=this.findItemIndex(t);if(e>100&&(e=100),e<0&&(e=0),i>=0&&this.items[i].activation!==e){var a=this.items;a[i].activation=e,this.$emit("update:items",a)}},removeItem:function(t){var e=this.findItemIndex(t);if(e>=0){var i=this.items;i.splice(e,1),this.$emit("update:items",i)}}}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-controls bordered-box"},[i("item-selector",{on:{"item-added":t.addItem}}),t._v(" "),i("div",{staticClass:"items-notice"},[t._v("\n    Note: Items/buffs in the same category will override each other. The strongest effect will be kept.\n  ")]),t._v(" "),i("div",{staticClass:"items-display"},t._l(t.items,function(e){return i("item-display",{key:e.id,attrs:{item:e},on:{"item-level-activation":t.updateItemActivation,"item-remove":t.removeItem}})}))],1)},staticRenderFns:[]};var z=i("VU/8")(Y,Z,!1,function(t){i("mXoY")},null,null).exports,K=i("U7DK"),tt=i.n(K),et={name:"SaveModal",props:{saveName:{type:String,default:""}},data:function(){return{tempSaveName:this.saveName}},methods:{closeModal:function(){this.$emit("close")},modalSaved:function(){this.$emit("save",this.tempSaveName)}}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"modal"}},[i("div",{staticClass:"modal-mask",on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}},[i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"modal-container",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"modal-header"},[t._v("\n          Enter a name for the save:\n        ")]),t._v(" "),i("div",{staticClass:"modal-body"},[i("form",{staticClass:"save-name-edit",on:{submit:function(e){return e.preventDefault(),t.modalSaved(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.tempSaveName,expression:"tempSaveName"}],staticClass:"input-field",attrs:{type:"text",maxlength:"50",autofocus:""},domProps:{value:t.tempSaveName},on:{input:function(e){e.target.composing||(t.tempSaveName=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}},[t._v("Cancel")]),t._v(" "),i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.modalSaved(e)}}},[t._v("Save")])])])])])])},staticRenderFns:[]};var at=i("VU/8")(et,it,!1,function(t){i("VHNs")},null,null).exports,nt={name:"SaveDisplay",mixins:[g],props:{save:Object,index:Number,currentFinalRaw:Number,settings:Object},computed:{finalRawClass:function(){var t=["save-detail-text","save-final-raw"];return this.save.finalRaw>this.currentFinalRaw&&t.push("save-final-raw--higher"),this.save.finalRaw<this.currentFinalRaw&&t.push("save-final-raw--lower"),t},roundedRaw:function(){return this.roundToDecimal(this.save.finalRaw)}},methods:{removeSave:function(){confirm("Are you sure you want to remove this save?")&&this.$emit("remove-save",this.index)},restoreSave:function(){confirm("Overwrite current data with save data?")&&this.$emit("restore-save",this.index)},overwriteSave:function(){confirm("Overwrite this save with current data?")&&this.$emit("overrite-save",this.index)}}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"save-display-item bordered-box dashed-border"},[i("a",{staticClass:"remove-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeSave(e)}}},[t._v("x")]),t._v(" "),i("div",{staticClass:"save-name"},[t._v("\n    "+t._s(t.save.name)+"\n  ")]),t._v(" "),i("div",{staticClass:"save-detail weapon-data"},[i("div",{staticClass:"save-detail-label"},[t._v("\n      Weapon:\n    ")]),t._v(" "),i("div",{staticClass:"save-detail-text"},[t._v("\n      "+t._s(t.save.weapon.raw)+" Raw | "+t._s(t.save.weapon.affinity)+"% Affinity\n    ")])]),t._v(" "),i("div",{staticClass:"save-detail average-raw"},[i("div",{staticClass:"save-detail-label"},[t._v("\n      Average Raw:\n    ")]),t._v(" "),i("div",{class:t.finalRawClass},[t._v("\n      "+t._s(t.roundedRaw)+"\n    ")])]),t._v(" "),i("div",{staticClass:"save-detail-actions"},[i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.restoreSave(e)}}},[t._v("Restore")]),t._v(" "),i("a",{staticClass:"overwrite-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.overwriteSave(e)}}},[t._v("Overwrite")])])])},staticRenderFns:[]};var ot={name:"SaveManager",components:{SaveModal:at,SaveDisplay:i("VU/8")(nt,st,!1,function(t){i("xQpG")},null,null).exports},mixins:[k],props:{weapon:Object,skills:Array,items:Array,finalRaw:Number,saves:Array,settings:{type:Object,default:{}}},data:function(){return{editModalShown:!1,saveName:"",savesFile:null}},watch:{saves:function(){this.createSaveFile()}},created:function(){this.createSaveFile()},mounted:function(){var t=document.querySelectorAll(".save-area");tt.a.add(t)},methods:{getSaveName:function(){this.saveName=this.getTimeStamp(),this.editModalShown=!0},getTimeStamp:function(){return(new Date).toLocaleString()},closeEditModal:function(){this.editModalShown=!1},getSaveData:function(t){return{name:t,weapon:this.deepClone(this.weapon),skills:this.deepClone(this.skills),items:this.deepClone(this.items),finalRaw:this.deepClone(this.finalRaw)}},saveData:function(t){t.length||(t=this.getTimeStamp()),this.closeEditModal();var e=this.getSaveData(t),i=this.saves;i.push(e),this.$emit("update:saves",i)},removeSave:function(t){if(this.saves[t]){var e=this.saves;e.splice(t,1),this.$emit("update:saves",e)}},restoreSave:function(t){var e=this.saves[t];e&&(this.$emit("update:weapon",this.deepClone(e.weapon)),this.$emit("update:skills",this.deepClone(e.skills)),this.$emit("update:items",this.deepClone(e.items)))},overwriteSave:function(t){var e=this.saves[t],i=this.getSaveData(e.name),a=this.deepClone(this.saves);a[t]=i,this.$emit("update:saves",a)},clearAllSaves:function(){confirm("Are you SURE you want to delete all saved data?")&&this.$emit("update:saves",[])},createSaveFile:function(){var t=C()(this.saves),e=new Blob([t],{type:"text/plain"});null!==this.savesFile&&window.URL.revokeObjectURL(this.savesFile),this.savesFile=window.URL.createObjectURL(e)},importSave:function(t){if(t.target.files.length){var e=t.target.files[0],i=new FileReader;i.onload=this.processImportedSave,i.readAsText(e)}},processImportedSave:function(t){var e=t.target.result;if(confirm("Replace current save data with imported data?"))try{var i=JSON.parse(e);this.$emit("update:saves",i)}catch(t){console.log(t)}}}},rt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"save-area"},[i("div",{staticClass:"save-manager bordered-box"},[i("div",{staticClass:"save-actions"},[i("a",{staticClass:"clear-saves-links",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAllSaves(e)}}},[t._v("Clear All Saves")]),t._v(" "),i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getSaveName(e)}}},[t._v("Save")])]),t._v(" "),i("div",{staticClass:"saves-display"},t._l(t.saves,function(e,a){return i("save-display",{key:a,attrs:{save:e,index:a,settings:t.settings,"current-final-raw":t.finalRaw},on:{"remove-save":t.removeSave,"restore-save":t.restoreSave,"overrite-save":t.overwriteSave}})})),t._v(" "),i("div",{staticClass:"save-export-import"},[i("a",{staticClass:"button",attrs:{href:t.savesFile,download:"MHCalc-Saves.txt"}},[t._v("Export Saves")]),t._v(" "),i("div",{staticClass:"import-wrapper"},[i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.triggerSaveImport(e)}}},[t._v("Import Saves")]),t._v(" "),i("input",{staticClass:"saves-import",attrs:{name:"saves",type:"file",accept:"text/plain"},on:{change:t.importSave}})])])]),t._v(" "),t.editModalShown?i("save-modal",{attrs:{"save-name":t.saveName},on:{close:t.closeEditModal,save:t.saveData}}):t._e()],1)},staticRenderFns:[]};var lt={name:"Main",mixins:[k],components:{WeaponInput:d,Calculator:x,SkillControl:V,ItemControl:z,SaveManager:i("VU/8")(ot,rt,!1,function(t){i("Uaej")},null,null).exports},watch:{"weapon.affinity":function(){this.weapon.affinity>100&&(this.weapon.affinity=100),this.weapon.affinity<-100&&(this.weapon.affinity=-100)},"weapon.activation":function(){this.weapon.activation>100&&(this.weapon.activation=100),this.weapon.activation<0&&(this.weapon.activation=0)},saves:function(){this.saveToLocalStorage("MhCalc-SavedData",this.saves)}},data:function(){return{weapon:{type:1,raw:200,affinity:0,sharpness:3,coating:2,activation:100,augments:[0,0,0]},skills:[],items:[],finalRaw:0,saves:this.loadFromLocalStorage("MhCalc-SavedData",[]),settings:{debug:"true"===this.$route.query.debug,verbose:"true"===this.$route.query.verbose,precision:2,version:"0.4.2",contactEmail:"mhw.calc.dev@gmail.com"}}},computed:{contactLink:function(){return"mailto:"+this.settings.contactEmail}},methods:{updatedFinalRaw:function(t){this.finalRaw=t}}},ct={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mh-calc"},[i("h1",[t._v("\n    MHW Damage Calculator\n    "),i("div",{staticClass:"version-number"},[t._v("\n      v"+t._s(t.settings.version)+"\n    ")])]),t._v(" "),i("div",{staticClass:"main-content"},[i("save-manager",{attrs:{weapon:t.weapon,skills:t.skills,items:t.items,settings:t.settings,"final-raw":t.finalRaw,saves:t.saves},on:{"update:weapon":function(e){t.weapon=e},"update:skills":function(e){t.skills=e},"update:items":function(e){t.items=e},"update:saves":function(e){t.saves=e}}}),t._v(" "),i("div",{staticClass:"current-data"},[i("div",{staticClass:"general-data"},[i("weapon-input",{attrs:{weapon:t.weapon}}),t._v(" "),i("calculator",{attrs:{weapon:t.weapon,skills:t.skills,items:t.items,settings:t.settings,"final-raw":t.finalRaw},on:{"updated-final-raw":t.updatedFinalRaw}})],1),t._v(" "),i("skill-control",{attrs:{skills:t.skills},on:{"update:skills":function(e){t.skills=e}}}),t._v(" "),i("item-control",{attrs:{items:t.items},on:{"update:items":function(e){t.items=e}}})],1),t._v(" "),i("div",{staticClass:"footer"},[t._v("\n      To report bugs or ask any question, "),i("a",{attrs:{href:t.contactLink}},[t._v("contact us")]),t._v(".\n    ")])],1)])},staticRenderFns:[]};var ut=i("VU/8")(lt,ct,!1,function(t){i("NFnT")},null,null).exports;a.a.use(o.a);var ft=new o.a({routes:[{path:"/",name:"Main",component:ut,meta:{title:"MHW Damage Calculator"}}]});a.a.config.productionTip=!1,ft.beforeEach(function(t,e,i){document.title=t.meta.title,i()}),new a.a({el:"#app",router:ft,components:{App:s},template:"<App/>"})},NNZn:function(t,e){},Uaej:function(t,e){},VHNs:function(t,e){},mXoY:function(t,e){},mjGH:function(t,e){},ry4F:function(t,e){},xQpG:function(t,e){},yxD0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bf21288fdab6ce0d6323.js.map