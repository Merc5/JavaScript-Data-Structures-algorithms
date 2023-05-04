//calculateDiscountCode is designed to be referenced in a FormAssembly calculated field
function discountCode(coupon,subtotal)
{ 
    //set codes    
    //this section is for percentage off codes
    var free = ['free123','free456','free789'];
    var percent10 = ['ten1','ten2','ten3'];
    var percent20 = ['twenty','twenty1','twenty2'];
    //this section is for dollar-value codes
    var dollars20 = ['dollarcode1', 'dollarcode2'];
    var dollars25 = ['dollarcode3', 'dollarcode4'];
    //set default values to no discount
    var amount = subtotal;
  	var coupon = coupon;
    var percentDiscount = 1;
    var dollarDiscount = 0;
    
    //adjust percentdiscount variable if the coupon code entered matches
    if(free.includes(coupon)){percentDiscount=0}
        else{if(percent10.includes(coupon)){percentDiscount=.9}
            else{if(percent20.includes(coupon)){percentDiscount=.8}           
                }
            };

    //adjust dollar-value variable if the coupon code entered matches
    if(dollars20.includes(coupon)){dollarDiscount=20}
        else{if(dollars25.includes(coupon)){dollarDiscount=25}
            };

    var totalAmount = amount*percentDiscount-dollarDiscount;

    //ensure non-negative total
    if(totalAmount < 0){totalAmount = 0};
  
    return totalAmount;
};
