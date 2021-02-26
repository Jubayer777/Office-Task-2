// api calling for drinks
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n`)
        .then(response=>response.json())
        .then(data=>displayItems(data))

// Displaying drinks on hompage
const displayItems= items=>{
    const itemsDiv= document.getElementById('items-div');
    const drinks= items.drinks;
    drinks.forEach(item => {
       const singleItemDiv= document.createElement('div');
        singleItemDiv.className=' col d-flex justify-content-center';
        const singleItemInfo=
       `<div class="single-item card" style="width: 18rem;">
            <img src="${item.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title mb-3 font-weight-bolder">Drinks Name: ${item.strDrink}</h5>
                <div>
                 <h6 class="m-1 font-weight-bold">Ingredients</h6>
                 <li class="m-1 ">${item.strIngredient1}</li>
                 <li class="m-1 ">${item.strIngredient2}</li>
                 <li class="m-1 ">${item.strIngredient3}</li>
                </div>
            </div>
        </div>`;
        singleItemDiv.innerHTML=singleItemInfo;
        itemsDiv.appendChild(singleItemDiv);
    });
}

// contact button handling
const contactPage=()=>{
    document.getElementById('home-page').style.display='none';
    document.getElementById('contact-form').style.display='block';
    document.getElementById('customer-details').style.display='none';
    document.getElementById('page-body').style.backgroundColor='#20B2AA';
    document.getElementById('page-header').style.backgroundColor='#20B2AA';
}

//home button handling
const homePage=()=>{
    document.getElementById('contact-form').style.display='none';
    document.getElementById('customer-details').style.display='none';
    document.getElementById('home-page').style.display='block';
    document.getElementById('page-body').style.backgroundColor='#BC8F8F';
    document.getElementById('page-header').style.backgroundColor='#BC8F8F';
}

// form submit button handling
const formSubmitBtn=()=>{
    const formFirstName=document.getElementById('form-first-name').value;
    const formLastName=document.getElementById('form-last-name').value;
    var formGender = document.getElementsByClassName('form-gender');
    const formAge=document.getElementById('form-age').value;
    const formEmail=document.getElementById('form-email').value;
    const formPass=document.getElementById('form-password').value;
    const formPhone=document.getElementById('form-phone').value;
    const formAddress=document.getElementById('form-address').value;
    const formCity=document.getElementById('form-city').value;
    const formState=document.getElementById('form-state').value;
    const formZip=document.getElementById('form-zip').value;

    if(formFirstName==''|| formLastName==''||formGender.value==''||formAge==''||formEmail==''||formPass==''||formPhone==''||formAddress==''||formCity==''||formState==''||formZip=='' ){
        document.getElementById('error-message').innerText='Please fill up all the field';
    }
    else{
            document.getElementById('contact-form').style.display='none';
            document.getElementById('customer-details').style.display='block';
            document.getElementById('page-body').style.backgroundColor='#D8BFD8';
            document.getElementById('page-header').style.backgroundColor='#D8BFD8';
            document.getElementById('page-footer').style.marginTop='150px';

            // Capturing full name
            const customerName=document.getElementById('customer-name');
            customerName.innerText= formFirstName + ' ' + formLastName;
            
            // Capturing gender
                    for(i = 0; i < formGender.length; i++) { 
                        if(formGender[i].checked) 
                        document.getElementById("customer-gender").innerHTML
                                =formGender[i].value; 
                    }
            
            //capturing age
            const customerAge=document.getElementById('customer-age');
            customerAge.innerText=formAge; 

            //capturing email
            const customerEmail=document.getElementById('customer-email');
            customerEmail.innerText=formEmail;

            //capturing phone
            const customerPhone=document.getElementById('customer-phone');
            customerPhone.innerText=formPhone;

            //capturing address
            const customerAddress=document.getElementById('customer-address');
            customerAddress.innerText=formAddress;
    }
}
  
// edit button hndling
const editBtn=()=>{
    document.getElementById('customer-details').style.display='none';
    document.getElementById('contact-form').style.display='block';  
}