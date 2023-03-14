document.getElementById("icon").addEventListener("click",crateList);
let cards=[];
function crateList(){
  let form = document.querySelector("#listForm")
    form.style.display="block";
    document.querySelector("#container").style.opacity = "0.1";
    document.querySelector("#secondContainer").style.opacity="0.1";
}


document.querySelector("#close").addEventListener("click",removeListFom);
function removeListFom(){
  document.querySelector("#listForm").style.display="none"
  document.querySelector("#container").style.opacity = "1";
  document.querySelector("#secondContainer").style.opacity="1";
}


document.querySelector("#addList").addEventListener("click",createListForm); //list add
function createListForm(){
   let userInput=document.querySelector("#listName").value;
   document.querySelector("#listForm").style.display="none";
   let div1=document.createElement("div");  // card create
   div1.classList.add("newCard");
   let title=document.createElement("h4");   
   title.classList.add("listHeading");
     div1.appendChild(title);
   title.innerText=userInput;
   let hr=document.createElement("hr");
     div1.appendChild(hr);
    let img=document.createElement("img");
    img.classList.add("trashImage")
    img.setAttribute("src","trash.jpg");  //add trash img
    div1.appendChild(img,);
    let img2=document.createElement("img");
    img2.classList.add("cardPlusIcon");
    img2.setAttribute("src","cardplus.jpg");   //add plus img
    div1.appendChild(img2);
    document.querySelector("#container").style.opacity = "1";
    document.querySelector("#secondContainer").style.opacity="1";
    img.addEventListener("click",removeCard);
    function removeCard(){
      div1.style.display="none";
      document.querySelector("#container").style.opacity = "1";
    }
    img2.addEventListener("click",addText);
    function addText(){
      document.querySelector("#container").style.opacity = "0.1";
      let itemForm=document.querySelector("#itemForm");
      div1.style.opacity="0.1";
      itemForm.style.display="block";


      let addItemBtn=document.querySelector("#addItem");   //add item button
      addItemBtn.addEventListener("click",addItems)  
      function addItems (){

      let userInpItem=document.querySelector("#itemList").value;
      document.querySelector("#itemForm").style.display="none";
      document.querySelector("#container").style.opacity = "1";
      div1.style.opacity="1";
      let p=document.createElement("p");
       p.setAttribute("class","pid");
       p.innerText = userInpItem;
       let span = document.createElement("span");
       span.innerHTML = `<button class="markDoneBtn" id="markDoneBtn">Mark Done</button>`; //mark done button
       span.firstChild.addEventListener("click", function () {
         lineThrough(p);
         this.style.display = "none";
       });
       p.appendChild(span);
       div1.appendChild(p);
      
     
       addItemBtn.removeEventListener("click",addItems);
      }
    }
     function lineThrough(element) {
      // let p=document.querySelector(".pid");
      element.style.textDecoration = "line-through";
    }


     //item selected box deleted
     let deleteBox=document.querySelector("#closeItem");
     deleteBox.addEventListener("click",deleteItemBox);
     function  deleteItemBox(){
      document.querySelector("#itemForm").style.display="none";
      document.querySelector("#container").style.opacity = "1";
      div1.style.opacity="1"
     }

     cards.push(div1);
     console.log(cards);  
     display(cards)
     
        function display(cards){
          let container=document.querySelector("#secondContainer");
          for (let i=0; i<cards.length;i++){
            container.appendChild(cards[i]);
          }
        }
        
     title.addEventListener("click",openCard);   //one card open
     function openCard(){
       document.querySelector("#head").style.display="none";
     document.querySelector("#text").style.display="none";
      document.querySelector("#secondContainer").style.display=" none";
      document.querySelector("#backBtn").style.display="block";
     let getText=document.querySelector("#getText");
     getText.innerHTML=userInput;
     div1.style.display="block";
     let newDivForCard=document.getElementById("newDivForCard");
     newDivForCard.appendChild(div1,getText)
    }
    

    let backIcon=document.querySelector("#goBackIcon");   //go back button
    backIcon.addEventListener("click",backToMainPage);
    function backToMainPage(){
      let ele=document.querySelector("#backBtn");
      let ele2=document.querySelector("#newDivForCard");
      ele.style.display="none";
      ele2.style.display="none";
    document.querySelector("#secondContainer").style.display="flex";
    document.querySelector("#head").style.display="block";
    document.querySelector("#text").style.display="block";
   }
}





