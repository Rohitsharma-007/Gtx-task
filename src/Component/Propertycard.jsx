import React, { useState } from "react"
import { FaTimes } from "react-icons/fa"
import Tenantsmodal from "./Tenantsmodal"

function Propertycard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div class="card w-25 h-50">
        <img
          src="https://www.izkiz.net/wp-content/uploads/2017/01/DSC_7356.jpg"
          class="card-img-top"
          alt="property"
        />
        <div class="card-body">
          <h5 class="card-title">property 101</h5>
          <p class="card-text">rooms:10001 rent:10000001 persons :100001</p>

          <a href="#" class="btn btn-primary" onClick={openModal}>
            show tenants
          </a>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <Tenantsmodal />
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </>
  )
}
export default Propertycard
