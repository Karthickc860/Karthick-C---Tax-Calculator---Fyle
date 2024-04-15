function myfunction(){
    const GrossAInc = Number(document.getElementById("annualincome").value)
    const ExtInc = Number(document.getElementById("extraincome").value)
    const AppDeduct = Number(document.getElementById("AppliDeduct").value)
    const AgeCategory = (document.getElementById("Age").value)
    let a = (GrossAInc);
    let b = (ExtInc);
    let c = (AppDeduct);
    let d = (((a+b)-c));
    let e = (3/100);
    const Op = document.getElementById("OverallInc").innerHTML = ("The tax amount is : " + (d*e));
}