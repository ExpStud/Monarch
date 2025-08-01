import dynamic from "next/dynamic";

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeIcon = dynamic(() => import("./@icons/ExchangeIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const BookIcon = dynamic(() => import("./@icons/BookIcon"));
const PlayIcon = dynamic(() => import("./@icons/PlayIcon"));
const PodcastIcon = dynamic(() => import("./@icons/PodcastIcon"));
//atoms
const DropdownButton = dynamic(() => import("./atoms/DropdownButton"));
const DropdownItem = dynamic(() => import("./atoms/DropdownItem"));
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const Button = dynamic(() => import("./atoms/Button"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadAnimation = dynamic(() => import("./atoms/LoadAnimation"));
const LoadCircle = dynamic(() => import("./atoms/LoadCircle"));
const TabBarItem = dynamic(() => import("./atoms/TabBarItem"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
const Underline = dynamic(() => import("./atoms/Underline"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const Dropdown = dynamic(() => import("./molecules/Dropdown"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const TabBar = dynamic(() => import("./molecules/TabBar"));
const Modal = dynamic(() => import("./molecules/Modal"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./molecules/HeaderContent"));
const Card = dynamic(() => import("./molecules/Card"));
const BackButton = dynamic(() => import("./molecules/BackButton"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const ImageModal = dynamic(() => import("./organisms/ImageModal"));
const Menu = dynamic(() => import("./organisms/Menu"));
const NewsItem = dynamic(() => import("./organisms/NewsItem"));
const LandingHeader = dynamic(() => import("./organisms/LandingHeader"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const MeetTheTeamView = dynamic(() => import("./templates/MeetTheTeamView"));
const NewsView = dynamic(() => import("./templates/NewsView"));
const JobsView = dynamic(() => import("./templates/JobsView"));
const PortfolioView = dynamic(() => import("./templates/PortfolioView"));


export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  Dropdown,
  DropdownButton,
  ArrowIcon,
  DropdownItem,
  NumberInput,
  TextInput,
  CheckBox,
  Button,
  LoadAnimation,
  TwitterIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  NavItem,
  TabBarItem,
  TabBar,
  ExchangeIcon,
  CloseIcon,
  Modal,
  Menu,
  DownloadIcon,
  IconBar,
  SplashScreen,
  LandingView,
  ImageShimmer,
  ImageModal,
  HeaderContent,
  AboutView,
  MeetTheTeamView,
  NewsView,
  Card,
  BackButton,
  NewsItem,
  LandingHeader,
  BookIcon,
  PlayIcon,
  PodcastIcon,
  Underline,
  JobsView,
  PortfolioView
}