function generateRandomProducts() {
  const colors = ["Black", "White", "Red", "Blue", "Green"];
  const materials = ["Leather", "Synthetic", "Canvas"];
  const styles = ["Oxford", "Loafer", "Sneaker", "Boot"];

  const randomProducts = [];

  for (let i = 1; i <= 30; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomMaterial =
      materials[Math.floor(Math.random() * materials.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const product = {
      id: i,
      title: `Random Product ${i}`,
      brand: "Random Brand",
      price: (Math.random() * 100).toFixed(0),
      color: randomColor,
      material: randomMaterial,
      style: randomStyle,
      design: `Random Design for Product ${i}`,
      size: ["US 8", "US 9", "US 10"],
      images: [`giay${i}`, `giay${i + 1}`, `giay${i + 2}`, `giay${i + 3}`],
      code: `RND-${i}`,
      quantity: 1,
    };

    randomProducts.push(product);
  }

  return { products: randomProducts };
}

const randomData = generateRandomProducts();
console.log(JSON.stringify(randomData, null, 2));
