let dropdownContent = document.getElementById('dropdown-content');

document.getElementById('drop-down').addEventListener('click', () => {

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'
        document.getElementById('arrow-up').style.display = 'inline'
        document.getElementById('arrow-down').style.display = 'none'
    }
    else {
        dropdownContent.style.display = 'block';
        document.getElementById('arrow-up').style.display = 'none'
        document.getElementById('arrow-down').style.display = 'inline'
    }
})

let productDropdownContent = document.getElementById('product-dropdown-content');
let title1 = document.getElementById('mob-nav-title-1');

title1.addEventListener('click', function () {
    if (productDropdownContent.style.display === 'none') {
        productDropdownContent.style.display = 'block'
        document.getElementById('arrow-product-up').style.display = 'none'
        document.getElementById('arrow-product-down').style.display = 'inline'
        companyDropdownContent.style.display = 'none'
        connectDropdownContent.style.display = 'none'

    }
    else {
        productDropdownContent.style.display = 'none'
        document.getElementById('arrow-product-up').style.display = 'inline'
        document.getElementById('arrow-product-down').style.display = 'none'
    }
})


let companyDropdownContent = document.getElementById('company-dropdown-content');
let title2 = document.getElementById('mob-nav-title-2')

title2.addEventListener('click', function () {
    if (companyDropdownContent.style.display == 'none') {
        companyDropdownContent.style.display = 'block'
        document.getElementById('arrow-company-up').style.display = 'none'
        document.getElementById('arrow-company-down').style.display = 'inline'
        connectDropdownContent.style.display = 'none'
        productDropdownContent.style.display = 'none'
    }
    else {
        companyDropdownContent.style.display = 'none'

        document.getElementById('arrow-company-up').style.display = 'inline'
        document.getElementById('arrow-company-down').style.display = 'none'
    }
})


let connectDropdownContent = document.getElementById('connect-dropdown-content');
let title3 = document.getElementById('mob-nav-title-3');

title3.addEventListener('click', function () {
    if (connectDropdownContent.style.display === 'none') {
        connectDropdownContent.style.display = 'block'
        document.getElementById('arrow-connect-up').style.display = 'none'
        document.getElementById('arrow-connect-down').style.display = 'inline'
        companyDropdownContent.style.display = 'none'
        productDropdownContent.style.display = 'none'
    }
    else {
        connectDropdownContent.style.display = 'none'
        document.getElementById('arrow-connect-up').style.display = 'inline'
        document.getElementById('arrow-connect-down').style.display = 'none'
    }
})

document.getElementById('open-btn').addEventListener('click', function () {
    document.getElementById('close-btn').style.display = 'block'
    document.getElementById('mob-nav-menu').style.display = 'block'
    document.getElementById('open-btn').style.display = 'none'
})

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('close-btn').style.display = 'none'
    document.getElementById('mob-nav-menu').style.display = 'none'
    document.getElementById('open-btn').style.display = 'block'
})

