let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let carts = [];
class Product {
  constructor(id, name, count) {
    this.id = id;
    this.name = name;
    this.count = count;
  }
}
function star() {
  while (true) {
    console.log("Chọn C để thực hiện chức năng mua");
    console.log(
      "Chọn R để kiểm tra các sản phẩm có trong cửa hàng và giỏ sản phẩm"
    );
    console.log("Chọn U để chỉnh sửa số lượng sản phẩm trong giỏ");
    console.log("Chọn D để bỏ sản phẩm trong giỏ");
    console.log("Chọn E để thoát");
    let select = prompt(
      "Hãy nhập các ký tự C/R/U/D/E để thực hiện các thao tác"
    ).toUpperCase();
    switch (select) {
      case "C":
        buyProduct();
        break;
      case "R":
        check();
        break;
      case "U":
        updateCarts();
        break;
      case "D":
        deleteItemInCarts();
        break;
      case "E":
        alert("Cảm ơn bạn đã đến với Rikei Stores");
        return;
      default:
        alert("Không có phím chức năng như bạn nhập");
        break;
    }
  }
}
star();
function buyProduct() {
  let product = prompt("Bạn hãy nhập sản phẩm bạn muốn mua")
    .toUpperCase()
    .trim();
  let productNumberBuy = 0;
  if (carts.length > 0) {
    for (let g = 0; g < carts.length; g++) {
      if (product == carts[g].name.toUpperCase()) {
        console.log(
          `Sản phẩm ${product} đã có trong giỏ hàng vui lòng chọn chức năng U`
        );
        console.log(".......................................");
      } else {
        for (let k = 0; k < stores.length; k++) {
          if (product == stores[k].name.toUpperCase()) {
            let c = new Product(stores[k].id, stores[k].name, 1);
            stores[k].count = stores[k].count - 1;
            carts.push(c);
            productNumberBuy += 1;
          }
        }
        if (productNumberBuy == 0) {
          console.log(`Không có sản phẩm ${product} trong cửa hàng`);
        }
        console.log("....................................................");
      }
    }
  } else {
    for (let k = 0; k < stores.length; k++) {
      if (product == stores[k].name.toUpperCase()) {
        let c = new Product(stores[k].id, stores[k].name, 1);
        stores[k].count = stores[k].count - 1;
        carts.push(c);
        productNumberBuy += 1;
      }
    }
    if (productNumberBuy == 0) {
      console.log(`Không có sản phẩm ${product} trong cửa hàng`);
    }
    console.log("....................................................");
  }
}

function check() {
  for (const key in stores) {
    console.log("các sản phẩm có trong cửa hàng: ", stores[key]);
  }
  for (const key in carts) {
    console.log("các sản phẩm có trong giỏ hàng: ", carts[key]);
  }
  console.log("....................................................");
}

function updateCarts() {
  let a = prompt("Bạn hãy nhập sản phẩm bạn muốn thay đổi số lượng mua")
    .toUpperCase()
    .trim();
  let b = +prompt(`Hãy nhập số lượng sản phẩm ${a} bạn muốn mua`);
  let c = 0;
  for (let i = 0; i < carts.length; i++) {
    if (a == carts[i].name.toUpperCase()) {
      carts[i].count = b;
      c += 1;
      for (let j = 0; j < stores.length; j++) {
        if (a == stores[j].name.toUpperCase()) {
          stores[j].count = stores[j].count + 1 - b;
        }
      }
    }
  }
  if (c == 0) {
    console.log(`Sản phẩm ${a} không có trong giỏ hàng`);
  }
  console.log("....................................................");
}
function deleteItemInCarts() {
  let productDelete = prompt("Hãy nhập tên sản phẩm bạn muốn xóa khỏi giỏ hàng");
  let h;
  let u = 0;
  if (carts.length > 0) {
    for (let index = 0; index < carts.length; index++) {
      if (
        productDelete.toUpperCase().trim() == carts[index].name.toUpperCase()
      ) {
        h = carts[index].count;
        u += 1;
        carts.splice(index, 1);
        for (let l = 0; l < stores.length; l++) {
          if (
            productDelete.toUpperCase().trim() == stores[l].name.toUpperCase()
          ) {
            stores[l].count = stores[l].count + h;
          }
        }
      }
      }
      if (u == 0) {
        console.log(`Chưa có sản phẩm ${productDelete} trong giỏ hàng vui lòng chọn chức năng C`);
    }
    console.log("..........................................................");
  } else {
    console.log(`Chưa có sản phẩm ${productDelete} trong giỏ hàng vui lòng chọn chức năng C`);
    console.log("..........................................................");
  }
}
