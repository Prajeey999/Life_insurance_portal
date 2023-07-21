import React, { useState, useEffect, useRef } from 'react';
import '../Payment/Payment.scss'
import Sidebar from '../Sidebar/Sidebar';

function CardForm() {
  const [currentCardBackground, setCurrentCardBackground] = useState(
    Math.floor(Math.random() * 25 + 1)
  );
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const minCardYear = new Date().getFullYear();
  const amexCardMask = '#### #### #### ####';
  const otherCardMask = '                    ';
  const [cardNumberTemp, setCardNumberTemp] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const cardNumberRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardDateRef = useRef(null);
  const notify = () => toast("Payment Added Successfully!");

  useEffect(() => {
    setCardNumberTemp(otherCardMask);
    cardNumberRef.current.focus();
  }, []);

  const getCardType = () => {
    let number = cardNumber;
    let re = new RegExp('^4');
    if (number.match(re) != null) return 'visa';

    re = new RegExp('^(34|37)');
    if (number.match(re) != null) return 'amex';

    re = new RegExp('^5[1-5]');
    if (number.match(re) != null) return 'mastercard';

    re = new RegExp('^6011');
    if (number.match(re) != null) return 'discover';

    re = new RegExp('^9792');
    if (number.match(re) != null) return 'troy';

    return 'visa'; // default type
  };

  const generateCardNumberMask = () => {
    return getCardType() === 'amex' ? amexCardMask : otherCardMask;
  };

  const minCardMonth = () => {
    if (cardYear === minCardYear.toString()) return new Date().getMonth() + 1;
    return 1;
  };

  useEffect(() => {
    if (cardMonth < minCardMonth()) {
      setCardMonth('');
    }
  }, [cardYear]);

  const flipCard = (status) => {
    setIsCardFlipped(status);
  };

  const focusInput = (e) => {
    setIsInputFocused(true);
    const targetRef = e.target.dataset.ref;
    const target = refs[targetRef];
    setFocusElementStyle({
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
    });
  };

  const blurInput = () => {
    setTimeout(() => {
      if (!isInputFocused) {
        setFocusElementStyle(null);
      }
    }, 300);
    setIsInputFocused(false);
  };

  const refs = {
    cardNumber: cardNumberRef,
    cardName: cardNameRef,
    cardDate: cardDateRef,
  };

  return (
    <div className="home    " id="app">
        <Sidebar />
      <div className="card-form">
        <div className="card-list">
          <div className={`card-item ${isCardFlipped ? '-active' : ''}`}>
            <div className="card-item__side -front">
              <div
                className={`card-item__focus ${focusElementStyle ? '-active' : ''}`}
                style={focusElementStyle}
                ref={refs.cardNumber}
              ></div>
              <div className="card-item__cover">
                <img
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                  className="card-item__bg"
                />
              </div>

              <div className="card-item__wrapper">
                <div className="card-item__top">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    className="card-item__chip"
                  />
                  <div className="card-item__type">
                    <img
                      src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                      alt=""
                      className="card-item__typeImg"
                    />
                  </div>
                </div>
                <label htmlFor="cardNumber" className="card-item__number" ref={refs.cardNumber}>
                  {getCardType() === 'amex' ? (
                    <span>
                      {amexCardMask.split('').map((n, index) => (
                        <React.Fragment key={index}>
                          {index > 4 && index < 14 && cardNumber.length > index && n.trim() !== '' ? (
                            <div className="card-item__numberItem">*</div>
                          ) : (
                            <div
                              className={`card-item__numberItem ${n.trim() === '' ? '-active' : ''}`}
                              key={index}
                            >
                              {cardNumber.length > index && cardNumber[index]}
                            </div>
                          )}
                          {n}
                        </React.Fragment>
                      ))}
                    </span>
                  ) : (
                    <span>
                      {otherCardMask.split('').map((n, index) => (
                        <React.Fragment key={index}>
                          {index > 4 && index < 15 && cardNumber.length > index && n.trim() !== '' ? (
                            <div className="card-item__numberItem">*</div>
                          ) : (
                            <div
                              className={`card-item__numberItem ${n.trim() === '' ? '-active' : ''}`}
                              key={index}
                            >
                              {cardNumber.length > index && cardNumber[index]}
                            </div>
                          )}
                          {n}
                        </React.Fragment>
                      ))}
                    </span>
                  )}
                </label>
                <div className="card-item__content">
                  <label htmlFor="cardName" className="card-item__info" ref={refs.cardName}>
                    <div className="card-item__holder">Card Holder</div>
                    {cardName.length ? (
                      <div className="card-item__name" key="1">
                        <span className="card-item__nameItem">
                          {cardName.replace(/\s\s+/g, ' ').split('').map((n, index) => (
                            <span key={index}>{n}</span>
                          ))}
                        </span>
                      </div>
                    ) : (
                      <div className="card-item__name" key="2">
                        Full Name
                      </div>
                    )}
                  </label>
                  <div className="card-item__date" ref={refs.cardDate}>
                    <label htmlFor="cardMonth" className="card-item__dateTitle">
                      Expires
                    </label>
                    <label htmlFor="cardMonth" className="card-item__dateItem">
                      <span>{cardMonth ? cardMonth : 'MM'}</span>
                    </label>
                    /
                    <label htmlFor="cardYear" className="card-item__dateItem">
                      <span>{cardYear ? String(cardYear).slice(2, 4) : 'YY'}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-item__side -back">
              <div className="card-item__cover">
                <img
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                  className="card-item__bg"
                />
              </div>
              <div className="card-item__band"></div>
              <div className="card-item__cvv">
                <div className="card-item__cvvTitle">CVV</div>
                <div className="card-item__cvvBand">
                  {cardCvv.split('').map((n, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <div className="card-item__type">
                  <img
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                    className="card-item__typeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-form__inner">
          <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="card-input__input"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              onFocus={focusInput}
              onBlur={blurInput}
              data-ref="cardNumber"
              autoComplete="off"
            />
          </div>
          <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">
              Card Holders
            </label>
            <input
              type="text"
              id="cardName"
              className="card-input__input"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onFocus={focusInput}
              onBlur={blurInput}
              data-ref="cardName"
              autoComplete="off"
            />
          </div>
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label htmlFor="cardMonth" className="card-input__label">
                  Expiration Date
                </label>
                <select
                  className="card-input__input -select"
                  id="cardMonth"
                  value={cardMonth}
                  onChange={(e) => setCardMonth(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  data-ref="cardDate"
                >
                  <option value="" disabled selected>
                    Month
                  </option>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <option
                      value={index < 9 ? '0' + (index + 1) : index + 1}
                      disabled={index + 1 < minCardMonth()}
                      key={index}
                    >
                      {index < 9 ? '0' + (index + 1) : index + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="card-input__input -select"
                  id="cardYear"
                  value={cardYear}
                  onChange={(e) => setCardYear(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  data-ref="cardDate"
                >
                  <option value="" disabled selected>
                    Year
                  </option>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <option value={index + minCardYear} key={index}>
                      {index + minCardYear}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">
                  CVV
                </label>
                <input
                  type="text"
                  className="card-input__input"
                  id="cardCvv"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                  onFocus={() => flipCard(true)}
                  onBlur={() => flipCard(false)}
                  maxLength={4}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <button className="card-form__button" onClick={notify} >Submit</button>
        </div>
      </div>

    </div>
  );
}

export default CardForm;
