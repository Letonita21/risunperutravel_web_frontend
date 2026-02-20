import { PiBootFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { LiaMountainSolid } from "react-icons/lia";
import { FiMapPin } from "react-icons/fi";
import { PiFlagPennantFill } from "react-icons/pi";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import { MdHome } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BiMailSend } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { RiStarSLine } from "react-icons/ri";
import { BiLogoTripAdvisor } from "react-icons/bi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { RiPushpinFill } from "react-icons/ri";
import { GiPlainCircle } from "react-icons/gi";
import { MdModeOfTravel } from "react-icons/md";
import { GrGoogle } from "react-icons/gr";
import { FaHandsHelping } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { TbEyeStar } from "react-icons/tb";
import { SiStarship } from "react-icons/si";

const colors = {
   shoe: "#FFFFFF",
   mountain: "#FFFFFF",
   clock: "#FFFFFF",
   group: "#FFFFFF",
   user: "#FFFFFF",
};

export const ShoeIcon = (props) => {
   return <PiBootFill color={props.color || colors.shoe} size={props.size || 20} className={props.className} />
}
export const MountainIcon = (props) => {
   return <LiaMountainSolid color={props.color || colors.mountain} size={props.size || 20} className={props.className} />
}
export const ClockIcon = (props) => {
   return <FiClock color={props.color || colors.group} size={props.size || 20} className={props.className} />
}
export const GroupIcon = (props) => {
   return <GrGroup color={props.color || colors.group} size={props.size || 20} className={props.className} />
}
export const UserIcon = (props) => {
   return <LuUserRound color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const InfoIcon = (props) => {
   return <TbInfoSquareRoundedFilled color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const HandRightIcon = (props) => {
   return <FaHandPointRight color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const StarIcon = (props) => {
   return <FaStar color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const LugarIcon = (props) => {
   return <FiMapPin color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const BannerIcon = (props) => {
   return <PiFlagPennantFill color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const ComentarioIcon = (props) => {
   return <MdMarkUnreadChatAlt color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const IdiomaIcon = (props) => {
   return <MdOutlineLanguage color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const UpIcon = (props) => {
   return <FaCaretUp color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const DownIcon = (props) => {
   return <FaSortDown color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const DolarIcon = (props) => {
   return <LuCircleDollarSign color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const MapaIcon = (props) => {
   return <FaMapMarkedAlt color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const PhotoIcon = (props) => {
   return <IoMdPhotos color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const ClipIcon = (props) => {
   return <FaClipboardCheck color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const CheckIcon = (props) => {
   return <FaCheckCircle color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const XCheckIcon = (props) => {
   return <IoCloseCircle color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const FocoIcon = (props) => {
   return <FaLightbulb color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const PreguntasIcon = (props) => {
   return <FaRegQuestionCircle color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const CalendarioIcon = (props) => {
   return <FaCalendarAlt color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const WhatsAppIcon = (props) => {
   return <FaWhatsapp color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const HomeIcon = (props) => {
   return <MdHome color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const GoogleIcon = (props) => {
   return <FcGoogle color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const TripAdvisorIcon = (props) => {
   return <BiLogoTripAdvisor color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const EnviarIcon = (props) => {
   return <BiMailSend color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const BuscarIcon = (props) => {
   return <FaSearch color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const CerrarIcon = (props) => {
   return <FaWindowClose color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const DerechaIcon = (props) => {
   return <FaArrowAltCircleRight color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const IzquierdaIcon = (props) => {
   return <FaArrowAltCircleLeft color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const PDFIcon = (props) => {
   return <FaFilePdf color={props.color || colors.user} size={props.size || 20} className={props.className} />
}
export const StarInternoIcon = (props) => {
   return <RiStarSLine className={props.className} />
}
export const ManosIcon = (props) => {
   return <FaHandsHoldingChild className={props.className} />
}
export const ClickIcon = (props) => {
   return <TbHandClick className={props.className} />
}
export const VerMasIcon = (props) => {
   return <GiClick className={props.className} />
}
export const ExpandirIcon = (props) => {
   return <FaChevronDown className={props.className} />
}
export const OcultarIcon = (props) => {
   return <FaAngleUp className={props.className} />
}
export const PinIcon = (props) => {
   return <RiPushpinFill className={props.className} />
}
export const CircleIcon = (props) => {
   return <GiPlainCircle className={props.className} />
}
export const TravelIcon = (props) => {
   return <MdModeOfTravel  className={props.className} />
}
export const GorGoogleIcon = (props) => {
   return <GrGoogle className={props.className} />
}
export const HelpIcon = (props) => {
   return <FaHandsHelping className={props.className} />
}
export const ReserIcon = (props) => {
   return <MdContactPhone className={props.className} />
}
export const EyesIcon = (props) => {
   return <TbEyeStar className={props.className} />
}
export const ShipIcon = (props) => {
   return <SiStarship className={props.className} />
}
