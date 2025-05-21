import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="text-md-left">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">ShopStore</h6>
              <p>
                Nơi bạn tìm thấy những sản phẩm chất lượng, giá tốt và dịch vụ
                tận tâm. Cảm ơn bạn đã tin tưởng đồng hành!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Link</h6>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Poduct
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Introduce
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Category</h6>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  men's shoes
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  women's shoes
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Accessory
                </a>
              </p>
              <p>
                <a href="#" className="text-light text-decoration-none">
                  Promotion
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> 280/99/10 Đường Bùi Hữu
                Nghĩa, P2, Quận Bình Thạnh, TP.HCM
              </p>
              <p>
                <i className="fas fa-envelope me-3" /> support@shopshoes.vn
              </p>
              <p>
                <i className="fas fa-phone me-3" /> +0344 375 201
              </p>
              <div className="mt-3">
                <a href="#" className="text-light me-3">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="text-light me-3">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="text-light me-3">
                  <i className="fab fa-tiktok" />
                </a>
                <a href="#" className="text-light me-3">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3">
          © 2025 ShopShoes. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
