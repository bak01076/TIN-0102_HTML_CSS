let iphone = new Object();
iphone.model = "12 max pro";
iphone.storage = 256;
iphone.ram = 8;
iphone.price = 10000;

let showProps = (object) => {
  let result = ``;
  for (let item in object) {
    if (object.hasOwnProperty(item)) {
      result += `${item}: ${object[item]} / type: ${typeof object[item]}\n`;
    }
  }
  return result;
};
console.log(showProps(iphone));

iphone.getRam = () => {
  return ram;
};

iphone.setRam = (newRam) => {
  ram = newRam;
};

iphone.setRam(32);
console.log(`Upgraded iphone Ram: ${iphone.getRam()}`);
