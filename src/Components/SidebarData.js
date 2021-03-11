import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ReceiptIcon from "@material-ui/icons/Receipt";
import RouterIcon from "@material-ui/icons/Router";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TimelineIcon from '@material-ui/icons/Timeline';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
  {
    title : "PluraTX",
    
  },
    {
      title: "Transactions",
      
    },
     {
        title: "Overview",
        icon: <HomeIcon />,
        link: "/overview",
      },
      {
        title: "Payments",
        icon: <AccountBalanceIcon />,
        link: "/payments",
      },
      {
        title: "Refund",
        icon: <CreditCardIcon />,
        link: "/refund",
      },
      {
        title: "Settlements",
        icon: <ReceiptIcon />,
        link: "/settlements",
      },
      {
        title: "Smart Routing",
        icon: <RouterIcon />,
        link: "/smartrouting",
      }, 
      {
        title: "Value Added Features",
       
        
      },
      {
        
        title: "Subscriptions",
        
      },
      {
        title: "Plans",
        icon: <AddShoppingCartIcon />,
        link: "/plans",
      },
      {
        title: "Subscriptions",
        icon: <SubscriptionsIcon />,
        link: "/subscriptions",
      },
      {
        title: "Payment Links",
        icon: <AccountBalanceWalletIcon />,
        link: "/paymentlink",
      },
      {
        title: "Payment Pages",
        icon: <AccountBalanceWalletIcon />,
        link: "/paymentpages",
      },
      {
        title: "Analytics",
        icon: <TimelineIcon />,
        link: "/analytics",
      },
      {
        title: "Checkout Theme",
        icon: <DescriptionIcon />,
        link: "/checkouttheme",
      },
      {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings",
      },
      
];


