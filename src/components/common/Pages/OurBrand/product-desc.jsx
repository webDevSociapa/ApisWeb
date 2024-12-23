"use client";
import { useSearchParams } from "next/navigation";

export default function ProductDesc() {
  const searchParams = useSearchParams();
  const selectedProduct = JSON.parse(searchParams.get("selectedProduct") || "{}");
  const { back_img, img, product_img_1,product_img_2 } = selectedProduct;
  console.log("back_img",back_img);
  

  console.log("selectedProduct111", selectedProduct);

  // Sample Data (Fallback if `selectedProduct` is not provided)
  const productData = {
    name: selectedProduct.name || "Organic Honey",
    description:
      selectedProduct.description ||
      "Sourced from the beautiful Kashmir Valley, Apis Organic Honey is an allegory of organic purity. With consistent & delectable natural taste, Apis Organic Honey is patiently extracted & packaged to retain its untouched goodness and flavor! Experience it yourself, and relish this organic gift of nature today!",
    img: selectedProduct.img?.src || "/path-to-default-image",
    weight: selectedProduct.weight || "450g",
    nutritionalInfo: selectedProduct.nutritionalInfo || [
      { nutrient: "Energy", per100g: "332.40 kcal", per21g: "69.8 kcal", rda: "3.49%" },
      { nutrient: "Protein", per100g: "0.28g", per21g: "0.06g", rda: "-" },
      { nutrient: "Carbohydrates", per100g: "82.82g", per21g: "17.39g", rda: "-" },
    ],
    thumbnails: selectedProduct.thumbnails || [
      { src: "/path-to-default-thumbnail", alt: "Default Thumbnail" },
    ],
    healthBenefits:
      selectedProduct.health_benefits ||
      "Honey is packed with antioxidants that boost your immune system and help fight off illnesses. Regular consumption of honey can strengthen your body’s defenses and promote overall health.",
    customerSays:
      selectedProduct.customer_says ||
      "Apis Organic Honey is my go-to for its authentic taste and quality!",
  };

  console.log("productData",productData);
  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={product_img_1.src}
            alt={productData.name}
            className="rounded-lg shadow-md max-w-full"
          />
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {/* {back_img.map((thumbnail, index) => ( */}
              <img
                // key={index}
                src={back_img.src}
                // alt={back_img.alt || `Thumbnail ${index + 1}`}
                className="w-16 h-16 rounded-md border border-gray-200 cursor-pointer"
              />
            {/* ))} */}
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">{productData.name}</h1>
          <p className="text-gray-600">{productData.description}</p>

          {/* Product Details Table */}
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">{productData.name}</td>
                <td className="border border-gray-300 px-4 py-2">{productData.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Nutritional Information */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          Nutritional Information (Serving Size ~ 1 tbsp (21g). Servings per pack ~ 21.43)
        </h2>
        <table className="w-full mt-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Nutrients</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Per 100g Serving</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Per 21g Serving</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">%RDA/Serve</th>
            </tr>
          </thead>
          <tbody>
            {productData.nutritionalInfo.map((info, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{info.nutrient}</td>
                <td className="border border-gray-300 px-4 py-2">{info.per100g}</td>
                <td className="border border-gray-300 px-4 py-2">{info.per21g}</td>
                <td className="border border-gray-300 px-4 py-2">{info.rda}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Health Benefits */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Health Benefits</h2>
        <p className="text-gray-600 mt-2">{productData.healthBenefits}</p>
      </div>

      {/* Customer Feedback */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">What Our Customers Say</h2>
        <p className="text-gray-600 italic mt-2">"{productData.customerSays}"</p>
      </div>
    </div>
  );
}
