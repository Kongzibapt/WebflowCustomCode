var mode = localStorage.getItem("mode");
switchMode();
 const current_mode = document.getElementById("dark_mode");
 current_mode.addEventListener("click", setLocalStorage);

function setLocalStorage() {
if (mode === "dark"){
	localStorage.setItem("mode","light");
  mode = "light";
} else if(mode === "light"){
	localStorage.setItem("mode","dark");
  mode = "dark";
} else {
	localStorage.setItem("mode","light");
  mode = "light";
}
switchMode();
}

function switchMode() {

const header = Array.from(document.getElementsByClassName("header"));
const body = Array.from(document.getElementsByClassName("body"));
const navlink = Array.from(document.getElementsByClassName("navlink menu w-nav-link"));
const navlink_button_navbar = Array.from(document.getElementsByClassName("navlink button navbar w-nav-link"));
const footer_navlink = Array.from(document.getElementsByClassName("footer-navlink"));
const caption = Array.from(document.getElementsByClassName("caption"));
const footer = Array.from(document.getElementsByClassName("footer"));
const network = Array.from(document.getElementsByClassName("network"));
const logo_footer = Array.from(document.getElementsByClassName("logo-footer"));
const logo_footer_white = Array.from(document.getElementsByClassName("logo-footer-white"));
const team_block = Array.from(document.getElementsByClassName("team-block"));
const team_button = Array.from(document.getElementsByClassName("team-button"));
const post_item_part = Array.from(document.getElementsByClassName("post-item-part"));
const filter_item = Array.from(document.getElementsByClassName("filter-item"));
const search_image = Array.from(document.getElementsByClassName("search-image"));
const type_text = Array.from(document.getElementsByClassName("type-text"));
const resource_arrow = Array.from(document.getElementsByClassName("resource-arrow"));
const last_resource_block = Array.from(document.getElementsByClassName("last-resource-block"));
const get_started_block = Array.from(document.getElementsByClassName("get-started-block"));
const navlink_button_white = Array.from(document.getElementsByClassName("navlink button white"));
const back_get_started = Array.from(document.getElementsByClassName("back-get-started"));
const slider_item = Array.from(document.getElementsByClassName("slider-item"));
const versioning = Array.from(document.getElementsByClassName("versioning"));
const tick_image = Array.from(document.getElementsByClassName("tick-image"));
const arrow_container = Array.from(document.getElementsByClassName("arrow-container"));
const coming_soon_wrapper = Array.from(document.getElementsByClassName("coming-soon-wrapper"));
const caption_red = Array.from(document.getElementsByClassName("caption red"));
const caption_lila = Array.from(document.getElementsByClassName("caption lila"));
const caption_blue = Array.from(document.getElementsByClassName("caption blue"));
const navlink_button = Array.from(document.getElementsByClassName("navlink button"));
const brand_logo = Array.from(document.getElementsByClassName("brand-logo"));
const brand_logo_white = Array.from(document.getElementsByClassName("brand-logo-white"));
const h1_content_about_text = Array.from(document.getElementsByClassName("h1 content-about-text"));
const nav_menu = Array.from(document.getElementsByClassName("nav-menu"));
const menu_line = Array.from(document.getElementsByClassName("menu-line"));
const search = Array.from(document.getElementsByClassName("search"));
const filter_item_reset = Array.from(document.getElementsByClassName("filter-item reset"));
const h2_tiny = Array.from(document.getElementsByClassName("h2 tiny"));

const dm__rays = Array.from(document.getElementsByClassName("dm__rays"));
const dm__center = Array.from(document.getElementsByClassName("dm__center"));
const dm__moon = Array.from(document.getElementsByClassName("dm__moon"));
const dm__ray_dot = Array.from(document.getElementsByClassName("dm__ray-dot"));

  switch (mode){
    case "light":
      header ? header.forEach(el => el.style.cssText += "background-color:#ffffff;") : null;
  navlink ? navlink.forEach(el => el.style.cssText += "color:#000000;background-color:rgba(230, 230, 230, 0);") : null;
  navlink_button ? navlink_button.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  body ? body.forEach(el => el.style.cssText += "background-color:#ffffff;color:#0d0a28;") : null;
  footer_navlink ? footer_navlink.forEach(el => el.style.cssText += "color:#0d0a28;") : null;
  caption ? caption.forEach(el => el.style.cssText += "color:#0d0a28;") : null;
  footer ? footer.forEach(el => el.style.cssText += "background-color:rgba(73, 112, 240, 0.1);") : null;
  network ? network.forEach(el => el.style.cssText += "filter:invert(80%);;") : null;
  logo_footer ? logo_footer.forEach(el => el.style.cssText += "display:none;") : null;
  logo_footer_white ? logo_footer_white.forEach(el => el.style.cssText += "display:block;") : null;
  team_block ? team_block.forEach(el => el.style.cssText += "background-color:#f8f9fa;") : null;
  team_button ? team_button.forEach(el => el.style.cssText += "color:#0d0a28;background-color:rgba(0,0,0,0.05);") : null;
  post_item_part ? post_item_part.forEach(el => el.style.cssText += "border-color:#dee0e6;") : null;
  filter_item ? filter_item.forEach(el => el.style.cssText += "border-color:rgba(73, 112, 240, 0.1);color:#ffffff;") : null;
  type_text ? type_text.forEach(el => el.style.cssText += "background-color:rgba(73, 112, 240, 0);") : null;
  resource_arrow ? resource_arrow.forEach(el => el.style.cssText += "background-color:rgba(0,0,0,0.1);") : null;
  last_resource_block ? last_resource_block.forEach(el => el.style.cssText += "background-color:#f8f9fa;") : null;
  get_started_block ? get_started_block.forEach(el => el.style.cssText += "background-color:rgba(100, 103, 255, 0.04);") : null;
  navlink_button_white ? navlink_button_white.forEach(el => el.style.cssText += "background-color:#0d0a28;color:#ffffff;") : null;
  back_get_started ? back_get_started.forEach(el => el.style.cssText += "filter:invert(70%);") : null;
  slider_item ? slider_item.forEach(el => el.style.cssText += "background-color:#f1f2f5;") : null;
  versioning ? versioning.forEach(el => el.style.cssText += "background-color:#f8f9fa;") : null;
  tick_image ? tick_image.forEach(el => el.style.cssText += "filter:invert(80%);") : null;
  arrow_container ? arrow_container.forEach(el => el.style.cssText += "filter:invert(100%);") : null;
  coming_soon_wrapper ? coming_soon_wrapper.forEach(el => el.style.cssText += "background-color:#ffffff;border-color:rgba(0,0,0,0.1);") : null;
  caption_red ? caption_red.forEach(el => el.style.cssText += "color:#b00b00;") : null;
  caption_lila ? caption_lila.forEach(el => el.style.cssText += "color:#17197e;") : null;
  caption_blue ? caption_blue.forEach(el => el.style.cssText += "color:#0b83a9;") : null;
  navlink_button ? navlink_button.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  brand_logo ? brand_logo.forEach(el => el.style.cssText += "display:none;") : null;
  brand_logo_white ? brand_logo_white.forEach(el => el.style.cssText += "display:block;") : null;
  h1_content_about_text ? h1_content_about_text.forEach(el => el.style.cssText += "color:#0d0a28;") : null;
  nav_menu ? nav_menu.forEach(el => el.style.cssText += "background-color:#ffffff;") : null;
  menu_line ? menu_line.forEach(el => el.style.cssText += "background-color:#0d0a28;") : null;
  search ? search.forEach(el => el.style.cssText += "color:#0d0a28;") : null;
  search_image ? search_image.forEach(el => el.style.cssText += "filter:invert(100%);") : null;
  filter_item_reset ? filter_item_reset.forEach(el => el.style.cssText += "color:#0d0a28;") : null;
  h2_tiny ? h2_tiny.forEach(el => el.style.cssText += "color:#0d0a28;") : null;

  dm__rays ? dm__rays.forEach(el => el.style.cssText += "opacity:100%;transform:rotate(180deg);") : null;
  dm__center ? dm__center.forEach(el => el.style.cssText += "transform: scale(0.5, 0.5);background-color:#0d0a28;") : null;
  dm__moon ? dm__moon.forEach(el => el.style.cssText += "transform:translateX(-100%);background-color:#ffffff;") : null;
  dm__ray_dot ? dm__ray_dot.forEach(el => el.style.cssText += "background-color:#0d0a28;") : null;
      break;
    case "dark":
    header ? header.forEach(el => el.style.cssText += "background-color:#0d0a28;") : null;
  navlink ? navlink.forEach(el => el.style.cssText += "color:#ffffff;") : null;
//   navlink_button ? navlink_button.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  body ? body.forEach(el => el.style.cssText += "background-color:#0d0a28;;color:#ffffff;") : null;
  footer_navlink ? footer_navlink.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  caption ? caption.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  footer ? footer.forEach(el => el.style.cssText += "background-color:rgba(73, 112, 240, 0.1);") : null;
  network ? network.forEach(el => el.style.cssText += "filter:invert(0%);;") : null;
  logo_footer ? logo_footer.forEach(el => el.style.cssText += "display:block;") : null;
  logo_footer_white ? logo_footer_white.forEach(el => el.style.cssText += "display:none;") : null;
  team_block ? team_block.forEach(el => el.style.cssText += "background-color:rgba(255, 255, 255, 0.1);") : null;
  team_button ? team_button.forEach(el => el.style.cssText += "color:#ffffff;background-color:rgba(255, 255, 255, 0.1);") : null;
  post_item_part ? post_item_part.forEach(el => el.style.cssText += "border-color:rgba(248, 249, 250, 0.3);") : null;
  filter_item ? filter_item.forEach(el => el.style.cssText += "border-color:rgba(255, 255, 255, 0.2);") : null;
  type_text ? type_text.forEach(el => el.style.cssText += "background-color:#0d0a28;") : null;
  resource_arrow ? resource_arrow.forEach(el => el.style.cssText += "background-color:rgba(0, 0, 0, 0.3);") : null;
  last_resource_block ? last_resource_block.forEach(el => el.style.cssText += "background-color:rgba(73, 112, 240, 0.1)") : null;
  get_started_block ? get_started_block.forEach(el => el.style.cssText += "background-color:#4970f0") : null;
  navlink_button_white ? navlink_button_white.forEach(el => el.style.cssText += "background-color:#ffffff;color:#0d0a28;") : null;
  back_get_started ? back_get_started.forEach(el => el.style.cssText += "filter:invert(0%);") : null;
  slider_item ? slider_item.forEach(el => el.style.cssText += "background-color:rgba(255, 255, 255, 0.1);") : null;
  versioning ? versioning.forEach(el => el.style.cssText += "background-color:rgba(73, 112, 240, 0.1);") : null;
  tick_image ? tick_image.forEach(el => el.style.cssText += "filter:invert(0%);") : null;
  arrow_container ? arrow_container.forEach(el => el.style.cssText += "filter:invert(0%);") : null;
  coming_soon_wrapper ? coming_soon_wrapper.forEach(el => el.style.cssText += "background-color:#0d0a28;border-color:rgba(73, 112, 240, 0.3);") : null;
  caption_red ? caption_red.forEach(el => el.style.cssText += "color:#fd837b;") : null;
  caption_lila ? caption_lila.forEach(el => el.style.cssText += "color:#9a9cfc;") : null;
  caption_blue ? caption_blue.forEach(el => el.style.cssText += "color:#7bdefd;") : null;
  brand_logo ? brand_logo.forEach(el => el.style.cssText += "display:block;") : null;
  brand_logo_white ? brand_logo_white.forEach(el => el.style.cssText += "display:none;") : null;
  h1_content_about_text ? h1_content_about_text.forEach(el => el.style.cssText += "color:#e9ebef;") : null;
  nav_menu ? nav_menu.forEach(el => el.style.cssText += "background-color:#0d0a28;") : null;
  menu_line ? menu_line.forEach(el => el.style.cssText += "background-color:#ffffff;") : null;
  search ? search.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  search_image ? search_image.forEach(el => el.style.cssText += "filter:invert(0%);") : null;
  h2_tiny ? h2_tiny.forEach(el => el.style.cssText += "color:#ffffff;") : null;
  dm__rays ? dm__rays.forEach(el => el.style.cssText += "opacity:0%;transform:rotate(0deg);") : null;
  dm__center ? dm__center.forEach(el => el.style.cssText += "transform: scale(1, 1);background-color:#ffffff;") : null;
  dm__moon ? dm__moon.forEach(el => el.style.cssText += "transform:translateX(-35%);background-color:#0d0a28;") : null;
      break;
    default:
      break;
  }
  }
