import veggieChopper from "./assets/veggiechopper.jpg";
import whoosh from "./assets/whoosh.jpg"
import cable from "./assets/cable.webp"

function App() {
  const itemMap = [
    {
      itemName: "Veggie Chopper",
      image: veggieChopper,
      price: 64.0,
      link: "https://www.amazon.com.au/fullstar-Vegetable-Chopper-Container-Mandoline/dp/B0BHSXFTGH?crid=2UPHVIOLVOXRL&dib=eyJ2IjoiMSJ9.Xf1u2Iq7mrFWgO_nzyLUrNLK89lK0Br72IeoRllCe6tespZBVF7U8kfFx42k8fwUzIiGwpa1P0f0Az8tecsWPsBvI1ZzlBDwyGsnXzsLEf4NCwegeVuywVL_2CuZ7foUxah9u9q2rTJ6Scn8TgFzmkV0tBmzYJaOk-OEL1xbBVU8Vgp95pWAV1S--AqZNQeLqPvQMh0VNNvo_2df9hPMP4rVDiamQmpUQYSr-upa90qHrTgbYpkPy7_mHrvWVLMYGiFEWKeTD8l8zuXi7oYk08_sMyqP5Cvl3I6k65bXzjc.i9Nzb9wLIqh-Lgfa1-vUnWkPPNqv1X7z2XR7sgyjjGw&dib_tag=se&keywords=salad%2Bchopper&qid=1733407552&sprefix=salad%2Bcho%2Caps%2C338&sr=8-5&th=1#customerReviews",
    },
    {
      itemName: "Whoosh! Screen Cleaner",
      image: whoosh,
      price: 34.61,
      link: "https://www.amazon.com.au/WHOOSH-Screen-Cleaner-Kit-Smartphones/dp/B07WCH5JTT?crid=2VBWA29LFPV25&dib=eyJ2IjoiMSJ9.p_HeOeJL8xc74esbMsCR5kQ50f1k-L_AEZgQB1Lzr3oi-BnD60AdnECESDBp_5EdeY0RH0MQapDhtByZa_yRlxgaenIsKsu8wT2E_1yhulkVm34lw7GKC0viIMGhPWEoP2D7j9WFUL-6j4lZ14zHQQuD_J91WVs0M-HMcxsiSTCQFdvcy8GFSx8J0Nu4sX3VmdAg8JOG2i3Dr-G0RHzEWXa-UlIan7f2OgxmNM178sssLtFe2avAgMD3oexwBugJEI8Ga1FaDPwu6g_Yh2ve_3Y8m00NF-tHy2v9ZcterPE.KNLFBnvh3cK3sqDxk7LQjxgUpRc4ZXJaIjLr7z2N4hk&dib_tag=se&keywords=Whoosh&qid=1733414019&s=electronics&sprefix=whoosh%2Celectronics%2C226&sr=1-4&th=1",
    },
    {
      itemName: "Apple magsafe cable (Space Black)",
      image: cable,
      price: 75.0,
      link: "https://www.apple.com/au/shop/product/MUVQ3FE/A/usb-c-to-magsafe-3-cable-2-m-space-black?fnode=d9f371ac5ea1bedf74c0c600572d463c04dcea1d25f6a6aa8ae3c6b09e9ab64e2d71acb533f4fca848ea6449448a2b65beced59a03773b2d5a3bf6f3fe82c6d60291d7a5ddd45f369b609e2bb8b363230d7c8fd614c43c8383a8377a12650c7b",
    },
    // {
    //   itemName: '',
    //   image: '',
    //   price: '',
    //   link: '',
    // },
  ];

  const openLinkNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-purple-50">
        <h1 className="text-4xl font-sans font-light">
          ✨ Jessy&apos;s Bday Wishlist ✨
        </h1>
        <div className="mt-10 flex gap-10">
          {itemMap.map((item, index) => (
            <div key={index} className="flex flex-col flex-1 items-center border p-4 rounded-xl border-purple-700">
              <div className="w-40 h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.itemName}
                  className=" hover:scale-110 transition-transform duration-300"
                  onClick={() => openLinkNewTab(item.link)}
                />                
              </div>
              <p className="text-center mt-4 mb-2 font-semibold">{item.itemName}</p>
              <div className="w-full">
                <p>Price: ${item.price}</p>
                <a href={item.link} className="text-purple-800 underline">Link</a>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
