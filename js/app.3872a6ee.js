(function(){"use strict";var a={728:function(a,e,t){var o=t(9963),r=t(6252);const s={class:"wrapper"};function n(a,e,t,o,n,l){const i=(0,r.up)("HeaderComponent"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(i),(0,r.Wm)(u)])}const l={class:"header"},i=(0,r._)("div",{class:"text"},[(0,r._)("h1",null,"Kalkulator Kalorii"),(0,r._)("p",null,"Zacznij budować formę na lata już dziś!")],-1);function u(a,e,t,o,s,n){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("i",{class:"fa-solid fa-calculator",onClick:e[0]||(e[0]=(...a)=>o.goToMainPage&&o.goToMainPage(...a))}),i])}t(7658);var c=t(2201),p=t(3577);function d(a,e,t,o,s,n){const l=(0,r.up)("ProgressComponent"),i=(0,r.up)("MainComponent"),u=(0,r.up)("PopupComponent");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(i),((0,r.wg)(),(0,r.j4)(r.lR,{to:"#auto-calc"},[(0,r.Wm)(u,{class:(0,p.C_)({active:o.isPopupVisible})},null,8,["class"])]))],64)}var m=t.p+"img/alert-triangle.1c5e8b20.svg";const _=a=>((0,r.dD)("data-v-66223d7b"),a=a(),(0,r.Cn)(),a),b={class:"popup"},v={class:"popup-body"},C=_((()=>(0,r._)("img",{src:m,alt:""},null,-1))),A=_((()=>(0,r._)("h2",null,"UUPS, nie obliczyłeś jeszcze swojego zapotrzebowania kalorycznego, zrób to teraz!",-1))),f={class:"buttons-box"},k=_((()=>(0,r._)("button",null,"Oblicz automatycznie",-1))),g=_((()=>(0,r._)("button",null,"Wpisz samodzielnie",-1)));function h(a,e,t,o,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",v,[C,A,(0,r._)("div",f,[(0,r.Wm)(l,{to:"/autocalc"},{default:(0,r.w5)((()=>[k])),_:1}),(0,r.Wm)(l,{to:"/selfcalc"},{default:(0,r.w5)((()=>[g])),_:1})])])])}var w={},S=t(3744);const y=(0,S.Z)(w,[["render",h],["__scopeId","data-v-66223d7b"]]);var R=y;const z={class:"progress-box"},F={class:"container"},O=["max","value"],I={class:"macros-box"},P=["max","value"],E=["max","value"],D=["max","value"];function x(a,e,t,o,s,n){return(0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("div",F,[(0,r._)("div",{class:(0,p.C_)(["total",{error:o.todaysCalories>o.totalCalories}])},[(0,r._)("progress",{class:"progress",max:o.totalCalories,value:o.todaysCalories},null,8,O),(0,r._)("label",null,"KCAL: "+(0,p.zw)(o.todaysCalories)+"/"+(0,p.zw)(o.totalCalories),1)],2),(0,r._)("div",I,[(0,r._)("div",{class:(0,p.C_)(["small-box",{error:o.todaysCarbs>o.carbs}])},[(0,r._)("progress",{class:"progress carbs",max:o.carbs,value:o.todaysCarbs},null,8,P),(0,r._)("label",null,"W: "+(0,p.zw)(o.todaysCarbs)+"/"+(0,p.zw)(o.carbs)+"g",1)],2),(0,r._)("div",{class:(0,p.C_)(["small-box",{error:o.todaysProteins>o.proteins}])},[(0,r._)("progress",{class:"progress proteins",max:o.proteins,value:o.todaysProteins},null,8,E),(0,r._)("label",null,"B: "+(0,p.zw)(o.todaysProteins)+"/"+(0,p.zw)(o.proteins)+"g",1)],2),(0,r._)("div",{class:(0,p.C_)(["small-box",{error:o.todaysFats>o.fats}])},[(0,r._)("progress",{class:"progress fats",max:o.fats,value:o.todaysFats},null,8,D),(0,r._)("label",null,"T: "+(0,p.zw)(o.todaysFats)+"/"+(0,p.zw)(o.fats)+"g",1)],2)])])])}var T=t(3907),j={setup(){const a=(0,T.oR)(),e=(0,r.Fl)((()=>a.state.totalCalories)),t=(0,r.Fl)((()=>parseInt(a.state.carbsCalories/4))),o=(0,r.Fl)((()=>parseInt(a.state.proteinsCalories/4))),s=(0,r.Fl)((()=>parseInt(a.state.fatsCalories/9))),n=(0,r.Fl)((()=>a.state.breakfestCaloriesSum+a.state.lunchCaloriesSum+a.state.snacksCaloriesSum+a.state.dinnerCaloriesSum)),l=(0,r.Fl)((()=>a.state.breakfestCarbsSum+a.state.lunchCarbsSum+a.state.snacksCarbsSum+a.state.dinnerCarbsSum)),i=(0,r.Fl)((()=>a.state.breakfestProteinsSum+a.state.lunchProteinsSum+a.state.snacksProteinsSum+a.state.dinnerProteinsSum)),u=(0,r.Fl)((()=>a.state.breakfestFatsSum+a.state.lunchFatsSum+a.state.snacksFatsSum+a.state.dinnerFatsSum));return{totalCalories:e,carbs:t,proteins:o,fats:s,todaysCalories:n,todaysCarbs:l,todaysProteins:i,todaysFats:u}}};const W=(0,S.Z)(j,[["render",x]]);var V=W;const H={class:"main"},L=(0,r._)("button",{class:"button chevron"},null,-1),K=(0,r._)("h2",null,"Śniadanie",-1),M=(0,r._)("button",{class:"button add-btn"},null,-1),N={class:"food-box"},Y={class:"name"},B=["onClick"],G={class:"macros"},q={key:0,class:"error"},Z=(0,r._)("button",{class:"button chevron"},null,-1),U=(0,r._)("h2",null,"Obiad",-1),J=(0,r._)("button",{class:"button add-btn"},null,-1),X={class:"food-box"},Q={class:"name"},$=["onClick"],aa={class:"macros"},ea={key:0,class:"error"},ta=(0,r._)("button",{class:"button chevron"},null,-1),oa=(0,r._)("h2",null,"Przekąska",-1),ra=(0,r._)("button",{class:"button add-btn"},null,-1),sa={class:"food-box"},na={class:"name"},la=["onClick"],ia={class:"macros"},ua={key:0,class:"error"},ca=(0,r._)("button",{class:"button chevron"},null,-1),pa=(0,r._)("h2",null,"Kolacja",-1),da=(0,r._)("button",{class:"button add-btn"},null,-1),ma={class:"food-box"},_a={class:"name"},ba=["onClick"],va={class:"macros"},Ca={key:0,class:"error"};function Aa(a,e,t,o,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("main",H,[(0,r._)("div",{class:(0,p.C_)(["box",{active:o.isActive}])},[L,K,(0,r.Wm)(l,{to:"/addproduct",onClick:e[0]||(e[0]=a=>o.whichArray(a))},{default:(0,r.w5)((()=>[M])),_:1})],2),(0,r._)("div",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.breakfestArr,((a,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"food-container",key:e},[(0,r._)("div",Y,[(0,r._)("p",null,(0,p.zw)(a.name),1),(0,r._)("button",{onClick:a=>o.removeFromBreakfestArray(e)},null,8,B)]),(0,r._)("div",G,[(0,r._)("p",null,"KCAL: "+(0,p.zw)(a.calories),1),(0,r._)("p",null,"W: "+(0,p.zw)(a.carbs),1),(0,r._)("p",null,"B: "+(0,p.zw)(a.proteins),1),(0,r._)("p",null,"T: "+(0,p.zw)(a.fats),1)])])))),128)),0==o.breakfestArr.length?((0,r.wg)(),(0,r.iD)("p",q,"Brak wpisów do sekcji śniadanie")):(0,r.kq)("",!0)]),(0,r._)("div",{class:(0,p.C_)(["box",{active:o.isActive}])},[Z,U,(0,r.Wm)(l,{to:"/addproduct",onClick:e[1]||(e[1]=a=>o.whichArray(a))},{default:(0,r.w5)((()=>[J])),_:1})],2),(0,r._)("div",X,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.lunchArr,((a,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"food-container",key:e},[(0,r._)("div",Q,[(0,r._)("p",null,(0,p.zw)(a.name),1),(0,r._)("button",{onClick:a=>o.removeFromLunchArray(e)},null,8,$)]),(0,r._)("div",aa,[(0,r._)("p",null,"KCAL: "+(0,p.zw)(a.calories),1),(0,r._)("p",null,"W: "+(0,p.zw)(a.carbs),1),(0,r._)("p",null,"B: "+(0,p.zw)(a.proteins),1),(0,r._)("p",null,"T: "+(0,p.zw)(a.fats),1)])])))),128)),0==o.lunchArr.length?((0,r.wg)(),(0,r.iD)("p",ea,"Brak wpisów do sekcji obiad")):(0,r.kq)("",!0)]),(0,r._)("div",{class:(0,p.C_)(["box",{active:o.isActive}])},[ta,oa,(0,r.Wm)(l,{to:"/addproduct",onClick:e[2]||(e[2]=a=>o.whichArray(a))},{default:(0,r.w5)((()=>[ra])),_:1})],2),(0,r._)("div",sa,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.snacksArr,((a,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"food-container",key:e},[(0,r._)("div",na,[(0,r._)("p",null,(0,p.zw)(a.name),1),(0,r._)("button",{onClick:a=>o.removeFromSnacksArray(e)},null,8,la)]),(0,r._)("div",ia,[(0,r._)("p",null,"KCAL: "+(0,p.zw)(a.calories),1),(0,r._)("p",null,"W: "+(0,p.zw)(a.carbs),1),(0,r._)("p",null,"B: "+(0,p.zw)(a.proteins),1),(0,r._)("p",null,"T: "+(0,p.zw)(a.fats),1)])])))),128)),0==o.snacksArr.length?((0,r.wg)(),(0,r.iD)("p",ua,"Brak wpisów do sekcji przekąski")):(0,r.kq)("",!0)]),(0,r._)("div",{class:(0,p.C_)(["box",{active:o.isActive}])},[ca,pa,(0,r.Wm)(l,{to:"/addproduct",onClick:e[3]||(e[3]=a=>o.whichArray(a))},{default:(0,r.w5)((()=>[da])),_:1})],2),(0,r._)("div",ma,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.dinnerArr,((a,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"food-container",key:e},[(0,r._)("div",_a,[(0,r._)("p",null,(0,p.zw)(a.name),1),(0,r._)("button",{onClick:a=>o.removeFromDinnerArray(e)},null,8,ba)]),(0,r._)("div",va,[(0,r._)("p",null,"KCAL: "+(0,p.zw)(a.calories),1),(0,r._)("p",null,"W: "+(0,p.zw)(a.carbs),1),(0,r._)("p",null,"B: "+(0,p.zw)(a.proteins),1),(0,r._)("p",null,"T: "+(0,p.zw)(a.fats),1)])])))),128)),0==o.dinnerArr.length?((0,r.wg)(),(0,r.iD)("p",Ca,"Brak wpisów do sekcji kolacja")):(0,r.kq)("",!0)])])}var fa=t(2262),ka={setup(){const a=(0,T.oR)(),e=(0,r.Fl)((()=>a.state.breakfestArr)),t=(0,r.Fl)((()=>a.state.lunchArr)),o=(0,r.Fl)((()=>a.state.dinnerArr)),s=(0,r.Fl)((()=>a.state.snacksArr));let n=(0,fa.iH)(!1);function l(){1==n.value?n.value=!1:n.value=!0}function i(e){let t=e.target.parentElement.parentElement.querySelector("h2").textContent;a.commit("ASSIGN_WHICH_ARRAY",t)}function u(e){a.commit("REMOVE_FROM_BREAKFEAST_ARRAY",e),a.commit("CALC_MAKROS")}function c(e){a.commit("REMOVE_FROM_LUNCH_ARRAY",e),a.commit("CALC_MAKROS")}function p(e){a.commit("REMOVE_FROM_SNACKS_ARRAY",e),a.commit("CALC_MAKROS")}function d(e){a.commit("REMOVE_FROM_DINNER_ARRAY",e),a.commit("CALC_MAKROS")}return(0,r.bv)((()=>{const a=document.querySelectorAll(".chevron"),e=document.querySelectorAll(".food-box");a.forEach(((a,t)=>{a.addEventListener("click",(()=>{a.classList.toggle("rotate"),e[t].classList.toggle("active")}))}))})),a.commit("GET_TODAYS_MEAL"),{isActive:n,breakfestArr:e,lunchArr:t,dinnerArr:o,snacksArr:s,handleActive:l,whichArray:i,removeFromBreakfestArray:u,removeFromLunchArray:c,removeFromSnacksArray:p,removeFromDinnerArray:d}}};const ga=(0,S.Z)(ka,[["render",Aa]]);var ha=ga,wa={name:"HomeView",components:{PopupComponent:R,ProgressComponent:V,MainComponent:ha},setup(){const a=(0,T.oR)();a.commit("GET_CALORIES_AND_MAKROS"),a.commit("GET_TODAYS_MEAL"),a.commit("CALC_MAKROS");const e=(0,fa.iH)(!1),t=(0,r.Fl)((()=>a.state.totalCalories));return 0==t.value?e.value=!0:e.value=!1,{isPopupVisible:e}}};const Sa=(0,S.Z)(wa,[["render",d]]);var ya=Sa;function Ra(a,e,t,o,s,n){const l=(0,r.up)("AutoCalcComponent");return(0,r.wg)(),(0,r.j4)(l)}const za=a=>((0,r.dD)("data-v-ebae17b4"),a=a(),(0,r.Cn)(),a),Fa={class:"popup"},Oa={class:"popup-body"},Ia=za((()=>(0,r._)("h2",null,"Wpisz swoje dane",-1))),Pa=za((()=>(0,r._)("option",{value:"0",selected:"",disabled:""},"Wybierz płeć",-1))),Ea=za((()=>(0,r._)("option",{value:"1"},"Kobieta",-1))),Da=za((()=>(0,r._)("option",{value:"2"},"Mężczyzna",-1))),xa=[Pa,Ea,Da],Ta=(0,r.uE)('<option value="0" selected disabled data-v-ebae17b4>Wybierz poziom aktywności</option><option value="1.2" data-v-ebae17b4>Siedzący</option><option value="1.375" data-v-ebae17b4>Lekko aktywny</option><option value="1.55" data-v-ebae17b4>Umiarkowanie aktywny</option><option value="1.725" data-v-ebae17b4>Bardzo aktywny</option><option value="1.9" data-v-ebae17b4>Ekstra aktywny</option>',6),ja=[Ta],Wa=za((()=>(0,r._)("option",{value:"0",selected:"",disabled:""},"Wybierz cel",-1))),Va=za((()=>(0,r._)("option",{value:"-500"},"Utrata wagi",-1))),Ha=za((()=>(0,r._)("option",{value:"1"},"Utrzymanie wagi",-1))),La=za((()=>(0,r._)("option",{value:"500"},"Przybranie wagi",-1))),Ka=[Wa,Va,Ha,La],Ma={class:"buttons-box"},Na={key:0,class:"error"};function Ya(a,e,t,o,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Fa,[(0,r._)("div",Oa,[Ia,(0,r._)("select",{onChange:e[0]||(e[0]=a=>o.onGenderChange(a))},xa,32),(0,r._)("input",{type:"text",placeholder:"Podaj swoją wagę w kg",onInput:e[1]||(e[1]=e=>a.weightValue=e.target.value)},null,32),(0,r._)("input",{type:"text",placeholder:"Podaj swój wzrost w cm",onInput:e[2]||(e[2]=e=>a.heightValue=e.target.value)},null,32),(0,r._)("input",{type:"text",placeholder:"Podaj swój wiek",onInput:e[3]||(e[3]=e=>a.ageValue=e.target.value)},null,32),(0,r._)("select",{onChange:e[4]||(e[4]=a=>o.onActivityLevelChange(a))},ja,32),(0,r._)("select",{onChange:e[5]||(e[5]=a=>o.onGoalChange(a))},Ka,32),(0,r._)("div",Ma,[(0,r._)("button",{onClick:e[6]||(e[6]=(...a)=>o.goBack&&o.goBack(...a))},"Powrót"),(0,r._)("button",{onClick:e[7]||(e[7]=(...a)=>o.validateForm&&o.validateForm(...a))},[(0,r.Wm)(l,{to:"/",class:(0,p.C_)({disabled:!o.isDisabled})},{default:(0,r.w5)((()=>[(0,r.Uk)("Oblicz")])),_:1},8,["class"])])]),o.isError?((0,r.wg)(),(0,r.iD)("p",Na,"Wszystkie pola muszą być wypełnione!")):(0,r.kq)("",!0)])])}var Ba={setup(){const a=(0,T.oR)();let e=(0,fa.iH)(!1),t=(0,fa.iH)(!1),o=(0,fa.qj)({genderValue:0,weightValue:0,heightValue:0,ageValue:0,activityValue:0,goalValue:0});function r(a){o.genderValue=a.target.value}function s(a){o.activityValue=a.target.value}function n(a){o.goalValue=a.target.value}function l(){0!==o.genderValue&&0!==o.weightValue&&0!==o.heightValue&&0!==o.ageValue&&0!==o.activityValue&&0!==o.goalValue?(t.value=!1,e.value=!0,st.push({name:"home"}),a.commit("CALC_CALORIES",o),a.commit("STORE_CALORIES_AND_MAKROS")):(t.value=!0,e.value=!1)}function i(){st.push({name:"home"})}return{isDisabled:e,isError:t,...(0,fa.BK)(o),onGenderChange:r,onActivityLevelChange:s,onGoalChange:n,validateForm:l,goBack:i}}};const Ga=(0,S.Z)(Ba,[["render",Ya],["__scopeId","data-v-ebae17b4"]]);var qa=Ga,Za={components:{AutoCalcComponent:qa}};const Ua=(0,S.Z)(Za,[["render",Ra]]);var Ja=Ua;function Xa(a,e,t,o,s,n){const l=(0,r.up)("SelfCalcComponent");return(0,r.wg)(),(0,r.j4)(l)}const Qa=a=>((0,r.dD)("data-v-6e9eb830"),a=a(),(0,r.Cn)(),a),$a={class:"popup"},ae={class:"popup-body"},ee=Qa((()=>(0,r._)("h2",null,"Uzupełnij wszystkie pola",-1))),te={class:"buttons-box"},oe=Qa((()=>(0,r._)("button",null,"Powrót",-1))),re=Qa((()=>(0,r._)("p",{class:"error"},null,-1)));function se(a,e,t,o,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",$a,[(0,r._)("div",ae,[ee,(0,r._)("input",{type:"number",placeholder:"Wyporadź ilość KCAL jaką chcesz spożywać",onInput:e[0]||(e[0]=e=>a.totalCalories=e.target.value)},null,32),(0,r._)("input",{type:"number",placeholder:"Wprowadź ilość kalorii z węglowodanów",onInput:e[1]||(e[1]=e=>a.carbsCalories=e.target.value)},null,32),(0,r._)("input",{type:"number",placeholder:"Wprowadź ilość kalorii z białka",onInput:e[2]||(e[2]=e=>a.proteinsCalories=e.target.value)},null,32),(0,r._)("input",{type:"number",placeholder:"Wprowadź ilość kalorii z tłuszczy",onInput:e[3]||(e[3]=e=>a.fatsCalories=e.target.value)},null,32),(0,r._)("div",te,[(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[oe])),_:1}),(0,r._)("button",{onClick:e[4]||(e[4]=(...a)=>o.validateForm&&o.validateForm(...a))},[(0,r.Wm)(l,{to:"/",class:(0,p.C_)({disabled:o.isDisabled})},{default:(0,r.w5)((()=>[(0,r.Uk)("Zapisz")])),_:1},8,["class"])])]),re])])}var ne={setup(){const a=(0,T.oR)();let e=(0,fa.iH)(!0),t=(0,fa.qj)({totalCalories:"",carbsCalories:"",proteinsCalories:"",fatsCalories:""});function o(){let o=document.querySelector(".error");""!==t.totalCalories&&""!==t.carbsCalories&&""!==t.proteinsCalories&&""!==t.fatsCalories?parseInt(t.totalCalories)!==parseInt(t.carbsCalories)+parseInt(t.proteinsCalories)+parseInt(t.fatsCalories)?o.textContent="Ilość wprowadzonych kalorii jest różna od sumy kalorii makroskładników":(e.value=!1,o.textContent="",a.commit("ASSIGN_CALORIES",t),a.commit("STORE_CALORIES_AND_MAKROS"),st.push({name:"home"})):o.textContent="Wszystkie pola muszą być uzupełnione"}return{store:a,isDisabled:e,...(0,fa.BK)(t),validateForm:o}}};const le=(0,S.Z)(ne,[["render",se],["__scopeId","data-v-6e9eb830"]]);var ie=le,ue={components:{SelfCalcComponent:ie}};const ce=(0,S.Z)(ue,[["render",Xa]]);var pe=ce;function de(a,e,t,o,s,n){const l=(0,r.up)("ProductsComponent"),i=(0,r.up)("AddProductPopup");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{onHandlePopup:o.handlePopup,onPushToRightArray:o.pushToRightArray},null,8,["onHandlePopup","onPushToRightArray"]),(0,r.Wm)(i,{class:(0,p.C_)({active:o.isActive})},null,8,["class"])],64)}const me={class:"add-product-popup"},_e={class:"add-product-popup-body"},be=(0,r._)("h2",null,"Dodaj nowy produkt do bazy",-1),ve=["value"],Ce=["value"],Ae=["value"],fe=["value"],ke={class:"buttons-box"},ge=(0,r._)("p",{class:"add-product-error"},null,-1);function he(a,e,t,o,s,n){return(0,r.wg)(),(0,r.iD)("div",me,[(0,r._)("div",_e,[be,(0,r._)("input",{type:"text",placeholder:"Podaj nazwę produktu",onInput:e[0]||(e[0]=e=>a.name=e.target.value),value:a.name},null,40,ve),(0,r._)("input",{type:"number",placeholder:"Podaj ilość węglowodanów na 100g",onInput:e[1]||(e[1]=e=>a.carbs=e.target.value),value:a.carbs},null,40,Ce),(0,r._)("input",{type:"number",placeholder:"Podaj ilość białka na 100g",onInput:e[2]||(e[2]=e=>a.proteins=e.target.value),value:a.proteins},null,40,Ae),(0,r._)("input",{type:"number",placeholder:"Podaj ilość tłuszczy na 100g",onInput:e[3]||(e[3]=e=>a.fats=e.target.value),value:a.fats},null,40,fe),(0,r._)("div",ke,[(0,r._)("button",{onClick:e[4]||(e[4]=(...a)=>o.closePopup&&o.closePopup(...a))},"Powrót"),(0,r._)("button",{onClick:e[5]||(e[5]=(...a)=>o.validateForm&&o.validateForm(...a))},"Dodaj")]),ge])])}var we={setup(){const a=(0,T.oR)();let e=(0,fa.qj)({name:"",calories:"",carbs:"",proteins:"",fats:""});function t(){let t=document.querySelector(".add-product-error"),o=document.querySelector(".add-product-popup");""!==e.name&&""!==e.carbs&&""!==e.proteins&&""!==e.fats?(e.calories=parseInt(parseFloat(4*e.carbs)+parseFloat(4*e.proteins)+parseFloat(9*e.fats)),a.commit("PUSH_TO_ARRAY",e),t.textContent="",window.location.reload(),o.classList.remove("active"),e.name="",e.calories="",e.carbs="",e.proteins="",e.fats="",a.commit("STORE_FOOD_ARRAY")):t.textContent="Wszystkie pola muszą być uzupełnione"}function o(){let a=document.querySelector(".add-product-popup");a.classList.remove("active")}return{...(0,fa.BK)(e),validateForm:t,closePopup:o}}};const Se=(0,S.Z)(we,[["render",he]]);var ye=Se;const Re={class:"products"},ze=(0,r._)("h2",null,"Ostatnio dodane produkty",-1),Fe={class:"products-container"},Oe={key:0,class:"error-box"},Ie=(0,r._)("p",{class:"error"},"Brak produktów w bazie dodaj produkt do bazy",-1),Pe=[Ie],Ee={class:"name-and-button"},De=(0,r._)("button",null,null,-1),xe={class:"macros"};function Te(a,e,t,o,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("main",Re,[(0,r._)("button",{class:"add-btn",onClick:e[0]||(e[0]=(...a)=>o.handlePopup&&o.handlePopup(...a))},"Dodaj produkt"),ze,(0,r._)("div",Fe,[o.isEmpty?((0,r.wg)(),(0,r.iD)("div",Oe,Pe)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(o.foodArr,((a,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"box",key:e},[(0,r._)("div",Ee,[(0,r._)("p",null,(0,p.zw)(a.name),1),(0,r.Wm)(l,{to:"/pushtoarray",onClick:a=>o.returnIndex(e)},{default:(0,r.w5)((()=>[De])),_:2},1032,["onClick"])]),(0,r._)("div",xe,[(0,r._)("p",null,"KCAL: "+(0,p.zw)(a.calories),1),(0,r._)("p",null,"W: "+(0,p.zw)(a.carbs),1),(0,r._)("p",null,"B: "+(0,p.zw)(a.proteins),1),(0,r._)("p",null,"T: "+(0,p.zw)(a.fats),1)])])))),128))])])}var je={emits:[["handle-popup"],{"push-to-right-array":a=>typeof a===Number}],setup(a,{emit:e}){const t=(0,T.oR)();t.commit("GET_FOOD_ARRAY");let o=(0,fa.iH)(!1);const s=(0,r.Fl)((()=>t.state.foodArr));function n(){e("handle-popup")}function l(a){t.commit("ASSIGN_INDEX",a)}return 0==s.value.length?o.value=!0:o.value=!1,{isEmpty:o,foodArr:s,handlePopup:n,returnIndex:l}}};const We=(0,S.Z)(je,[["render",Te]]);var Ve=We,He={components:{ProductsComponent:Ve,AddProductPopup:ye},setup(){const a=(0,T.oR)();a.commit("GET_WHICH_ARRAY");let e=(0,fa.iH)(!1),t=(0,fa.iH)(!1),o=(0,fa.iH)();function s(){1==e.value?e.value=!1:e.value=!0}function n(a){return 0==t.value?t.value=!0:t.value=!1,o.value=a,o}return(0,r.ic)((()=>{a.commit("GET_FOOD_ARRAY")})),{isActive:e,number:o,pushToArray:t,handlePopup:s,pushToRightArray:n}}};const Le=(0,S.Z)(He,[["render",de]]);var Ke=Le;function Me(a,e,t,o,s,n){const l=(0,r.up)("PushToArrayPopup");return(0,r.wg)(),(0,r.j4)(l)}const Ne={class:"popup"},Ye={class:"popup-body"},Be=(0,r._)("h2",null,"Podaj wagę produktu",-1),Ge={class:"macros"},qe=["value"],Ze={class:"buttons-box"},Ue={key:0,class:"error"};function Je(a,e,t,o,s,n){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("main",Ne,[(0,r._)("div",Ye,[Be,(0,r._)("p",null,[(0,r._)("span",null,"Nazwa produktu: "+(0,p.zw)(o.foodArr.name),1)]),(0,r._)("div",Ge,[(0,r._)("p",null,[(0,r._)("span",null,"KCAL: "+(0,p.zw)(o.foodArr.calories),1)]),(0,r._)("p",null,[(0,r._)("span",null,"W: "+(0,p.zw)(o.foodArr.carbs),1)]),(0,r._)("p",null,[(0,r._)("span",null,"B: "+(0,p.zw)(o.foodArr.proteins),1)]),(0,r._)("p",null,[(0,r._)("span",null,"T: "+(0,p.zw)(o.foodArr.fats),1)])]),(0,r._)("input",{type:"number",placeholder:"Podaj wagę produktu w g",onInput:e[0]||(e[0]=a=>o.productWeight=a.target.value),value:o.productWeight},null,40,qe),(0,r._)("div",Ze,[(0,r._)("button",{onClick:e[1]||(e[1]=(...a)=>o.goBack&&o.goBack(...a))},"Powrót"),(0,r._)("button",{onClick:e[2]||(e[2]=(...a)=>o.validateForm&&o.validateForm(...a))},[(0,r.Wm)(l,{to:"/",class:(0,p.C_)(["link",{disabled:o.isDisabled}])},{default:(0,r.w5)((()=>[(0,r.Uk)("Dodaj")])),_:1},8,["class"])])]),o.errorVisbile?((0,r.wg)(),(0,r.iD)("p",Ue,"Waga produktu musi być większa od 0")):(0,r.kq)("",!0)])])}var Xe={name:"PushToArrayPopup",setup(){let a=(0,fa.iH)(!1),e=(0,fa.iH)(!0),t=(0,fa.iH)(""),o=(0,fa.qj)({name:"",calories:0,proteins:0,fats:0});const s=(0,T.oR)(),n=(0,r.Fl)((()=>s.state.index)),l=(0,r.Fl)((()=>s.state.foodArr[n.value]));function i(){""!==t.value?(o.name=l.value.name,o.calories=parseInt(l.value.calories)*parseFloat(t.value)/100,o.carbs=parseInt(l.value.carbs)*parseFloat(t.value)/100,o.proteins=parseInt(l.value.proteins)*parseFloat(t.value)/100,o.fats=parseInt(l.value.fats)*parseFloat(t.value)/100,a.value=!1,e.value=!1,s.commit("PUSH_TO_RIGHT_ARRAY",o),st.push({name:"home"})):(a.value=!0,e.value=!0)}function u(){st.push({name:"addproductview"})}return{productWeight:t,errorVisbile:a,isDisabled:e,foodArr:l,...(0,fa.BK)(o),validateForm:i,goBack:u}}};const Qe=(0,S.Z)(Xe,[["render",Je]]);var $e=Qe,at={components:{PushToArrayPopup:$e}};const et=(0,S.Z)(at,[["render",Me]]);var tt=et;const ot=[{path:"/",name:"home",component:ya},{path:"/autocalc",name:"autocalc",component:Ja},{path:"/selfcalc",name:"selfcalc",component:pe},{path:"/addproduct",name:"addproductview",component:Ke},{path:"/pushtoarray",name:"pushtoarray",component:tt}],rt=(0,c.p7)({history:(0,c.PO)("/kalkulator-kalorii/"),routes:ot});var st=rt,nt={setup(){function a(){st.push({name:"home"})}return{goToMainPage:a}}};const lt=(0,S.Z)(nt,[["render",u]]);var it=lt,ut={components:{HeaderComponent:it}};const ct=(0,S.Z)(ut,[["render",n]]);var pt=ct;const dt=(0,T.MT)({state:{totalCalories:0,carbsCalories:0,proteinsCalories:0,fatsCalories:0,index:0,whichArray:"",foodArr:[],breakfestArr:[],lunchArr:[],dinnerArr:[],snacksArr:[],breakfestCaloriesSum:0,breakfestCarbsSum:0,breakfestProteinsSum:0,breakfestFatsSum:0,lunchCaloriesSum:0,lunchCarbsSum:0,lunchProteinsSum:0,lunchFatsSum:0,snacksCaloriesSum:0,snacksCarbsSum:0,snacksProteinsSum:0,snacksFatsSum:0,dinnerCaloriesSum:0,dinnerCarbsSum:0,dinnerProteinsSum:0,dinnerFatsSum:0},getters:{},mutations:{CALC_CALORIES(a,e){1==e.genderValue?(a.totalCalories=parseInt((655+9.6*parseFloat(e.weightValue)+1.8*parseFloat(e.heightValue)-4.7*parseFloat(e.ageValue))*parseFloat(e.activityValue)+parseFloat(e.goalValue)),a.carbsCalories=.45*a.totalCalories,a.proteinsCalories=.35*a.totalCalories,a.fatsCalories=.3*a.totalCalories):(a.totalCalories=parseInt((66+13.7*parseFloat(e.weightValue)+5*parseFloat(e.heightValue)-6.8*parseFloat(e.ageValue))*parseFloat(e.activityValue)+parseFloat(e.goalValue)),a.carbsCalories=.45*a.totalCalories,a.proteinsCalories=.35*a.totalCalories,a.fatsCalories=.3*a.totalCalories)},CALC_MAKROS(a){a.breakfestCaloriesSum=0,a.breakfestCarbsSum=0,a.breakfestProteinsSum=0,a.breakfestFatsSum=0,a.lunchCaloriesSum=0,a.lunchCarbsSum=0,a.lunchProteinsSum=0,a.lunchFatsSum=0,a.snacksCaloriesSum=0,a.snacksCarbsSum=0,a.snacksProteinsSum=0,a.snacksFatsSum=0,a.dinnerCaloriesSum=0,a.dinnerCarbsSum=0,a.dinnerProteinsSum=0,a.dinnerFatsSum=0,a.breakfestArr.forEach((e=>{a.breakfestCaloriesSum+=e.calories,a.breakfestCarbsSum+=e.carbs,a.breakfestProteinsSum+=e.proteins,a.breakfestFatsSum+=e.fats})),a.lunchArr.forEach((e=>{a.lunchCaloriesSum+=e.calories,a.lunchCarbsSum+=e.carbs,a.lunchProteinsSum+=e.proteins,a.lunchFatsSum+=e.fats})),a.snacksArr.forEach((e=>{a.snacksCaloriesSum+=e.calories,a.snacksCarbsSum+=e.carbs,a.snacksProteinsSum+=e.proteins,a.snacksFatsSum+=e.fats})),a.dinnerArr.forEach((e=>{a.dinnerCaloriesSum+=e.calories,a.dinnerCarbsSum+=e.carbs,a.dinnerProteinsSum+=e.proteins,a.dinnerFatsSum+=e.fats}))},ASSIGN_CALORIES(a,e){a.totalCalories=parseInt(e.totalCalories),a.carbsCalories=parseInt(e.carbsCalories),a.proteinsCalories=parseInt(e.proteinsCalories),a.fatsCalories=parseInt(e.fatsCalories)},ASSIGN_WHICH_ARRAY(a,e){a.whichArray=e,localStorage.setItem("whichArray",a.whichArray)},GET_WHICH_ARRAY(a){a.whichArray=localStorage.getItem("whichArray")},ASSIGN_INDEX(a,e){a.index=e},PUSH_TO_ARRAY(a,e){let t={name:e.name,calories:e.calories,carbs:e.carbs,proteins:e.proteins,fats:e.fats};a.foodArr.push(t)},PUSH_TO_RIGHT_ARRAY(a,e){switch(a.whichArray){case"Śniadanie":a.breakfestArr.push(e),localStorage.setItem("breakfestArr",JSON.stringify(a.breakfestArr));break;case"Obiad":a.lunchArr.push(e),localStorage.setItem("lunchArr",JSON.stringify(a.lunchArr));break;case"Kolacja":a.dinnerArr.push(e),localStorage.setItem("dinnerArr",JSON.stringify(a.dinnerArr));break;case"Przekąska":a.snacksArr.push(e),localStorage.setItem("snacksArr",JSON.stringify(a.snacksArr));break;default:break}},STORE_FOOD_ARRAY(a){localStorage.setItem("foodArr",JSON.stringify(a.foodArr))},STORE_CALORIES_AND_MAKROS(a){localStorage.setItem("totalCalories",a.totalCalories),localStorage.setItem("carbsCalories",a.carbsCalories),localStorage.setItem("proteinsCalories",a.proteinsCalories),localStorage.setItem("fatsCalories",a.fatsCalories)},GET_FOOD_ARRAY(a){a.foodArr=JSON.parse(localStorage.getItem("foodArr")||"[]")},GET_TODAYS_MEAL(a){a.breakfestArr=JSON.parse(localStorage.getItem("breakfestArr")||"[]"),a.lunchArr=JSON.parse(localStorage.getItem("lunchArr")||"[]"),a.dinnerArr=JSON.parse(localStorage.getItem("dinnerArr")||"[]"),a.snacksArr=JSON.parse(localStorage.getItem("snacksArr")||"[]")},GET_CALORIES_AND_MAKROS(a){a.totalCalories=localStorage.getItem("totalCalories"),null==a.totalCalories&&(a.totalCalories=0),a.carbsCalories=localStorage.getItem("carbsCalories"),a.proteinsCalories=localStorage.getItem("proteinsCalories"),a.fatsCalories=localStorage.getItem("fatsCalories")},REMOVE_FROM_BREAKFEAST_ARRAY(a,e){a.breakfestArr.splice(e,1),localStorage.setItem("breakfestArr",JSON.stringify(a.breakfestArr))},REMOVE_FROM_LUNCH_ARRAY(a,e){a.lunchArr.splice(e,1),localStorage.setItem("lunchArr",JSON.stringify(a.lunchArr))},REMOVE_FROM_SNACKS_ARRAY(a,e){a.snacksArr.splice(e,1),localStorage.setItem("snacksArr",JSON.stringify(a.snacksArr))},REMOVE_FROM_DINNER_ARRAY(a,e){a.dinnerArr.splice(e,1),localStorage.setItem("dinnerArr",JSON.stringify(a.dinnerArr))}},actions:{}});var mt=dt;(0,o.ri)(pt).use(mt).use(st).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return a[o].call(s.exports,s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(e,o,r,s){if(!o){var n=1/0;for(c=0;c<a.length;c++){o=a[c][0],r=a[c][1],s=a[c][2];for(var l=!0,i=0;i<o.length;i++)(!1&s||n>=s)&&Object.keys(t.O).every((function(a){return t.O[a](o[i])}))?o.splice(i--,1):(l=!1,s<n&&(n=s));if(l){a.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[o,r,s]}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/kalkulator-kalorii/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var r,s,n=o[0],l=o[1],i=o[2],u=0;if(n.some((function(e){return 0!==a[e]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(i)var c=i(t)}for(e&&e(o);u<n.length;u++)s=n[u],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(c)},o=self["webpackChunkkalkulator_kalorii"]=self["webpackChunkkalkulator_kalorii"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(728)}));o=t.O(o)})();
//# sourceMappingURL=app.3872a6ee.js.map