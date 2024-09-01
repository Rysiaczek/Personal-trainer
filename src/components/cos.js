import "../css/offert.css";
import React, { useEffect, useState } from "react";

function Offert() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(isMobile ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const itemsGroup = document.querySelector(".items-group");
    const items = document.querySelectorAll(".item");

    const updateItemsPosition = () => {
      const itemWidth = isMobile ? 90 : 33.33; // Zmiana szerokości w zależności od responsywności
      itemsGroup.style.transform = `translateX(-${
        isMobile ? currentIndex * itemWidth : (currentIndex - 1) * itemWidth
      }%)`;
    };
    const setShadow = (index) => {
      items.forEach((item, i) => {
        if (!isMobile) {
          if (i === index) {
            item.classList.add("shadow");
            item.classList.add("right-shadow");
            if (index > 3) {
              item.classList.remove("shadow");
              item.classList.remove("right-shadow");
              items[index - 3].classList.add("shadow");
              items[index - 3].classList.add("left-shadow");
            }
          } else {
            item.classList.remove("shadow");
            item.classList.remove("right-shadow");
            item.classList.remove("left-shadow");
          }
        } else {
          if (i === index) {
            item.classList.add("shadow");
            if (index > 1) {
              items[index - 2].classList.add("shadow");
            }
          } else {
            item.classList.remove("shadow");
          }
        }
      });
    };

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("shadow")) {
          if (item.classList.contains("left-shadow")) {
            if (index === 0) {
              setCurrentIndex(index);
              setShadow(index);
              updateItemsPosition();
            } else {
              setCurrentIndex(index - 1);
              setShadow(index);
              updateItemsPosition();
            }
          } else if (item.classList.contains("right-shadow")) {
            if (index === items.length) {
              setCurrentIndex(index);
              setShadow(index);
              updateItemsPosition();
            } else {
              setCurrentIndex(index + 1);
              setShadow(index);
              updateItemsPosition();
            }
          }
        }
      });
    });

    setShadow(currentIndex);
  }, [currentIndex, isMobile]);

  return (
    <div className="offert">
      <div className="offert-control">
        <div className="switch right"></div>
        <div className="switch left"></div>
      </div>
      <div className="container-fluid">
        <div className="items-group">
          <div className="item ">
            <div className="item-body">
              <p>Trening odchudzający</p>
              <div className="item-arguments">
                <p>Skutecznie chudnięcie</p>
                <p>Progresja</p>
                <p>interwały</p>
              </div>
            </div>
          </div>
          <div className="item shadow">
            <div className="item-body">
              <p>Trening siłowy</p>
              <div className="item-arguments">
                <p>Budowanie masy</p>
                <p>Siła</p>
                <p>Wytrzymałość</p>
              </div>
            </div>
          </div>
          <div className="item shadow">
            <div className="item-body">
              <p>Trening wytrzymałościowy</p>
              <div className="item-arguments">
                <p>Wytrzymałość</p>
                <p>Kondycja</p>
                <p>Cardio</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-body">
              <p>Trening funkcjonalny</p>
              <div className="item-arguments">
                <p>Mobilność</p>
                <p>Koordynacja</p>
                <p>Stabilność</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-body">
              <p>Trening funkcjonalny</p>
              <div className="item-arguments">
                <p>Mobilność</p>
                <p>Koordynacja</p>
                <p>Stabilność</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offert;
