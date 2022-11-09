import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faShieldVirus,
  faCamera,
  faFile,
  faLock,
  faImage,
  faHashtag,
  faBookOpen,
  faUserGroup,
  faBook,
  faPersonCircleQuestion,
  faFileCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import styles from './app.module.css';

function App() {
  return (
    <div className={`${styles['mainbackground']} d-flex`}>
      <div className={`${styles['firstbox']}`}>
        <h3 className="pb-2">
          {' '}
          <FontAwesomeIcon icon={faHashtag} /> Highlyte
        </h3>
        <p>
          {' '}
          <FontAwesomeIcon icon={faCamera} /> Social Health Checks
        </p>
        <p className={`${styles['para']}`}>
          <FontAwesomeIcon icon={faBookOpen} /> Personal Library
        </p>
        <p className={`${styles['para']}`}>
          <FontAwesomeIcon icon={faUserGroup} /> Shared Library{' '}
        </p>
        <p className={`${styles['para']}`}>
          <FontAwesomeIcon icon={faBook} /> Standards{' '}
        </p>
        <p className={`${styles['para']}`}>
          <FontAwesomeIcon icon={faFileCircleQuestion} />
          FAQ's
        </p>
        <button className={`${styles['checkbutton']} w-6`}>
          Check Content <FontAwesomeIcon icon={faLock} />
        </button>
      </div>

      <div className={`${styles['secondbox']}`}>
        <div className="m-2">
          <p className="px-2">
            social Health checks /<b> Webakebrands</b>
          </p>
        </div>
        <div className={`${styles['card']} p-2`}>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex">
                <div>
                  <img
                    src={`https://tinyjpg.com/images/social/website.jpg`}
                    className="rounded-circle"
                    alt="krr"
                  />{' '}
                </div>
                <div>
                  <b>Webakebrands</b>
                  <p>California |Colorado | Newyork </p>
                </div>
              </div>
              <div>
                <button
                  className={`${styles['viewbutton']} bg-dark text-white p-1 `}
                >
                  View Trend Report
                </button>
                <button className={`${styles['riskbutton']} text-black`}>
                  Rescan
                </button>
                <button className={`${styles['button']} text-black h-1rem w-1`}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div>
                  {' '}
                  <FontAwesomeIcon icon={faShieldVirus} />
                </div>
                <div>
                  <h5 className="text-danger m-0">At Risk</h5>
                  <p className="text-danger">Needs Attention</p>
                </div>
              </div>
              <div className="d-flex justify-content-center text-align-center">
                <div
                  className={`${styles['imgborder']} d-flex justify-content-center align-items-center`}
                >
                  <FontAwesomeIcon icon={faCamera} />
                </div>
                <div>
                  <h5 className="m-0">37</h5>
                  <p>Posts at Risk</p>
                </div>
              </div>
              <div className="d-flex justify-content-center text-align-center">
                <div
                  className={`${styles['imgborder']} d-flex justify-content-center align-items-center`}
                >
                  <FontAwesomeIcon icon={faFile} />
                </div>
                <div>
                  <h5 className="m-0">49</h5>
                  <p>Regulations at Risk</p>
                </div>
              </div>
              <div className="d-flex justify-content-center text-align-center ">
                <div
                  className={`${styles['imgborder']} d-flex justify-content-center align-items-center`}
                >
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <div>
                  <h5 className="m-0">45</h5>
                  <p>posts at scanned</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <b>459 Posts Scanned</b>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between flex-wrap m-2">
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imagetwo']}`}
                  src={`https://tinyjpg.com/images/social/website.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-danger px-3">At Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-danger px-3">At Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
          </div>
          <div className="d-flex justify-content-between flex-wrap m-2">
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imagetwo']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-danger px-3">At Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imagetwo']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-danger px-3">At Risk</p>
            </div>
            <div className={`${styles['cardsecond']}`}>
              <div>
                <img
                  className={`${styles['imageshade']}`}
                  src={`https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg`}
                  alt="/"
                />
              </div>
              <b className="px-3">Image-name</b>
              <p className="text-success px-3">Low Risk</p>
            </div>
          </div>
        </div>

        {/* {/* <div className="vw-100 vh-100">
 
        <img src={image1} className="h-100 w-100 " alt="." />
        <h4 className= {`${styles["text"]}  text-white font-weight-bold position-absolute top-0 end-0`}>Sample text. Click to select the text box. Click again or double click to start editing the text.<br></br><br></br><span ><a className='float-end text-white' href="/">read more</a></span></h4>
      <h1 className= {`${styles["text2"]}  text-white font-weight-bold position-absolute start-0 bottom-0`}>the perfect</h1>
      </div> */}
      </div>
    </div>
  );
}

export default App;
