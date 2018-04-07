webpackJsonp([1],{"7/Rd":function(t,e){},AQC8:function(t,e){},Ar6t:function(t,e){},Fkv4:function(t,e){},LK2D:function(t,e){},LxkP:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(t){i("7/Rd")},null,null).exports,l=i("/ocq"),r={name:"WeaponInput",props:{weapon:Object},methods:{flipSign:function(){this.weapon.affinity=-this.weapon.affinity}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"weapon-input"},[i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Raw")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.weapon.raw,expression:"weapon.raw",modifiers:{number:!0}}],staticClass:"input-field",attrs:{type:"number"},domProps:{value:t.weapon.raw},on:{input:function(e){e.target.composing||t.$set(t.weapon,"raw",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Affinity")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.weapon.affinity,expression:"weapon.affinity",modifiers:{number:!0}}],staticClass:"affinity-input input-field",attrs:{type:"number"},domProps:{value:t.weapon.affinity},on:{input:function(e){e.target.composing||t.$set(t.weapon,"affinity",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v("%\n    ")])]),t._v(" "),i("a",{staticClass:"convert-to-negative",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.flipSign(e)}}},[t._v("Flip sign")]),t._v(" "),i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Sharpness")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.weapon.sharpness,expression:"weapon.sharpness"}],staticClass:"input-field",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.weapon,"sharpness",e.target.multiple?i:i[0])}}},[i("option",[t._v("White")]),t._v(" "),i("option",[t._v("Blue")]),t._v(" "),i("option",[t._v("Green")]),t._v(" "),i("option",[t._v("Yellow")]),t._v(" "),i("option",[t._v("Orange")]),t._v(" "),i("option",[t._v("Red")])])])])},staticRenderFns:[]};var f=i("VU/8")(r,o,!1,function(t){i("kK4G")},null,null).exports,c=i("gRE1"),u=i.n(c),d=i("VU/8")({methods:{findIdFromList:function(t,e){return e.findIndex(function(e){return e.id===t})},findFromList:function(t,e){var i=this.findIdFromList(t,e);return i>=0?e[i]:null},findItemIndex:function(t){return this.findIdFromList(t,this.items)},findItem:function(t){return this.findFromList(t,this.items)},findSkillIndex:function(t){return this.findIdFromList(t,this.skills)},findSkill:function(t){return this.findFromList(t,this.skills)}}},null,!1,null,null,null).exports,v={methods:{roundToDecimal:function(t,e){void 0===e&&(e=this.settings.precision||2);var i=Math.pow(10,e);return Math.round(t*i)/i}}},m=i("VU/8")(v,null,!1,null,null,null).exports,p=i("mvHQ"),h=i.n(p),w={methods:{deepClone:function(t){return JSON.parse(h()(t))},saveToLocalStorage:function(t,e){window.localStorage&&window.localStorage.setItem(t,h()(e))},loadFromLocalStorage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(window.localStorage){var i=window.localStorage.getItem(t);if(i)return JSON.parse(i)}return e}}},g=i("VU/8")(w,null,!1,null,null,null).exports,y={0:{name:"Critical Boost",defaultActiviation:100,fixedActivation:!0,levels:[1,2,3]},1:{name:"Weakness Exploit",defaultActiviation:100,levels:[{affinityModifier:.15},{affinityModifier:.3},{affinityModifier:.5}]},2:{name:"Maximum Might",defaultActiviation:100,levels:[{affinityModifier:.1},{affinityModifier:.2},{affinityModifier:.3}]},3:{name:"Attack Boost",defaultActiviation:100,fixedActivation:!0,levels:[{rawModifier:3},{rawModifier:6},{rawModifier:9},{rawModifier:12,affinityModifier:.05},{rawModifier:15,affinityModifier:.05},{rawModifier:18,affinityModifier:.05},{rawModifier:21,affinityModifier:.05}]},4:{name:"Critical Eye",defaultActiviation:100,fixedActivation:!0,levels:[{affinityModifier:.03},{affinityModifier:.06},{affinityModifier:.1},{affinityModifier:.15},{affinityModifier:.2},{affinityModifier:.25},{affinityModifier:.3}]},5:{name:"Agitator",defaultActiviation:50,levels:[{rawModifier:4,affinityModifier:.03},{rawModifier:8,affinityModifier:.06},{rawModifier:12,affinityModifier:.09},{rawModifier:16,affinityModifier:.12},{rawModifier:20,affinityModifier:.15}]},6:{name:"Peak Performance",defaultActiviation:25,levels:[{rawModifier:5},{rawModifier:10},{rawModifier:15}]},7:{name:"Critical Draw",defaultActiviation:100,levels:[{affinityModifier:.3},{affinityModifier:.6},{affinityModifier:1}]},8:{name:"Airborne",defaultActiviation:10,levels:[{affinityModifier:.1}]},9:{name:"Latent Power",defaultActiviation:30,levels:[{affinityModifier:.1},{affinityModifier:.2},{affinityModifier:.3},{affinityModifier:.4},{affinityModifier:.5}]},10:{name:"Resentment",defaultActiviation:10,levels:[{rawModifier:5},{rawModifier:10},{rawModifier:15},{rawModifier:20},{rawModifier:25}]},11:{name:"Non-elemental Boost",defaultActiviation:100,fixedActivation:!0,levels:[1]}},k={0:{name:"Power Charm",defaultActiviation:100,fixedActivation:!0,effect:{rawModifier:6}},1:{name:"Power Talon",defaultActiviation:100,fixedActivation:!0,effect:{rawModifier:9}},2:{name:"Demon Drug",defaultActiviation:100,effect:{rawModifier:5},itemCategory:1},3:{name:"Mega Demon Drug",defaultActiviation:100,effect:{rawModifier:7},itemCategory:1},4:{name:"Might Seed",defaultActiviation:30,effect:{rawModifier:10},itemCategory:2},5:{name:"Might Pill",defaultActiviation:5,effect:{rawModifier:25},itemCategory:2},6:{name:"Demon Powder",defaultActiviation:30,effect:{rawModifier:10}},7:{name:"Canteen - Attack Up (S)",defaultActiviation:100,effect:{rawModifier:5},itemCategory:3},8:{name:"Canteen - Attack Up (M)",defaultActiviation:100,effect:{rawModifier:10},itemCategory:3},9:{name:"Canteen - Attack Up (L)",defaultActiviation:100,effect:{rawModifier:15},itemCategory:3},10:{name:"Affinity Booster",defaultActiviation:30,effect:{affinityModifier:.5}},11:{name:"Evasion Mantle",defaultActiviation:5,effect:{rawBoost:.3}},12:{name:"Hunting Horn - Self Improvement",defaultActiviation:100,effect:{rawBoost:.15}},13:{name:"Hunting Horn - Attack Up (S)",defaultActiviation:75,effect:{rawBoost:.5},itemCategory:4},14:{name:"Hunting Horn - Attack Up (M)",defaultActiviation:75,effect:{rawBoost:.1},itemCategory:4},15:{name:"Hunting Horn - Attack Up (L)",defaultActiviation:75,effect:{rawBoost:.15},itemCategory:4},16:{name:"Hunting Horn - Attack Up (XL)",defaultActiviation:75,effect:{rawBoost:.25},itemCategory:4},17:{name:"Palico Coral Orchestra - Attack Up",defaultActiviation:10,effect:{rawBoost:.15}}},C={name:"Calculator",mixins:[d,m,g],props:{weapon:Object,skills:Array,items:Array,finalRaw:Number,settings:{type:Object,default:{}}},created:function(){this.specialSkills={criticalBoost:0,nonElemBoost:11},this.categoriesQueue=[]},computed:{debugOn:function(){return this.settings.debug},verboseOn:function(){return this.debugOn&&this.settings.verbose},sharpnessMultiplier:function(){switch(this.weapon.sharpness){case"White":return 1.32;case"Blue":return 1.2;case"Green":return 1.05;case"Yellow":return 1;case"Red":return.75;case"Orange":return.5;default:return 1}},weaponRaw:function(){return this.findSkill(this.specialSkills.nonElemBoost)?1.1*this.weapon.raw:this.weapon.raw},affinity:function(){return this.weapon.affinity/100},affinityMultiplier:function(){var t=this.findSkill(this.specialSkills.criticalBoost);return t?.25+.05*t.level:.25},skillsForCalculation:function(){var t=this;return this.skills.filter(function(e){return-1===u()(t.specialSkills).indexOf(e.id)&&e.activation>0})},fixedSkills:function(){return this.skillsForCalculation.filter(function(t){return t.activation>=100})},variableSkills:function(){return this.skillsForCalculation.filter(function(t){return t.activation<100})},itemsForCalculation:function(){return this.items.filter(function(t){return t.activation>0})},fixedItems:function(){return this.itemsForCalculation.filter(function(t){return t.activation>=100})},variableItems:function(){return this.itemsForCalculation.filter(function(t){return t.activation<100})},fixedBonus:function(){var t=0,e=0,i=1;this.categoriesQueue={},this.verboseOn&&console.log("[ Calculating fixed raw and affinity ]");for(var a=0;a<this.fixedItems.length;a++){var n=this.fixedItems[a],s=this.adjustedItemBonus(n);t+=s.raw,e+=s.affinity,i*=s.rawBoost}for(a=0;a<this.fixedSkills.length;a++){var l=this.fixedSkills[a],r=this.getDataForSkill(l);t+=r.raw,e=this.adjustAffinity(e+r.affinity)}return{raw:t,affinity:e,rawBoost:i}},finalAverageRaw:function(){var t=0,e=this.variableItems.length+this.variableSkills.length;if(e<1)t=this.averageRaw(this.fixedBonus.rawBoost,this.fixedBonus.raw,this.fixedBonus.affinity);else{this.verboseOn&&console.log("[ Calculating variable raw and affinity ]");for(var i=Math.pow(2,e),a=0,n=this.deepClone(this.categoriesQueue),s=0;s<i;s++){var l=this.convertToDecimal(s,e),r=this.getBonusForConfig(l);this.categoriesQueue=this.deepClone(n),this.debugOn&&console.log("Calculating raw for configuration "+l+". Chance: "+100*r.chance+"%"),r.chance>0&&(a+=this.averageRaw(r.rawBoost,r.raw,r.affinity)*r.chance)}t=a}return t!==this.finalRaw&&this.$emit("updated-final-raw",t),t},displayFixeRaw:function(){return this.roundToDecimal(this.weaponRaw*this.fixedBonus.rawBoost+this.fixedBonus.raw,0)},displayFixedAffinity:function(){return this.roundToDecimal(100*(this.affinity+this.fixedBonus.affinity))},roundedFinalRaw:function(){return this.roundToDecimal(this.finalAverageRaw)}},methods:{convertToDecimal:function(t,e){var i=(t>>>0).toString(2);return""+"0".repeat(e-i.length)+i},averageRaw:function(t,e,i){var a=this.affinityMultiplier,n=this.adjustAffinity(this.affinity+i);n<0&&(a=.25);var s=(this.weaponRaw*t+e)*this.sharpnessMultiplier*(1+n*a);return this.settings.debug&&console.log("> ("+this.weaponRaw+" * "+t+" + "+e+") * "+this.sharpnessMultiplier+" * (1 + ("+n+" * "+a+")) = "+s),s},adjustAffinity:function(t){return t=Math.min(1,t),t=Math.max(-1,t)},getBonusForConfig:function(t){for(var e=0,i=this.fixedBonus.raw,a=this.fixedBonus.affinity,n=this.fixedBonus.rawBoost,s=1,l=0;l<this.variableItems.length;l++){var r=this.variableItems[l],o=r.activation/100;if("1"===t[e]){var f=this.adjustedItemBonus(r);i+=f.raw,a+=f.affinity,n*=f.rawBoost,s*=o}else s*=1-o;e++}for(l=0;l<this.variableSkills.length;l++){var c=this.variableSkills[l];o=c.activation/100;if("1"===t[e]){var u=this.getDataForSkill(c);i+=u.raw,a+=u.affinity,s*=o}else s*=1-o;e++}return{raw:i,affinity:a,rawBoost:n,chance:s}},getDataForSkill:function(t){var e=y[t.id],i=e.levels[t.level-1].rawModifier||0,a=e.levels[t.level-1].affinityModifier||0;return this.verboseOn&&console.log('Checking data for skill "'+e.name+'" lv '+t.level+" | Raw: "+i+" | Affinity: "+a),{raw:i,affinity:a}},getDataForItem:function(t){var e=k[t.id],i=e.effect.rawModifier||0,a=e.effect.affinityModifier||0,n=1;return e.effect.rawBoost&&(n=1+e.effect.rawBoost),this.verboseOn&&console.log('Checking data for item "'+e.name+'" | Raw: '+i+" | Affinity: "+a+" | Raw Boost: "+n),{raw:i,affinity:a,rawBoost:n}},adjustedItemBonus:function(t){var e=k[t.id],i=this.getDataForItem(t);if(e.itemCategory)if(this.categoriesQueue[e.itemCategory])for(var a=this.categoriesQueue[e.itemCategory],n=[{name:"raw",multiplicative:!1},{name:"affinity",multiplicative:!1},{name:"rawBoost",multiplicative:!0}],s=0;s<n.length;s++){var l=n[s],r=l.multiplicative?1:0,o=a[l.name]||r,f=i[l.name]||r;f>r&&o>r&&(o>=f?(this.verboseOn&&console.log("Stronger "+l.name+' effect for item "'+e.name+'" already exists, nullifying bonus'),i[l.name]=r):(l.multiplicative?i[l.name]=f/o:i[l.name]=f-o,this.verboseOn&&console.log("Weaker "+l.name+' effect for item "'+e.name+'" already exists at '+o+". Applying a difference of "+i[l.name]),this.categoriesQueue[e.itemCategory][l.name]=f))}else this.verboseOn&&console.log("Initializing category queue for category "+t.itemCategory),this.categoriesQueue[e.itemCategory]=this.deepClone(i);return i}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"damage-display bordered-box"},[i("div",{staticClass:"damage-item damage-detail"},[i("span",{staticClass:"damage-label"},[t._v("Fixed raw:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(t.displayFixeRaw))])]),t._v(" "),i("div",{staticClass:"damage-item damage-detail"},[i("span",{staticClass:"damage-label"},[t._v("Fixed affinity:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(t.displayFixedAffinity)+"%")])]),t._v(" "),i("div",{staticClass:"damage-item damage-detail"},[i("span",{staticClass:"damage-label"},[t._v("Affinity multiplier:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(t.affinityMultiplier))])]),t._v(" "),i("div",{staticClass:"damage-item damage-final"},[i("span",{staticClass:"damage-label"},[t._v("Average raw:")]),t._v(" "),i("span",{staticClass:"damage-number"},[t._v(t._s(this.roundedFinalRaw))])])])},staticRenderFns:[]};var S=i("VU/8")(C,_,!1,function(t){i("Ar6t")},null,null).exports,M=i("T1ft"),b=i.n(M),A=i("W3Iv"),x=i.n(A),R={methods:{convertToOptions:function(t){return x()(t).map(function(t){return{label:t[1].name,value:parseInt(t[0])}}).sort(function(t,e){var i=t.label.toUpperCase(),a=e.label.toUpperCase();return i<a?-1:i>a?1:0})}}},I=i("VU/8")(R,null,!1,null,null,null).exports,D={name:"SkillSelector",mixins:[I],components:{VueSelect:b.a},data:function(){return{skillList:this.convertToOptions(y)}},methods:{skillSelected:function(t){this.$emit("skill-added",t.value)}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skill-selector"},[e("div",{staticClass:"skills-input input-item select-wrapper"},[e("span",{staticClass:"input-label"},[this._v("\n      Select skills\n    ")]),this._v(" "),e("vue-select",{attrs:{placeholder:"Type to search...",options:this.skillList},on:{input:this.skillSelected}})],1)])},staticRenderFns:[]},B=i("VU/8")(D,F,!1,null,null,null).exports,$=i("Gu7T"),N=i.n($),U={name:"SkillDisplay",props:{skill:Object},computed:{skillData:function(){return y[this.skill.id]},skillName:function(){return this.skillData.name},skillLevels:function(){return[].concat(N()(Array(this.skillData.levels.length).keys())).map(function(t){return t+1})},enableActivationEdit:function(){return!this.skillData.fixedActivation}},methods:{updateSkillLevel:function(t){this.$emit("skill-level-update",this.skill.id,parseInt(t.target.value))},updateSkillActivation:function(t){this.$emit("skill-level-activation",this.skill.id,parseInt(t.target.value))},removeSkill:function(){this.$emit("skill-remove",this.skill.id)}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-display-item bordered-box dashed-border"},[i("div",{staticClass:"skill-header"},[i("div",{staticClass:"skill-name"},[t._v("\n      "+t._s(t.skillName)+"\n    ")]),t._v(" "),i("a",{staticClass:"remove-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeSkill(e)}}},[t._v("x")])]),t._v(" "),i("form",{staticClass:"skill-edit"},[i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Level:")]),t._v(" "),i("select",{staticClass:"input-field",attrs:{type:"number"},domProps:{value:t.skill.level},on:{change:t.updateSkillLevel}},t._l(t.skillLevels,function(e){return i("option",[t._v("\n          "+t._s(e)+"\n        ")])}))]),t._v(" "),t.enableActivationEdit?i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Activation:")]),t._v(" "),i("div",[i("input",{staticClass:"activation-input input-field",attrs:{type:"number"},domProps:{value:t.skill.activation},on:{change:t.updateSkillActivation}}),t._v("%\n      ")])]):t._e()])])},staticRenderFns:[]};var O={name:"SkillControl",components:{SkillSelector:B,SkillDisplay:i("VU/8")(U,L,!1,function(t){i("LK2D")},null,null).exports},mixins:[d],props:{skills:Array},methods:{addSkill:function(t){if(this.findSkillIndex(t)<0){var e=this.skills;e.push({id:t,level:1,activation:y[t].defaultActiviation}),this.$emit("update:skills",e)}},updateSkillLevel:function(t,e){var i=this.findSkillIndex(t);if(i>=0&&this.skills[i].level!==e){var a=this.skills;a[i].level=e,this.$emit("update:skills",a)}},updateSkillActivation:function(t,e){var i=this.findSkillIndex(t);if(e>100&&(e=100),e<0&&(e=0),i>=0&&this.skills[i].activation!==e){var a=this.skills;a[i].activation=e,this.$emit("update:skills",a)}},removeSkill:function(t){var e=this.findSkillIndex(t);if(e>=0){var i=this.skills;i.splice(e,1),this.$emit("update:skills",i)}}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-controls bordered-box"},[i("skill-selector",{on:{"skill-added":t.addSkill}}),t._v(" "),i("div",{staticClass:"skills-display"},t._l(t.skills,function(e){return i("skill-display",{key:e.id,attrs:{skill:e},on:{"skill-level-update":t.updateSkillLevel,"skill-level-activation":t.updateSkillActivation,"skill-remove":t.removeSkill}})}))],1)},staticRenderFns:[]};var T=i("VU/8")(O,E,!1,function(t){i("Fkv4")},null,null).exports,V={name:"ItemSelector",mixins:[I],components:{VueSelect:b.a},data:function(){return{itemList:this.convertToOptions(k)}},methods:{itemSelected:function(t){this.$emit("item-added",t.value)}}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-selector"},[e("div",{staticClass:"items-input input-item select-wrapper"},[e("span",{staticClass:"input-label"},[this._v("\n      Select item/buff\n    ")]),this._v(" "),e("vue-select",{attrs:{placeholder:"Type to search...",options:this.itemList},on:{input:this.itemSelected}})],1)])},staticRenderFns:[]},P=i("VU/8")(V,H,!1,null,null,null).exports,j={1:"Demon Drug/Mega Demon Drug",2:"Might Seed/Might Pill",3:"Canteen Meals - Attack Up",4:"Hunting Horn Songs - Attack Up"},Q={name:"ItemDisplay",props:{item:Object},computed:{itemData:function(){return k[this.item.id]},itemName:function(){return this.itemData.name},enableActivationEdit:function(){return!this.itemData.fixedActivation},showCategory:function(){return this.itemData.itemCategory},itemCategory:function(){return j[this.itemData.itemCategory]}},methods:{updateItemActivation:function(t){this.$emit("item-level-activation",this.item.id,parseInt(t.target.value))},removeItem:function(){this.$emit("item-remove",this.item.id)}}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-display-item bordered-box dashed-border"},[i("div",{staticClass:"item-header"},[i("div",{staticClass:"item-name"},[t._v("\n      "+t._s(t.itemName)+"\n    ")]),t._v(" "),i("a",{staticClass:"remove-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeItem(e)}}},[t._v("x")])]),t._v(" "),t.enableActivationEdit?i("form",{staticClass:"item-edit"},[i("div",{staticClass:"input-item"},[i("span",{staticClass:"input-label"},[t._v("Activation:")]),t._v(" "),i("div",[i("input",{staticClass:"activation-input input-field",attrs:{type:"number"},domProps:{value:t.item.activation},on:{change:t.updateItemActivation}}),t._v("%\n      ")])])]):t._e(),t._v(" "),t.showCategory?i("div",{staticClass:"item-category"},[i("span",{staticClass:"input-label category-label"},[t._v("Category:")]),t._v(" "),i("span",{staticClass:"category-name"},[t._v(t._s(t.itemCategory))])]):t._e()])},staticRenderFns:[]};var G={name:"ItemControl",components:{ItemSelector:P,ItemDisplay:i("VU/8")(Q,W,!1,function(t){i("AQC8")},null,null).exports},mixins:[d],props:{items:Array},methods:{addItem:function(t){if(this.findItemIndex(t)<0){var e=this.items;e.push({id:t,activation:k[t].defaultActiviation}),this.$emit("update:items",e)}},updateItemActivation:function(t,e){var i=this.findItemIndex(t);if(e>100&&(e=100),e<0&&(e=0),i>=0&&this.items[i].activation!==e){var a=this.items;a[i].activation=e,this.$emit("update:items",a)}},removeItem:function(t){var e=this.findItemIndex(t);if(e>=0){var i=this.items;i.splice(e,1),this.$emit("update:items",i)}}}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-controls bordered-box"},[i("item-selector",{on:{"item-added":t.addItem}}),t._v(" "),i("div",{staticClass:"items-notice"},[t._v("\n    Note: Items/buffs in the same category will override each other. The strongest effect will be kept.\n  ")]),t._v(" "),i("div",{staticClass:"items-display"},t._l(t.items,function(e){return i("item-display",{key:e.id,attrs:{item:e},on:{"item-level-activation":t.updateItemActivation,"item-remove":t.removeItem}})}))],1)},staticRenderFns:[]};var X=i("VU/8")(G,K,!1,function(t){i("mXoY")},null,null).exports,Y=i("U7DK"),q=i.n(Y),z={name:"SaveModal",props:{saveName:{type:String,default:""}},data:function(){return{tempSaveName:this.saveName}},methods:{closeModal:function(){this.$emit("close")},modalSaved:function(){this.$emit("save",this.tempSaveName)}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"modal"}},[i("div",{staticClass:"modal-mask",on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}},[i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"modal-container",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"modal-header"},[t._v("\n          Enter a name for the save:\n        ")]),t._v(" "),i("div",{staticClass:"modal-body"},[i("form",{staticClass:"save-name-edit",on:{submit:function(e){return e.preventDefault(),t.modalSaved(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.tempSaveName,expression:"tempSaveName"}],staticClass:"input-field",attrs:{type:"text",maxlength:"50",autofocus:""},domProps:{value:t.tempSaveName},on:{input:function(e){e.target.composing||(t.tempSaveName=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.closeModal(e)}}},[t._v("Cancel")]),t._v(" "),i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.modalSaved(e)}}},[t._v("Save")])])])])])])},staticRenderFns:[]};var Z=i("VU/8")(z,J,!1,function(t){i("VHNs")},null,null).exports,tt={name:"SaveDisplay",mixins:[m],props:{save:Object,index:Number,currentFinalRaw:Number,settings:Object},computed:{finalRawClass:function(){var t=["save-detail-text","save-final-raw"];return this.save.finalRaw>this.currentFinalRaw&&t.push("save-final-raw--higher"),this.save.finalRaw<this.currentFinalRaw&&t.push("save-final-raw--lower"),t},roundedRaw:function(){return this.roundToDecimal(this.save.finalRaw)}},methods:{removeSave:function(){confirm("Are you sure you want to remove this save?")&&this.$emit("remove-save",this.index)},restoreSave:function(){confirm("Override current data with save data?")&&this.$emit("restore-save",this.index)}}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"save-display-item bordered-box dashed-border"},[i("a",{staticClass:"remove-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeSave(e)}}},[t._v("x")]),t._v(" "),i("div",{staticClass:"save-name"},[t._v("\n    "+t._s(t.save.name)+"\n  ")]),t._v(" "),i("div",{staticClass:"save-detail weapon-data"},[i("div",{staticClass:"save-detail-label"},[t._v("\n      Weapon:\n    ")]),t._v(" "),i("div",{staticClass:"save-detail-text"},[t._v("\n      "+t._s(t.save.weapon.raw)+" Raw | "+t._s(t.save.weapon.affinity)+"% Affinity\n    ")])]),t._v(" "),i("div",{staticClass:"save-detail average-raw"},[i("div",{staticClass:"save-detail-label"},[t._v("\n      Average Raw:\n    ")]),t._v(" "),i("div",{class:t.finalRawClass},[t._v("\n      "+t._s(t.roundedRaw)+"\n    ")])]),t._v(" "),i("div",{staticClass:"save-detail-actions"},[i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.restoreSave(e)}}},[t._v("Restore")])])])},staticRenderFns:[]};var it={name:"SaveManager",components:{SaveModal:Z,SaveDisplay:i("VU/8")(tt,et,!1,function(t){i("LxkP")},null,null).exports},mixins:[g],props:{weapon:Object,skills:Array,items:Array,finalRaw:Number,saves:Array,settings:{type:Object,default:{}}},data:function(){return{editModalShown:!1,saveName:"",customName:!1}},mounted:function(){var t=document.querySelectorAll(".save-area");q.a.add(t)},methods:{getSaveName:function(){this.customName&&this.saveName.length||(this.saveName=this.getTimeStamp()),this.editModalShown=!0},getTimeStamp:function(){return(new Date).toLocaleString()},closeEditModal:function(){this.editModalShown=!1},saveData:function(t){t.length?(this.saveName=t,this.customName=!0):(t=this.getTimeStamp(),this.customName=!1),this.closeEditModal();var e={name:t,weapon:this.deepClone(this.weapon),skills:this.deepClone(this.skills),items:this.deepClone(this.items),finalRaw:this.deepClone(this.finalRaw)},i=this.saves;i.push(e),this.$emit("update:saves",i)},removeSave:function(t){if(this.saves[t]){var e=this.saves;e.splice(t,1),this.$emit("update:saves",e)}},restoreSave:function(t){var e=this.saves[t];e&&(this.$emit("update:weapon",e.weapon),this.$emit("update:skills",e.skills),this.$emit("update:items",e.items))},clearAllSaves:function(){confirm("Are you SURE you want to delete all saved data?")&&this.$emit("update:saves",[])}}},at={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"save-area"},[i("div",{staticClass:"save-manager bordered-box"},[i("div",{staticClass:"save-actions"},[i("a",{staticClass:"clear-saves-links",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAllSaves(e)}}},[t._v("Clear All Saves")]),t._v(" "),i("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getSaveName(e)}}},[t._v("Save")])]),t._v(" "),i("div",{staticClass:"saves-display"},t._l(t.saves,function(e,a){return i("save-display",{key:a,attrs:{save:e,index:a,settings:t.settings,"current-final-raw":t.finalRaw},on:{"remove-save":t.removeSave,"restore-save":t.restoreSave}})}))]),t._v(" "),t.editModalShown?i("save-modal",{attrs:{"save-name":t.saveName},on:{close:t.closeEditModal,save:t.saveData}}):t._e()],1)},staticRenderFns:[]};var nt={name:"Main",mixins:[g],components:{WeaponInput:f,Calculator:S,SkillControl:T,ItemControl:X,SaveManager:i("VU/8")(it,at,!1,function(t){i("X/z7")},null,null).exports},watch:{"weapon.affinity":function(){this.weapon.affinity>100&&(this.weapon.affinity=100),this.weapon.affinity<-100&&(this.weapon.affinity=-100)},saves:function(){this.saveToLocalStorage("MhCalc-SavedData",this.saves)}},data:function(){return{weapon:{raw:200,affinity:0,sharpness:"Green"},skills:[],items:[],finalRaw:0,saves:this.loadFromLocalStorage("MhCalc-SavedData",[]),settings:{debug:!1,verbose:!1,precision:2,version:"0.2.1"}}},methods:{updatedFinalRaw:function(t){this.finalRaw=t}}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mh-calc"},[i("h1",[t._v("\n    MHW Damage Calculator\n    "),i("div",{staticClass:"version-number"},[t._v("\n      v"+t._s(t.settings.version)+"\n    ")])]),t._v(" "),i("div",{staticClass:"main-content"},[i("save-manager",{attrs:{weapon:t.weapon,skills:t.skills,items:t.items,settings:t.settings,"final-raw":t.finalRaw,saves:t.saves},on:{"update:weapon":function(e){t.weapon=e},"update:skills":function(e){t.skills=e},"update:items":function(e){t.items=e},"update:saves":function(e){t.saves=e}}}),t._v(" "),i("div",{staticClass:"current-data"},[i("div",{staticClass:"general-data"},[i("div",{staticClass:"weapon-col bordered-box"},[i("weapon-input",{attrs:{weapon:t.weapon}})],1),t._v(" "),i("calculator",{attrs:{weapon:t.weapon,skills:t.skills,items:t.items,settings:t.settings,"final-raw":t.finalRaw},on:{"updated-final-raw":t.updatedFinalRaw}})],1),t._v(" "),i("skill-control",{attrs:{skills:t.skills},on:{"update:skills":function(e){t.skills=e}}}),t._v(" "),i("item-control",{attrs:{items:t.items},on:{"update:items":function(e){t.items=e}}})],1)],1)])},staticRenderFns:[]};var lt=i("VU/8")(nt,st,!1,function(t){i("d2rM")},null,null).exports;a.a.use(l.a);var rt=new l.a({routes:[{path:"/",name:"Main",component:lt,meta:{title:"MHW Damage Calculator"}}]});a.a.config.productionTip=!1,rt.beforeEach(function(t,e,i){document.title=t.meta.title,i()}),new a.a({el:"#app",router:rt,components:{App:s},template:"<App/>"})},VHNs:function(t,e){},"X/z7":function(t,e){},d2rM:function(t,e){},kK4G:function(t,e){},mXoY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.69333d0b6759889c6ce4.js.map