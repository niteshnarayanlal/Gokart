var urlhm1="http://";
var urlhm2=".homeshop18.com/";
var urlfk1="http://www.flipkart.com/";
var urlfk2="?dd=0&query=";
//var urlfk2="&vertical=all&autosuggest[as]=off&autosuggest[as-submittype]=entered&autosuggest[as-grouprank]=0&autosuggest[as-overallrank]=0&Search=Search&selmitem=";

var amazon1="http://www.amazon.com/s/ref=nb_sb_noss?url=";
var amazon2="&field-keywords=";
var amazon3="&x=0&y=0";

//http://www.flipkart.com/search-books?query=sony+ebook+reader
//http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dcomputers&field-keywords=hp&x=14&y=18
//http://www.amazon.com/s/ref=nb_sb_ss_i_2_4?url=search-alias%3Delectronics&field-keywords=microphone&x=0&y=0
//http://books.homeshop18.com/you%20can%20win/search:you%20can%20win

function init()
{
    K("searchbox").focus();
}
   
function _keyUp(e)
{
if(e.keyCode==13)
_search();
}

function _search()
{
var product_name=K("searchbox").value;
var product_search="";

  if(document.getElementById("fk").checked){
    
    
     chrome.tabs.create({url:urlfk1+document.getElementById("flpk").value+urlfk2+product_name});

}

if(document.getElementById("am").checked){
  
     chrome.tabs.create({url:amazon1+document.getElementById("ama").value+amazon2+product_name+amazon3});

}

if(document.getElementById("hs").checked){
    product_search+=product_name;
    product_search+="/search:";
    product_search+=product_name;
    chrome.tabs.create({url:urlhm1+document.getElementById("hp").value+urlhm2+product_search});

}


 //}
}//end of homeshop 18
//end of function


function K(id)
{
return document.getElementById(id);
}

function toggle(shopName){
  if(shopName=="flipkart"){
    document.getElementById("flipkart").style.display="block";
    document.getElementById("homeshop").style.display="none";
    document.getElementById("amazon").style.display="none";
  }
  else if(shopName=="amazon"){
    document.getElementById("amazon").style.display="block";
    document.getElementById("homeshop").style.display="none";
    document.getElementById("flipkart").style.display="none";
  }
  else if(shopName=="homeshop"){
    document.getElementById("homeshop").style.display="block";
    document.getElementById("flipkart").style.display="none";
    document.getElementById("amazon").style.display="none";
  }
}


  
  