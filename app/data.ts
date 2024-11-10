/**
 * This is just a data faker
 */
interface Option {
  name: string;
}

export const optionMenu: Option[] = [
  { name: "Body parts" },
  { name: "Electronic parts" },
  { name: "Engine parts" },
  { name: "Brake parts" },
  { name: "Suspension parts" },
  { name: "Exterior parts" },
];

export const carCategries = [
  {
    name: "TOYOTA",
    src: "https://ucarecdn.com/ab989058-854a-473c-8e9c-afb50d27bd3d/ToyotasparepartssupplierinMalaysia.webp",
  },
  {
    name: "VOLKWAGEN",
    src: "https://ucarecdn.com/b6c1455e-7274-43a7-aa3d-874fb8d721f5/volkwagensparepartssupplierinMalaysia.webp",
  },
  {
    name: "SUZUKI",
    src: "https://ucarecdn.com/d9dad1f0-1f48-442c-8cfe-500cad87eeab/suzukisparepartssupplierinMalaysia.webp",
  },
  {
    name: "SUBARU",
    src: "https://ucarecdn.com/c480bae0-05d2-4030-bd9d-892d12d29211/subarusparepartssupplierinMalaysia.webp",
  },
  {
    name: "PROTON",
    src: "https://ucarecdn.com/06026383-b79a-4891-a9d4-70d5f78113c6/protonsparepartssupplierinMalaysia.webp",
  },
  {
    name: "PERODUA",
    src: "https://ucarecdn.com/85040ddd-4e73-452c-aef7-0991961ef30c/peroduasparepartssupplierinMalaysia.webp",
  },
  {
    name: "CHEVEOLET",
    src: "https://ucarecdn.com/f9e4f751-e37f-4892-9bd4-c675a711ff1a/ChevroletsparepartssupplierinMalaysia.webp",
  },
  {
    name: "NISSAN",
    src: "https://ucarecdn.com/25df6129-9e87-47ec-bc6c-927e3b06aee7/nissansparepartssupplierinMalaysia.webp",
  },
  {
    name: "NAZA",
    src: "https://ucarecdn.com/ab84bbce-4668-4b8e-abff-b839aa96d47a/nazalogo01.webp",
  },
  {
    name: "MITSUBITSI",
    src: "https://ucarecdn.com/bbbd374a-1ca6-49c1-980a-d8cee5fe90b1/mitsubishisparepartssupplierinMalaysia.webp",
  },
  {
    name: "ISUZU",
    src: "https://ucarecdn.com/a83cae29-8efd-4c4a-8c05-9bfd3f82ae26/IsuzusparepartssupplierinMalaysia.webp",
  },
  {
    name: "KIA",
    src: "https://ucarecdn.com/81ead624-538e-4d31-ab96-018d2eabad42/kiasparepartssupplierinMalaysia.webp",
  },
  {
    name: "HONDA",
    src: "https://ucarecdn.com/43224341-78a8-48bc-b3c3-f004e78e8946/HondasparepartssupplierinMalaysia.webp",
  },
  {
    name: "MAZDA",
    src: "https://ucarecdn.com/3d9cc273-f08f-4762-acb3-b49e6b7764fd/mazdasparepartssupplierinMalaysia.webp",
  },
  {
    name: "HYUNDAI",
    src: "https://ucarecdn.com/455859ba-c540-4f49-9987-8552c2de0e80/hyundaisparepartssupplierinMalaysia.webp",
  },
  {
    name: "CHERY",
    src: "https://ucarecdn.com/22da9178-6333-40d4-a86a-b0b249e7e57b/chery.webp",
  },
];

export const images = [
  {
    name: "Gambar 01",
    src: "https://ucarecdn.com/0990ee37-48fc-468a-a291-68614472a925/mainpic1.webp",
  },
  {
    name: "Gambar 02",
    src: "https://ucarecdn.com/a0b787dd-7926-43f2-ac07-93a6bd261dbb/gambar02.webp",
  },
  {
    name: "Gambar 03",
    src: "https://ucarecdn.com/a96332a3-785d-40ff-a0c2-2c401ae5f0f8/gambar03.webp",
  },
];

export const products = [
  {
    name: "Wireless Headphones",
    price: 350000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Electronics",
    reviews: [
      { user: "John", rating: 4, comment: "Great sound quality!" },
      { user: "Anna", rating: 5, comment: "Very comfortable to wear." },
    ],
  },
  {
    name: "Smartphone",
    price: 4500000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Electronics",
    reviews: [
      { user: "Mike", rating: 4, comment: "Fast and reliable." },
      {
        user: "Lucy",
        rating: 3,
        comment: "Good, but battery life could be better.",
      },
    ],
  },
  {
    name: "Gaming Keyboard",
    price: 700000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Gaming",
    reviews: [
      { user: "Sam", rating: 5, comment: "Perfect for gaming!" },
      { user: "Ella", rating: 4, comment: "Solid build and good performance." },
    ],
  },
  {
    name: "Running Shoes",
    price: 550000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Sportswear",
    reviews: [
      { user: "Jake", rating: 4, comment: "Comfortable and durable." },
      { user: "Lily", rating: 5, comment: "Great for long runs." },
    ],
  },
  {
    name: "Electric Kettle",
    price: 250000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Home Appliances",
    reviews: [
      { user: "Chris", rating: 5, comment: "Heats water quickly!" },
      { user: "Sarah", rating: 4, comment: "Nice design, works well." },
    ],
  },
  {
    name: "Office Chair",
    price: 850000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Furniture",
    reviews: [
      { user: "David", rating: 4, comment: "Very comfortable for long hours." },
      { user: "Alice", rating: 5, comment: "Sturdy and stylish." },
    ],
  },
  {
    name: "Blender",
    price: 320000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Kitchen Appliances",
    reviews: [
      { user: "Tom", rating: 5, comment: "Blends smoothly and quickly." },
      { user: "Kate", rating: 4, comment: "Easy to clean and use." },
    ],
  },
  {
    name: "Blender",
    price: 320000,
    image:
      "https://ucarecdn.com/dde93e46-fa75-42b0-8983-5a4e853ab212/CERATO.webp",
    category: "Kitchen Appliances",
    reviews: [
      { user: "Tom", rating: 5, comment: "Blends smoothly and quickly." },
      { user: "Kate", rating: 4, comment: "Easy to clean and use." },
    ],
  },
];

// Data information

export const info = [
  {
    description:
      "Top-notch aftermarket car spare parts supplied from only the industry’s leading manufacturers. ",
    imgSrc:
      "https://ucarecdn.com/664c6334-8d8f-4725-a00e-3eb789c3deae/highqualitypartsicon.webp",
    title: "High Quality Parts",
  },
  {
    description:
      "We offer over 2500000 OEM-style quality auto parts to cover all your repair needs. ",
    imgSrc:
      "https://ucarecdn.com/a1c5923a-7284-4a79-9c57-6eb4a33b701a/wideproductrangeicon.webp",
    title: "Wide Product Range",
  },
  {
    description:
      "Feel confident when buying from Remco as our parts are all backed with a min. of 1-year warranty. ",
    imgSrc:
      "https://ucarecdn.com/431f76a3-b7b0-4b1b-bc83-b32bd7a265c9/warranty.webp",
    title: "1 Year Warranty",
  },
  {
    description:
      "We use advanced encryption to keep your payment and personal data safe and secure.",
    imgSrc:
      "https://ucarecdn.com/a42fe90a-0fc4-46fa-980e-2ee10de21501/securepaymenticon.webp",
    title: "Safe & Secure Payment",
  },
];
