// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
// import PropTypes from 'prop-types';



// const Logo = () => (
//   <div className="ml-5 flex flex-row">
//     <img src="/images/logo.jpg" className="object-fill h-24 w-36 mr-2" alt="Logo" />
//   </div>
// );

// const ContactInfo = ({ icon, text }) => (
//   <div className="text-sm font-bold text-black flex items-center gap-2">
//     {icon} {text}
//   </div>
// );

// const InfoUniversity = () => {
//   return (
//     <div className="flex flex-col">
//       <h1 className="text-4xl font-bold text-green-700">TRƯỜNG ĐẠI HỌC CNT E-THIN</h1>
//       <h1 className="text-xl font-bold text-red-600">DANANG VOCATIONAL TRAINING COLLEGE</h1>
//       <ContactInfo icon={<CiLocationOn />} text="99 Tô Hiến Thành, Sơn Trà, Đà Nẵng" />
//       <ContactInfo icon={<MdOutlineEmail />} text="example@example.com" />
//       <ContactInfo icon={<MdPhoneInTalk />} text="0123-456-789" />
//     </div>
//   )
// }


// ContactInfo.propTypes = {
//   icon: PropTypes.element.isRequired,
//   text: PropTypes.string.isRequired
// };

// export default Logo;
// export { ContactInfo, InfoUniversity };

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InfoUniversity = ({ isFooter }) => {
  return (
    <div className="flex flex-col">
      <h1 className={classNames("text-4xl font-bold text-green-700", {
        'text-2xl text-white ': isFooter
      })}>TRƯỜNG CAO ĐẲNG NGHỀ QUẢNG NAM</h1>
      <h1 className={classNames("text-xl font-bold text-red-600", {
        'text-base text-white': isFooter
      })}>QUANG NAM VOCATIONAL UNIVERSITY</h1>
      <ContactInfo icon={<CiLocationOn />} text="431 Hùng Vương - TP. Tam Kỳ - Quảng Nam" isFooter={isFooter} />
      <ContactInfo icon={<MdOutlineEmail />} text="cdqn@quangnam.gov.vn" isFooter={isFooter} />
      <ContactInfo icon={<MdPhoneInTalk />} text="0123-456-789" isFooter={isFooter} />
    </div>
  )
}

const ContactInfo = ({ icon, text, isFooter }) => (
  <div className={classNames('text-sm font-bold text-black flex items-center gap-2', {
    'text-white': isFooter,
  })}>
    {icon} {text}
  </div>
);


const Logo = () => (
  <div className={'flex flex-row '}>
    <img src="/images/logo.jpg" className="object-contain h-36 w-36  mr-2 " alt="Logo" />
  </div>
);

ContactInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isFooter: PropTypes.bool,
};

InfoUniversity.propTypes = {
  isFooter: PropTypes.bool,
};

export default Logo;
export { InfoUniversity };
