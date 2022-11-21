//creating variables for all the menu items
var burgerName;
var friesName;
var sodaName;
var burgerTotal;
var friesTotal;
var sodaTotal;
var orderTotal = 0;
var deliveryConfirm = false;

alert("Hi there ! Thanks for choosing Burger Mart as your prefered online ordering system. Below is our menu\n\nBurgers:\n1. Large Dusty: $3\n2. small Dusty: $2\n3. Big chief: $7\n\nFries:\n1. small fries: $1\n2. Large fries; $2\n\nSoda:\n1. Small soda : $1\n2. Large soda : $1.5 ");

var burgerVar = prompt("To start placing your order, select a burger:\n\n1. Large Dusty: $3\n2. small Dusty: $2\n3. Big Chief: $7")

var friesVar = prompt("select a fries:\n\n1. Small fries : $1\n2. Large fries: $2\n")
var sodaVar = prompt("Select your soda.\n\n1. Small soda: $1\n2. Large soda: $1.5");

//functions

function mealOrder(burger, fries, soda)
{
 this.burger=burger;

 if (this.burger==1)
 {
    burgerName = "Large Dusty";
    burgerTotal = 3;
 }
 else if (this.burger==2)
 {
    burgerName="Small Dusty";
    burgerTotal=2;
 }
 else if (this.burger==3)
 {
    burgerName="Big Chief";
    burgerTotal=7;
 }

 //to take input from user

 this.fries=fries;

 if (this.fries==1)
 {
    friesName = "Small Fries";
    friesTotal = 1;
 }
 else if (this.fries==2)
 {
    friesName="Large Fries";
    friesTotal=2;
 }

 this.soda=soda;

 if (this.soda==1)
 {
    sodaName = "Small soda";
    sodaTotal = 1;
 }
 else if (this.soda==2)
 {
    sodaName="Large soda";
    sodaTotal=1.5;
 }


 orderTotal==calculateTotal(burgerTotal,friesTotal,sodaTotal);
//confirming user is he/she want delviery or not

this.delivery=function(){
    var askDelivery=prompt("Would you like your meal to delivered ?");
    if(askDelivery=="yes")
    {
        deliveryConfirm=true;
    }
}

this.displayOrder = function()
{
    if(deliveryConfirm==false)
    {
        alert("Your order details are below:\n\n"+burgerName+"$" +burgerTotal+"\n"+friesName+"$"+friesTotal+"\n"+sodaName+"$"+sodaTotal+"\nyour order total is $"+orderTotal);
    }
    else
    {
        alert("Your order details are below:\n\n"+burgerName+"$" +burgerTotal+"\n"+friesName+"$"+friesTotal+"\n"+sodaName+"$"+sodaTotal+"\n"+"Delivery fee $ 5 \n"+"your order total is $"+(orderTotal+5));
    }
}
}

var newOrder = new mealOrder (burgerVar,friesVar,sodaVar);

newOrder.delivery();
newOrder.displayOrder();
//calculate total of order
function calculateTotal(burger, fries, soda) {
   return burger+fries+soda;
}
