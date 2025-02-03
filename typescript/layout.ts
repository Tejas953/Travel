import { Image } from "./action";
import { Component } from "../typescript/component";

type AdditionalParam = {
  title: {};
  copyright: string;
  announcement_text: string;
  label: {};
  url: string;
}

type EntryData = {
  title: string;
  url: string;
  $: AdditionalParam;
}

type Announcement = {
  show_announcement: boolean;
  announcement_text: string;
  $: AdditionalParam;
}

type PageRef = {
  title: string;
  url: string;
  $: AdditionalParam;
}

type Share = {
  link: Links;
  icon: Image;
}

type Social = {
  social_share: [Share];
}

type Navigation = {
  link: [Links];
}

type Author = {
  title: string;
  $: AdditionalParam;
}

type Blog = {
  url: string;
  body: string;
  title: string;
  $: AdditionalParam;
}

export type Posts = {
  heading: any;
  characters: any;
  modular_blocks: any;
  locale: string;
  author: [Author];
  body: string;
  date: string;
  featured_image: {};
  is_archived: boolean;
  related_post: [Blog];
  seo: {};
  url:string;
  title: string;
  _owner: {}
}


interface Link {
  title: string;
  href: string;
}

interface Logo {
  url: string;
  filename: string;
}

export interface HeaderData {
  button1: string;
  button2: string;
  created_at: string;
  logo: Logo;
  navigation_links: { link: Link }[];
  search_placeholder: string;
  title: string;
  updated_at: string;
  link: Link;
  link1: Link;
}



export type Entry = [
  entry: EntryData
]

type List = {
  label?: string;
  page_reference: [PageRef];
  $: {};
  href?: string;
}

export type NavLinks = {
  label?: string;
}

export type Links = {
  label?: string;
  title: string;
  href: string;
  $:AdditionalParam;
}

export type PageProps = {
  locale: string;
  page_components: Component[];
  uid: string;
  url: string;
  title: string;
  seo: {};
}

export type FooterProps = {
  logo: Image;
  name:string;
  title: string;
  social: Social;
  navigation: Navigation;
  copyright: string;
  locale: string, 
  navigation_menu: [List];
  notification_bar: Announcement; 
  uid: string;
  $: AdditionalParam;
}

export type ChilderenProps = {
  props: {};
  type: Function;
}

export interface HomePageData {
  title: string;
  description: string;
  background_image: Image;
  buttons: {
    button_1: string;
    button_2: string;
  };
}

export interface guideData {
  title: string;
  description: string;
 
  heading: string;
  guides_section: {
      profile_photo:Image;
      name: string;
      location: string;
      description1:string;
      expertise: string;
      rating: number;
      contactUsLink: string;
  }[];
}

export interface MissionVision {
  title: string;
  description: string;
}

export interface TeamMember {
  photo: {
    url: string; // Mapping the URL for the photo
  };
  name: string;
  degree: string;
}

export interface AboutUsData {
  title: string;
  description: string;
  heading1: string;
  description1: string;
  mission_vision: MissionVision[];
  heading2: string;
  description2: string;
  team: TeamMember[];
  title3: string;
  description3: string;
}


