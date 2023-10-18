import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import DiamondIcon from '@mui/icons-material/Diamond';

// Resource Menu Colors
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500 bg-gray-300",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};


// Resource Menu Icons and Descriptions
const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "About Us",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Tokens",
    description: "See Top Tokens (ERC-20)",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        NFT's{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="Trending!"
          className="capitalize"
        />
      </div>
    ),
    description: "Trending NFT's and NFT resources.",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Newsletter",
    description: "Subscribe to our newsletter to get the latest news.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Top Statistics",
    description: "See the top statistics of the blockchain.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Knowledge base",
    description: "Educational library on the world of Ethereum.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "Guides",
    description: "Learn how to use our platform with ease.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "API",
    description: "Documentation for all the API used.",
  },
];

// Resources Menu Layout
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-gray-200">
          <div className={`rounded-lg p-5 mt-2 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-5 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm text-gray-900"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-4 pr-4 bg-gray-900 px-3  hover:bg-gray-600"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
// Large Screen Layout
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-4 pr-4 bg-gray-900 px-3 hover:bg-gray-600">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Blockchain
        </ListItem>
      </Typography>
      <NavListMenu />
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        {/* <ListItem className="flex items-center gap-2 py-4 pr-4 bg-gray-900 px-3 hover:bg-gray-600">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          Account
        </ListItem>
      </Typography> */}
    </List>
  );
}
 

export function NavbarMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar variant="gradient" color="blue-gray" className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-0 py-0">
      <div className="flex items-center justify-between text-gray-100 bg-gray-900 rounded-lg px-5">
        <div className="flex items-center">
        <DiamondIcon/>
        <Typography
            className="ml-2"
            variant="h5"
            component="a"
            href="/"
            sx={{
              ml: 1,
              align: 'inherit',
              fontFamily: 'Light',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a href="/">Etherrio</a>
          </Typography>
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <div className="hidden gap-2 lg:flex ">
          <Button variant="text" size="sm" color="blue-gray" className="hover:bg-blue-500" >
            Sign In
          </Button>
          <Button variant="gradient" size="sm" className="bg-gray-500 hover:bg-blue-800">
            Sign Up
          </Button>
        </div> */}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth className="text-gray-900 hover:bg-blue-500">
            Sign In
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="bg-gray-800 hover:bg-blue-800">
            Sign Up
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
}