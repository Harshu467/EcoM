import React from "react"
import Home from "../Components/MainPage/Home"
import FlashDeals from "../Components/FlashDeals/FlashDeals"
import TopCate from "../Components/Top/TopCate"
import NewArrivals from "../Components/NewArrivals/NewArrivals"
import Discount from "../Components/Discounts/Discount"
import Shop from "../Components/Shops/Shop"
import Annocument from "../Components/announcement/Announcement"
import Wrapper from "../Components/Wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages