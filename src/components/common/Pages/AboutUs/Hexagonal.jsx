import Image from 'next/image';
import styles from './Hexagonal.module.css';

import Polygon1 from '@/assets/images/AboutUs/Polygon5.png';
import Polygon2 from '@/assets/images/AboutUs/Polygon6.png';
import Polygon3 from '@/assets/images/AboutUs/Polygon7.png';
import Polygon4 from '@/assets/images/AboutUs/Polygon8.png';
import Polygon5 from '@/assets/images/AboutUs/Polygon9.png';
import Polygon6 from '@/assets/images/AboutUs/Polygon10 (2).png';
import Polygon7 from '@/assets/images/AboutUs/Polygon11.png';
import Polygon8 from '@/assets/images/AboutUs/Polygon12.png';
import Polygon9 from '@/assets/images/AboutUs/Polygon13.png';
import Polygon10 from '@/assets/images/AboutUs/Polygon15.png';
import Polygon11 from '@/assets/images/AboutUs/Polygon15.png';
import Polygon12 from '@/assets/images/AboutUs/Polygon16.png';
import Polygon13 from '@/assets/images/AboutUs/Polygon18.png';
import Polygon14 from '@/assets/images/AboutUs/Polygon19.png';
import Polygon15 from '@/assets/images/AboutUs/Polygon22.png';
import Polygon16 from '@/assets/images/AboutUs/Polygon17.png';

export default function HexagonalPage() {
  return (
    <>
      <div className='flex justify-center items-center'>
      <div className={styles.container}>
        
        </div>
        <div className={`${styles['container-left']} ${styles['custom-hexagonal']}`}>          {/* <div className={`${styles.row} ${styles.row1}`}>
            <div className={styles['hex-top1']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon1} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>John Doe</span>
              </div>
              <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div>
            </div>
          </div> */}
          {/* <div className={`${styles.row} ${styles.row2}`}>
            <div className={styles['hex-top2']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon2} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>Johdddn Doe</span>
              </div>
              <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div>
            </div>
            <div className={`${styles['hex-bottom1']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon3} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>John Doe</span>
              </div>
              <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div>
            </div>
          </div> */}
          <div className={`${styles.row} ${styles.row3}`}>
            <div className={styles['hex-top3']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon1} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>Apis In 1983</span>
              </div>
              
            </div>
            <div className={`${styles['hex-bottom2']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon5} alt="John Doe" className={styles.imgData} />
              </div>
              
            </div>
          </div>
          <div className={`${styles.row} ${styles.row4}`}>
            <div className={styles['hex-top4']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon6} alt="John Doe" className={styles.imgData} />
              </div>
              
            </div>
            <div className={`${styles['hex-bottom3']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon7} alt="John Doe" className={styles.imgData} />
              </div>
              
            </div>
          </div>
          <div className={`${styles.row} ${styles.row5}`}>
            <div className={styles['hex-top5']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon16} alt="John Doe" className={styles.imgData} />
              </div>
              
            </div>
            <div className={`${styles['hex-bottom4']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon13} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>Honey 
                Production Plant</span>
              </div>
              
            </div>
          </div>
          <div className={`${styles.row} ${styles.row6}`}>
            <div className={styles['hex-top6']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon4} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>8th 
                Annual Meet</span>
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
            
            <div className={`${styles['hex-bottom5']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon11} alt="John Doe" className={styles.imgData} />
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
          </div>
          
          <div className={`${styles.row} ${styles.row7}`}>
            <div className={styles['hex-top7']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon12} alt="John Doe" className={styles.imgData} />
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
            
            <div className={`${styles['hex-bottom6']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon13} alt="John Doe" className={styles.imgData} />
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
          </div>
          
          <div className={`${styles.row} ${styles.row8}`}>
            <div className={styles['hex-top8']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon14} alt="John Doe" className={styles.imgData} />
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
            <div className={`${styles['hex-bottom4']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon9} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>HR MEET</span>
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John</div>
              </div> */}
            </div>
            {/* <div className={`${styles['hex-bottom7']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon15} alt="John Doe" className={styles.imgData} />
                <span className={styles.tooltip}>John Doe</span>
              </div>
              <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div>
            </div> */}
          </div>
          <div className={`${styles.row} ${styles.row9}`}>
            <div className={styles['hex-top9']}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon3} alt="John Doe" className={styles.imgData} />
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
            <div className={`${styles['hex-bottom8']} ${styles.mt2}`}>
              <div className={styles.imageWrapper}>
                <Image src={Polygon2} alt="John Doe" className={styles.imgData} />
              </div>
              {/* <div className={styles.middle}>
                <div className={styles.text}>John Doe</div>
              </div> */}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
