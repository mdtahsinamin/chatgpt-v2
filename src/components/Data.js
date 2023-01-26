import { RxDashboard } from "react-icons/rx";
import { MdInsights } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFolder, BsWallet2 } from "react-icons/bs";

export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <MdInsights />,
    text: "Sales Insights",
  },
  {
    id: 3,
    icon: <RiCouponLine />,
    text: "Coupons",
  },
  {
    id: 4,
    icon: <FiUser />,
    text: "Team Member",
  },
  {
    id: 5,
    icon: <AiOutlineMessage />,
    text: "Messages",
  },
  {
    id: 6,
    icon: <BsFolder />,
    text: "File Manager",
  },
  {
    id: 7,
    icon: <BsWallet2 />,
    text: "Wallet",
  },
  {
    id: 8,
    icon: <FiLogOut />,
    text: "Logout",
  },
];
