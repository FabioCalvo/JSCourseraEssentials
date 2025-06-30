let typeOfPerson = "Employee";
let authorization_based_code;

switch (typeOfPerson) {
    case "Employee":
        authorization_based_code = "001";
        break;
    case "Enrolled Member":
        authorization_based_code = "002";
        break;
    case "Subscriber":
        authorization_based_code = "003";
        break;
    case "Non-Subscriber":
        authorization_based_code = "004";
        break;        
    default:
        authorization_based_code = "000";
}

console.log(`Authorization base code for ${typeOfPerson} is ${authorization_based_code}`)