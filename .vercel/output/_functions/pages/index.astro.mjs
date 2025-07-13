/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, r as renderTemplate, f as renderComponent, u as unescapeHTML, F as Fragment, g as renderScript, h as renderSlot, i as renderHead } from '../chunks/astro/server_BTXaB9v4.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';
export { renderers } from '../renderers.mjs';

const icons = {"local":{"prefix":"local","lastModified":1752450962,"icons":{"bolt":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11z\"/>"},"browser":{"body":"<path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 8h16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-2v4\"/>"},"calendar":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M16 2v4M8 2v4m-5 4h18\"/></g>"},"cart":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0\"/><path d=\"M17 17H6V3H4\"/><path d=\"m6 5 14 1-1 7H6\"/></g>"},"chart":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v18h18m-3-4V9m-5 8V5M8 17v-3\"/>"},"chat":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17.802 17.292s.077-.055.2-.149c1.843-1.425 3-3.49 3-5.789 0-4.286-4.03-7.764-9-7.764s-9 3.478-9 7.764c0 4.288 4.03 7.646 9 7.646q.636 0 2.088-.084c1.262.82 3.104 1.493 4.716 1.493.499 0 .734-.41.414-.828-.486-.596-1.156-1.551-1.416-2.29z\"/><path d=\"M7.5 13.5c2.5 2.5 6.5 2.5 9 0\"/></g>"},"clock":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></g>"},"code":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16\"/>"},"instagram":{"body":"<path fill=\"currentColor\" d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881\"/>"},"Instagram_dark":{"body":"<path fill=\"#fff\" d=\"M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73 0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36 6.877-15.36 15.36-15.36 15.36 6.877 15.36 15.36\"/>","width":256,"height":256},"lightbulb":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 18h6m-5 4h4M12 2a7 7 0 0 0-7 7c0 3.87 3.13 7 7 7s7-3.13 7-7a7 7 0 0 0-7-7\"/>"},"linkedin":{"body":"<path fill=\"currentColor\" d=\"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699z\"/>","width":20,"height":20},"pencil":{"body":"<path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5 4 4\"/>"},"rocket":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 13a8 8 0 0 1 16 0c0 4-4 7-8 7s-8-3-8-7m8-11v4m0 16v-4\"/>"},"tiktok":{"body":"<path fill=\"currentColor\" d=\"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.9 4.9 0 0 1-1.8-.26z\"/>"},"tool":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065\"/><path d=\"M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/></g>"},"whatsapp":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"#00c677\" fill-rule=\"evenodd\" d=\"M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899 9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></g>"},"wrench":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.7 6.3a5 5 0 0 1-7.4 7.4l-4 4a2 2 0 1 0 2.8 2.8l4-4a5 5 0 0 1 7.4-7.4z\"/>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/node_modules/.pnpm/astro-icon@1.1.5/node_modules/astro-icon/components/Icon.astro", void 0);

const $$WhatsappButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Chat Button with WhatsApp Number Selector -->${maybeRenderHead()}<div class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50" data-astro-cid-atck4qn2> <!-- Main Chat Button --> <button id="chatToggle" class="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-white hover:bg-white text-white p-2 md:p-3 rounded-full shadow-lg transition-transform transform hover:scale-105" data-astro-cid-atck4qn2> ${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp", "class": "text-green-600", "data-astro-cid-atck4qn2": true })} </button> <!-- Dropdown Menu for WhatsApp Numbers --> <div id="chatOptions" class="hidden absolute bottom-16 md:bottom-20 right-0 bg-white rounded-xl shadow-lg p-4 space-y-2 w-56 md:w-64" data-astro-cid-atck4qn2> <p class="text-gray-700 font-semibold text-center" data-astro-cid-atck4qn2>¿Con quién deseas hablar?</p> <a href="https://wa.me/56979044361" target="_blank" class="flex items-center p-2 rounded-lg hover:bg-gray-100 transition" data-astro-cid-atck4qn2> <span class="text-green-600 text-xl" data-astro-cid-atck4qn2> ${renderComponent($$result, "Icon", $$Icon, { "name": "tool", "class": "text-green-600", "data-astro-cid-atck4qn2": true })} </span> <span class="ml-3 text-gray-800" data-astro-cid-atck4qn2>Soporte Clientes</span> </a> <a href="https://wa.me/56946441506" target="_blank" class="flex items-center p-2 rounded-lg hover:bg-gray-100 transition" data-astro-cid-atck4qn2> <span class="text-green-600 text-xl" data-astro-cid-atck4qn2> ${renderComponent($$result, "Icon", $$Icon, { "name": "chat", "class": "text-green-600", "data-astro-cid-atck4qn2": true })} </span> <span class="ml-3 text-gray-800" data-astro-cid-atck4qn2>Atención al Cliente</span> </a> </div> </div>  ${renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/buttons/WhatsappButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/buttons/WhatsappButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Open Graph Meta Tags --><meta property="og:title" content="Kreadium - Construimos tu presencia digital"><meta property="og:description" content="Dise\xF1o web, desarroll web wordpress, shopify, shopify ecommerce y marketing digital en Chile. Creamos experiencias digitales \xFAnicas para tu marca."><meta property="og:image" content="https://kreadium.cl/og-tags.png"><meta property="og:url" content="https://kreadium.cl"><meta property="og:type" content="website"><meta property="og:site_name" content="Kreadium"><meta property="og:locale" content="es_CL"><!-- Twitter Card Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Kreadium - Construimos tu presencia digital"><meta name="twitter:description" content="Dise\xF1o web, desarroll web wordpress, shopify, shopify ecommerce y marketing digital en Chile. Creamos experiencias digitales \xFAnicas para tu marca."><meta name="twitter:image" content="https://kreadium.cl/og-tags.png"><meta name="twitter:site" content="@kreadium"><meta name="twitter:creator" content="@kreadium"><!-- Meta Tags adicionales recomendados --><meta name="description" content="Dise\xF1o web, desarroll web wordpress, shopify, shopify ecommerce y marketing digital en Chile. Creamos experiencias digitales \xFAnicas para tu marca."><meta name="keywords" content="kreadium, desarrollo web, dise\xF1o gr\xE1fico, ecommerce, marketing digital, redes sociales, branding, SEO, Chile"><meta name="author" content="Kreadium"><meta name="robots" content="index, follow"><!-- Favicon --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Canonical URL --><link rel="canonical" href="https://kreadium.cl"><title>', '</title><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-GTM-5WJQJBJW"><\/script><!-- Google Tag Manager -->', "<!-- End Google Tag Manager -->", "</head> <body> ", " ", ' <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WJQJBJW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>'])), title, renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "WhatsappButton", $$WhatsappButton, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button onclick="window.location.href='#contact'" class="button" data-astro-cid-zn4mzfy5>
COTIZAR
</button> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/buttons/CallToAction.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="menu" class="fixed w-full z-20 top-0 start-0 backdrop-blur-md transition-all duration-[0.2s] px-8"> <div class="container mx-auto flex flex-wrap items-center justify-between py-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/images/logo-kreadium.webp" class="h-5 md:h-8" alt="kreadium"> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <div class="relative group"> ${renderComponent($$result, "CallToAction", $$CallToAction, { "text": "Cotizar Ahora" })} </div> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-black border-2 border-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Abrir menú principal</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> <ul class="flex flex-col py-2 gap-2 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"> <li> <a href="#home" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300" aria-current="page">Inicio</a> </li> <li> <a href="#services" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Servicios</a> </li> <li> <a href="#testimonials" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Testimonios</a> </li> <li> <a href="#contact" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Contacto</a> </li> </ul> <!-- Redes sociales para móvil --> <div class="block md:hidden mt-6 pt-4 border-t border-gray-600"> <p class="text-gray-300 text-sm mb-4 px-2">Síguenos</p> <div class="flex flex-col space-y-3 px-2"> <a href="#" class="flex items-center space-x-3 text-gray-300 hover:text-[#4CD6C0] transition-colors"> <div class="w-8 h-8 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "class": "w-4 h-4 text-[#4CD6C0]" })} </div> <span>LinkedIn</span> </a> <a href="https://www.instagram.com/kreadium/" target="_blank" class="flex items-center space-x-3 text-gray-300 hover:text-[#4CD6C0] transition-colors"> <div class="w-8 h-8 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "w-4 h-4 text-[#4CD6C0]" })} </div> <span>Instagram</span> </a> <a href="#" class="flex items-center space-x-3 text-gray-300 hover:text-[#4CD6C0] transition-colors"> <div class="w-8 h-8 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tiktok", "class": "w-4 h-4 text-[#4CD6C0]" })} </div> <span>TikTok</span> </a> </div> </div> </div> </div> </nav> ${renderScript($$result, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Header.astro", void 0);

const $$ServicesItems = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Dise\xF1o Gr\xE1fico",
      description: "Creamos identidades visuales \xFAnicas que reflejan la esencia de tu marca.",
      icon: "pencil"
    },
    {
      title: "Dise\xF1o Web",
      description: "Dise\xF1amos sitios atractivos y funcionales para una experiencia \xFAnica.",
      icon: "browser"
    },
    {
      title: "Desarrollo Web",
      description: "Desarrollamos sitios web r\xE1pidos, seguros y optimizados para SEO.",
      icon: "code"
    },
    {
      title: "Ecommerce",
      description: "Construimos tiendas online escalables y f\xE1ciles de gestionar.",
      icon: "cart"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto py-10 md:py-[100px] px-4 sm:px-6 lg:px-8" id="services"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl text-white sm:text-3xl md:text-5xl">¿Qué hacemos?</h2> <p class="mt-4 text-lg text-gray-400">Ofrecemos soluciones creativas y técnicas para impulsar tu negocio.</p> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${services.map((service) => renderTemplate`<div class="flex"> ${renderComponent($$result, "SpotlightCard", null, { "className": "custom-spotlight-card", "spotlightColor": "rgba(0, 229, 255, 0.2)", "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/card/SpotlightCard", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${service.icon && renderTemplate`<div class="py-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": service.icon, "size": "46", "class": "text-[#4CD6C0]" })} </div>`}<h3 class="text-2xl text-white">${service.title}</h3> <p class="mt-4 text-gray-400">${service.description}</p> <a href="#contacto" class=""></a> ` })} </div>`)} </div> </div> </div>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/ServicesItems.astro", void 0);

const RatingStars = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: `w-4 h-4 ${i <= rating ? "text-yellow-400" : "text-gray-600"} fill-current`,
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
        },
        i
      )
    );
  }
  return /* @__PURE__ */ jsx("div", { className: "flex space-x-1 mb-4", children: stars });
};
const CommentCarousel = ({ comments, interval = 4e3 }) => {
  if (!comments || comments.length === 0) {
    return /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-center", children: "No hay comentarios para mostrar." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "testimonials-carousel", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay, Pagination],
        autoplay: {
          delay: interval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          clickable: true,
          bulletClass: "swiper-pagination-bullet testimonial-bullet",
          bulletActiveClass: "testimonial-bullet-active"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        className: "pb-16",
        children: comments.map((comment) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsxs("div", { className: "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-[210px] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4CD6C0]/10 flex flex-col", children: [
          /* @__PURE__ */ jsx(RatingStars, { rating: comment.rating }),
          /* @__PURE__ */ jsx("blockquote", { className: "text-gray-200 text-base leading-relaxed mb-4 italic h-[10px] overflow-hidden flex-1", children: /* @__PURE__ */ jsxs("div", { className: "line-clamp-3", children: [
            '"',
            comment.description,
            '"'
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mt-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-14 h-14 rounded-full object-cover ring-2 ring-[rgba(76,214,192,0.3)] group-hover:ring-[rgba(76,214,192,0.5)] transition-all duration-300",
                  src: comment.image,
                  alt: comment.name,
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 bg-[#4CD6C0] rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-3 h-3 text-black",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-lg", children: comment.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Cliente verificado" })
            ] })
          ] })
        ] }) }) }, comment.id))
      }
    ),
    /* @__PURE__ */ jsx("style", { jsx: "true", children: `
        :global(.testimonial-bullet) {
          background: rgba(76, 214, 192, 0.3) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }

        :global(.testimonial-bullet-active) {
          background: #4cd6c0 !important;
          transform: scale(1.2) !important;
        }

        :global(.swiper-pagination) {
          bottom: 0 !important;
        }

        :global(.line-clamp-3) {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      ` })
  ] });
};
CommentCarousel.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  interval: PropTypes.number
};
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxStars: PropTypes.number
};

const comments = [{"id":1,"image":"https://randomuser.me/api/portraits/men/10.jpg","name":"Cristián Smith","rating":5,"description":"Kreadium fue clave para mi emprendimiento. ¡Excelente servicio!"},{"id":2,"image":"https://randomuser.me/api/portraits/women/10.jpg","name":"María José López","rating":5,"description":"Increíble experiencia con Kreadium. ¡Definitivamente volveré a contactarlos!"},{"id":3,"image":"https://randomuser.me/api/portraits/men/20.jpg","name":"Carlos Ramírez","rating":5,"description":"Atención rápida y efectiva. Kreadium superó mis expectativas."},{"id":4,"image":"https://randomuser.me/api/portraits/men/30.jpg","name":"Alejandro Caceres","rating":5,"description":"Trabajar con Kreadium fue una gran decisión. ¡Totalmente recomendado!"},{"id":5,"image":"https://randomuser.me/api/portraits/women/15.jpg","name":"Francisca Araya","rating":5,"description":"Kreadium me brindó una experiencia excepcional."},{"id":6,"image":"https://randomuser.me/api/portraits/men/40.jpg","name":"Andres Miranda","rating":5,"description":"Gracias a Kreadium, ahora tengo un sitio web funcional y productivo."}];
const testimonials = {
  comments,
};

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const comments = testimonials.comments;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-[100px] px-8 overflow-hidden" id="testimonials"> <!-- Efectos de fondo sutiles --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(76,214,192,0.03)] to-transparent"></div> <div class="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-[#4CD6C0] opacity-[0.08] rounded-full blur-[60px] md:blur-[80px]"></div> <div class="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-16 h-16 md:w-24 md:h-24 bg-[#09b397] opacity-[0.08] rounded-full blur-[60px] md:blur-[80px]"></div> <div class="container mx-auto relative z-10"> <!-- Header mejorado --> <div class="text-center mb-16"> <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">
Lo que dicen nuestros <span class="bg-gradient-to-r from-[#4CD6C0] to-[#09b397] bg-clip-text text-transparent">clientes</span> </h2> <p class="text-gray-300 text-lg max-w-3xl mx-auto">
Miles de empresas confían en nosotros para crear experiencias digitales excepcionales.
</p> <!-- Rating promedio --> <div class="flex items-center justify-center mt-8 space-x-2"> <div class="flex space-x-1"> ${[...Array(5)].map((_, i) => renderTemplate`<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <span class="text-gray-300 font-medium">5.0 de 5</span> <span class="text-gray-400">•</span> <span class="text-gray-400">${comments.length} reseñas</span> </div> </div> <!-- Carousel mejorado --> ${renderComponent($$result, "CommentCarousel", CommentCarousel, { "comments": comments, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/carousel-comment/CarouselComment", "client:component-export": "default" })} </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Testimonials.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gradient-to-br from-black/95 via-gray-900/85 to-black/95 backdrop-blur-lg py-24 px-8 overflow-hidden"> <!-- Efectos de fondo ultra prominentes --> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/50 to-gray-800/30"></div> <div class="absolute inset-0 bg-gradient-to-br from-[#4CD6C0]/8 via-transparent to-[#09b397]/12"></div> <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-[#4CD6C0]/3 to-transparent"></div> <!-- Círculos de fondo súper prominentes --> <div class="absolute top-4 left-4 md:top-10 md:left-10 w-32 h-32 md:w-48 md:h-48 bg-[#4CD6C0] opacity-[0.18] rounded-full blur-[80px] md:blur-[140px]"></div> <div class="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-40 h-40 md:w-64 md:h-64 bg-[#09b397] opacity-[0.20] rounded-full blur-[100px] md:blur-[180px]"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-[#4CD6C0] opacity-[0.08] rounded-full blur-[120px] md:blur-[250px]"></div> <div class="absolute top-8 right-8 md:top-20 md:right-1/4 w-20 h-20 md:w-32 md:h-32 bg-[#09b397] opacity-[0.12] rounded-full blur-[60px] md:blur-[100px]"></div> <!-- Patrón de puntos más visible --> <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 1px 1px, rgba(76,214,192,0.9) 1px, transparent 0); background-size: 20px 20px;"></div> <!-- Líneas de luz sutiles --> <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4CD6C0]/40 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#09b397]/30 to-transparent"></div> <div class="container mx-auto relative z-10"> <!-- Sección principal --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"> <!-- Columna de marca --> <div class="lg:col-span-2 space-y-8"> <div class="space-y-6"> <img src="/images/logo-kreadium.webp" class="h-10" alt="Kreadium"> <p class="text-gray-300 text-lg leading-relaxed max-w-2xl">
Diseñamos y desarrollamos soluciones digitales excepcionales que transforman ideas en experiencias extraordinarias.
<span class="text-[#4CD6C0] font-medium">Convierte tu visión en una realidad digital.</span> </p> </div> <!-- Información de contacto --> <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6"> <h3 class="text-lg font-semibold text-white mb-4">Kreadium SpA</h3> <div class="space-y-3"> <div class="flex items-center space-x-3"> <div class="w-5 h-5 rounded-full bg-[rgba(76,214,192,0.2)] flex items-center justify-center"> <div class="w-2 h-2 rounded-full bg-[#4CD6C0]"></div> </div> <span class="text-gray-300">Santiago de Chile</span> </div> <div class="flex items-center space-x-3"> <div class="w-5 h-5 rounded-full bg-[rgba(76,214,192,0.2)] flex items-center justify-center"> <div class="w-2 h-2 rounded-full bg-[#4CD6C0]"></div> </div> <a href="mailto:contacto@kreadium.cl" class="text-gray-300 hover:text-[#4CD6C0] transition-colors">
contacto@kreadium.cl
</a> </div> </div> </div> </div> <!-- Columna de redes sociales --> <div class="space-y-8"> <div> <h3 class="text-lg font-semibold text-white mb-6">Síguenos</h3> <div class="space-y-4"> <a href="#" class="group flex items-center space-x-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(76,214,192,0.3)] transition-all duration-300"> <div class="w-10 h-10 rounded-xl bg-[rgba(76,214,192,0.1)] flex items-center justify-center group-hover:bg-[rgba(76,214,192,0.2)] transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "class": "w-5 h-5 text-[#4CD6C0]" })} </div> <div> <span class="text-white font-medium">LinkedIn</span> <p class="text-gray-400 text-sm">Conecta profesionalmente</p> </div> </a> <a href="https://www.instagram.com/kreadium/" target="_blank" class="group flex items-center space-x-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(76,214,192,0.3)] transition-all duration-300"> <div class="w-10 h-10 rounded-xl bg-[rgba(76,214,192,0.1)] flex items-center justify-center group-hover:bg-[rgba(76,214,192,0.2)] transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "w-5 h-5 text-[#4CD6C0]" })} </div> <div> <span class="text-white font-medium">Instagram</span> <p class="text-gray-400 text-sm">Síguenos para inspiración</p> </div> </a> <a href="#" class="group flex items-center space-x-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(76,214,192,0.3)] transition-all duration-300"> <div class="w-10 h-10 rounded-xl bg-[rgba(76,214,192,0.1)] flex items-center justify-center group-hover:bg-[rgba(76,214,192,0.2)] transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tiktok", "class": "w-5 h-5 text-[#4CD6C0]" })} </div> <div> <span class="text-white font-medium">TikTok</span> <p class="text-gray-400 text-sm">Contenido creativo diario</p> </div> </a> </div> </div> </div> </div> <!-- Sección inferior sin separador --> <div class="pt-12 mt-8"> <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"> <!-- Copyright --> <div class="text-center lg:text-left"> <p class="text-gray-400">&copy; 2025 Kreadium SpA. Todos los derechos reservados.</p> <p class="text-gray-500 text-sm mt-1">Diseñando el futuro digital, hoy.</p> </div> <!-- Navegación --> <nav class="flex flex-wrap justify-center gap-8"> <a href="#home" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium">Inicio</a> <a href="#services" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium">Servicios</a> <a href="#testimonials" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium">Testimonios</a> <a href="#contact" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium">Contacto</a> </nav> </div> </div> </div> </footer>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Footer.astro", void 0);

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `shiny-text ${disabled ? "disabled" : ""} ${className}`,
      style: { animationDuration },
      children: text
    }
  );
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex flex-col items-center justify-center text-white text-center h-[500px] md:h-[calc(65vh-0rem)]" id="home"> <div class="mt-[100px] md:mt-[100px]"> <span class="text-gray-200 bg-stone-950 rounded-full px-4 p-2 bg-opacity-40 text-sm md:text-xl">
Impulsamos tu presencia digital
</span> <h1 class="px-5 md:px-0 text-[2rem] md:text-8xl font-bold">
Construyamos
<span class="bg-gradient-to-r from-[var(--accent)] via-teal-300 to-teal-700 bg-clip-text text-transparent">
juntos
</span> tu<br>presencia digital
</h1> <div class="mt-5 md:mt-10"> ${renderComponent($$result, "ShinyText", ShinyText, { "text": "\xBFGanaste el Capital Semilla o Abeja de SERCOTEC?. Escr\xEDbenos.", "disabled": false, "speed": 3, "className": "custom-class" })} </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Hero.astro", void 0);

const $$Shopify = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-[100px] px-8" id="shopify"> <!-- Layout principal --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"> <!-- Columna izquierda: Texto y Cards --> <div class="order-2 lg:order-1"> <!-- Título y descripción principal --> <div class="mb-6 sm:mb-8"> <div class="flex items-center mb-4 sm:mb-6"> <span class="text-base sm:text-lg md:text-xl font-medium text-gray-300">Shopify Partner</span> </div> <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
Expertos en desarrollo <span class="bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] bg-clip-text text-transparent">Shopify</span> </h2> <p class="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
Somos partners oficiales de Shopify y nos especializamos en crear experiencias de compra excepcionales para tu negocio. Desde tiendas personalizadas hasta soluciones complejas de comercio electrónico, tenemos la experiencia para impulsar tus ventas online.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"> <div class="bg-[rgba(255,255,255,0.05)] p-4 sm:p-5 rounded-lg"> <div class="flex items-center mb-3"> <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mr-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "code", "class": "w-4 h-4 sm:w-5 sm:h-5 text-[#95BF47]" })} </div> <h3 class="font-medium text-lg sm:text-xl">Tiendas personalizadas</h3> </div> <p class="text-gray-400 text-sm sm:text-base">Diseños únicos que reflejan la identidad de tu marca y mejoran la experiencia de usuario.</p> </div> <div class="bg-[rgba(255,255,255,0.05)] p-4 sm:p-5 rounded-lg"> <div class="flex items-center mb-3"> <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mr-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tool", "class": "w-4 h-4 sm:w-5 sm:h-5 text-[#95BF47]" })} </div> <h3 class="font-medium text-lg sm:text-xl">Apps y extensiones</h3> </div> <p class="text-gray-400 text-sm sm:text-base">Desarrollamos funcionalidades específicas para tu tienda adaptadas a tus necesidades.</p> </div> <div class="bg-[rgba(255,255,255,0.05)] p-4 sm:p-5 rounded-lg"> <div class="flex items-center mb-3"> <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mr-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "cart", "class": "w-4 h-4 sm:w-5 sm:h-5 text-[#95BF47]" })} </div> <h3 class="font-medium text-lg sm:text-xl">Optimización de conversión</h3> </div> <p class="text-gray-400 text-sm sm:text-base">Mejoramos el rendimiento de tu tienda para aumentar las tasas de conversión y ventas.</p> </div> <div class="bg-[rgba(255,255,255,0.05)] p-4 sm:p-5 rounded-lg"> <div class="flex items-center mb-3"> <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mr-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "chat", "class": "w-4 h-4 sm:w-5 sm:h-5 text-[#95BF47]" })} </div> <h3 class="font-medium text-lg sm:text-xl">Soporte especializado</h3> </div> <p class="text-gray-400 text-sm sm:text-base">Te acompañamos con soporte técnico y asesoría continua para tu tienda Shopify.</p> </div> </div> </div> <!-- Video para desktop - solo visible en lg+ --> <div class="order-1 lg:order-2 relative hidden lg:block"> <!-- Efectos de fondo responsivos --> <div class="absolute -top-2 -left-2 md:-top-0 md:-left-2 w-20 h-20 md:w-80 md:h-80 bg-[#fafff0] opacity-6 md:opacity-8 rounded-full blur-[40px] md:blur-[200px]"></div> <div class="absolute -bottom-2 -right-2 md:-bottom-20 md:-right-20 w-20 h-20 md:w-96 md:h-96 bg-[#def5ce] opacity-8 md:opacity-10 rounded-full blur-[40px] md:blur-[240px]"></div> <div class="absolute top-1 right-1 md:top-10 md:right-10 w-12 h-12 md:w-40 md:h-40 bg-[#789f31] opacity-6 md:opacity-8 rounded-full blur-[30px] md:blur-[180px]"></div> <div class="relative z-10 group"> <!-- Degradado mesh principal ultra sutil --> <div class="absolute -inset-1 md:-inset-8 rounded-xl md:rounded-3xl opacity-15 md:opacity-20 group-hover:opacity-20 md:group-hover:opacity-28 transition-all duration-700" style="background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(149,191,71,0.06) 0%, rgba(94,142,62,0.04) 25%, rgba(149,191,71,0.03) 50%, transparent 100%); filter: blur(10px) md:blur(20px);"></div> <!-- Segundo degradado mesh superpuesto --> <div class="absolute -inset-1 md:-inset-6 rounded-xl md:rounded-3xl opacity-10 md:opacity-15" style="background: radial-gradient(ellipse 90% 60% at 30% 80%, rgba(94,142,62,0.08) 0%, rgba(149,191,71,0.06) 30%, transparent 70%); filter: blur(8px) md:blur(15px);"></div> <!-- Tercer degradado mesh para profundidad --> <div class="absolute -inset-1 md:-inset-4 rounded-xl md:rounded-3xl opacity-12 md:opacity-18" style="background: radial-gradient(ellipse 70% 40% at 70% 90%, rgba(149,191,71,0.09) 0%, rgba(94,142,62,0.04) 40%, transparent 80%); filter: blur(12px) md:blur(25px);"></div> <!-- Halo principal muy suave --> <div class="absolute -inset-1 md:-inset-4 bg-gradient-to-r from-[#95BF47]/8 via-[#5E8E3E]/10 to-[#95BF47]/8 md:from-[#95BF47]/12 md:via-[#5E8E3E]/15 md:to-[#95BF47]/12 rounded-lg md:rounded-2xl blur-lg md:blur-xl opacity-20 md:opacity-25 group-hover:opacity-25 md:group-hover:opacity-35 transition-all duration-700"></div> <!-- Luces de esquina muy sutiles --> <div class="absolute -bottom-1 -right-1 md:-bottom-4 md:-right-4 w-8 h-8 md:w-40 md:h-40 bg-[#5E8E3E] opacity-8 md:opacity-10 rounded-full blur-lg md:blur-2xl"></div> <!-- Reflejo superior muy suave --> <div class="absolute -top-1 md:-top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-3 md:h-20 bg-gradient-to-b from-[#95BF47]/4 to-transparent md:from-[#95BF47]/6 rounded-full blur-md md:blur-xl opacity-15 md:opacity-20"></div> <!-- Contenedor del video --> <div class="relative rounded-lg md:rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] md:from-[rgba(255,255,255,0.1)] border border-[rgba(149,191,71,0.3)] md:border-[rgba(149,191,71,0.4)] backdrop-blur-sm md:backdrop-blur-md shadow-lg md:shadow-2xl shadow-[#5E8E3E]/20 md:shadow-[#5E8E3E]/30"> <!-- Borde interior luminoso doble --> <div class="absolute inset-0 rounded-lg md:rounded-2xl border border-[rgba(149,191,71,0.15)] md:border-2 md:border-[rgba(149,191,71,0.2)]"></div> <div class="absolute inset-0.5 md:inset-1 rounded-md md:rounded-xl border border-[rgba(149,191,71,0.08)] md:border-[rgba(149,191,71,0.1)]"></div> <!-- Reflejo interior superior --> <div class="absolute top-0 left-0 right-0 h-8 md:h-20 bg-gradient-to-b from-[rgba(149,191,71,0.06)] to-transparent md:from-[rgba(149,191,71,0.1)] rounded-t-lg md:rounded-t-2xl"></div> <video autoplay muted loop playsinline class="w-full h-auto relative z-10"> <source src="/videos/shopify-kreadium.mp4" type="video/mp4">
Tu navegador no soporta el elemento de video.
</video> </div> </div> </div> </div> <!-- Video para móviles y tablets - entre cards y botón --> <div class="lg:hidden mt-8 mb-8"> <!-- ASCII Text Header para Móvil/Tablet --> <div class="relative max-w-lg mx-auto"> <!-- Efectos de fondo más sutiles para móvil/tablet --> <div class="absolute -top-2 -left-2 w-20 h-20 bg-[#fafff0] opacity-4 rounded-full blur-[30px]"></div> <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-[#def5ce] opacity-6 rounded-full blur-[30px]"></div> <div class="relative z-10 group"> <!-- Contenedor del video simplificado para móvil/tablet --> <div class="relative rounded-lg overflow-hidden bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.02)] border border-[rgba(149,191,71,0.25)] backdrop-blur-sm shadow-lg shadow-[#5E8E3E]/15"> <div class="absolute inset-0 rounded-lg border border-[rgba(149,191,71,0.12)]"></div> <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[rgba(149,191,71,0.04)] to-transparent rounded-t-lg"></div> <video autoplay muted loop playsinline class="w-full h-auto relative z-10"> <source src="/videos/shopify-kreadium.mp4" type="video/mp4">
Tu navegador no soporta el elemento de video.
</video> </div> </div> </div> </div> <!-- Botón call-to-action --> <div class="text-center lg:text-left"> <a href="#contact" class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#5E8E3E] hover:bg-[#4a7032] transition-colors rounded-lg text-white font-medium text-sm sm:text-base">
Consulta nuestros servicios Shopify
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> <div class="mt-12 md:mt-20 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 text-center"> <h3 class="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">¿Por qué elegir Shopify para tu ecommerce?</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10"> <div class="flex flex-col items-center"> <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mb-2 sm:mb-3 md:mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#95BF47]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h4 class="font-medium text-sm sm:text-base">Seguridad</h4> <p class="text-gray-400 text-sm mt-2">Plataforma segura y confiable para tus transacciones.</p> </div> <div class="flex flex-col items-center"> <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mb-2 sm:mb-3 md:mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#95BF47]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h4 class="font-medium text-sm sm:text-base">Rendimiento</h4> <p class="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Tiendas rápidas y optimizadas para dispositivos móviles.</p> </div> <div class="flex flex-col items-center"> <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mb-2 sm:mb-3 md:mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#95BF47]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <h4 class="font-medium text-sm sm:text-base">Escalabilidad</h4> <p class="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Crece tu negocio sin preocuparte por limitaciones técnicas.</p> </div> <div class="flex flex-col items-center"> <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(94,142,62,0.2)] flex items-center justify-center mb-2 sm:mb-3 md:mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#95BF47]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path> </svg> </div> <h4 class="font-medium text-sm sm:text-base">Personalización</h4> <p class="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Adapta tu tienda a las necesidades específicas de tu negocio.</p> </div> </div> <p class="text-gray-300 mt-6 sm:mt-8 md:mt-10 max-w-3xl mx-auto text-sm sm:text-base px-2">
Como partners oficiales de Shopify, te ofrecemos soluciones de comercio electrónico de alto nivel 
      que maximizan tus resultados online. Nuestro equipo está certificado para brindarte el mejor 
      servicio y las mejores prácticas en desarrollo de tiendas Shopify.
</p> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Shopify.astro", void 0);

const $$Integrations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-[100px] px-8 overflow-hidden" id="integraciones"> <!-- Efectos de fondo divisorios responsivos --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(76,214,192,0.08)] to-transparent"></div> <div class="absolute top-16 left-8 md:top-32 md:left-16 w-16 h-16 md:w-32 md:h-32 bg-[#4CD6C0] opacity-[0.15] rounded-full blur-[50px] md:blur-[100px]"></div> <div class="absolute bottom-16 right-8 md:bottom-32 md:right-16 w-20 h-20 md:w-40 md:h-40 bg-[#09b397] opacity-[0.10] rounded-full blur-[60px] md:blur-[100px]"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-[#4CD6C0] opacity-[0.05] rounded-full blur-[60px] md:blur-[120px]"></div> <div class="container mx-auto relative z-10"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-5xl font-bold mb-6">
Integraciones de <span class="bg-gradient-to-r from-[#4CD6C0] to-[#09b397] bg-clip-text text-transparent">Pasarelas de Pago</span> </h2> <p class="text-gray-300 text-lg max-w-3xl mx-auto">
Conectamos tu tienda con las principales pasarelas de pago para ofrecerte máxima flexibilidad y conversión en tus ventas online.
</p> </div> <!-- Grid de pasarelas de pago --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"> <!-- Venti --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/venti.svg" alt="Venti" class="w-full h-full object-contain"> </div> <p class="text-gray-400 text-sm mb-4">Pasarela de pagos chilena con múltiples opciones de pago y fácil integración.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ Tarjetas de crédito y débito</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Transferencias bancarias</div> </div> <!-- Mercado Pago --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/mercado-pago.svg" alt="Mercado Pago" class="w-full h-full object-contain"> </div> <p class="text-gray-400 text-sm mb-4">La pasarela líder en Latinoamérica con máxima confianza y reconocimiento.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ Pagos en cuotas</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Punto de venta</div> </div> <!-- Flow --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/flow.svg" alt="Flow" class="w-full h-full object-contain"> </div> <p class="text-gray-400 text-sm mb-4">Plataforma de pagos chilena con altos estándares de seguridad y facilidad de uso.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ Webpay Plus</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Klarna</div> </div> <!-- Finctoc --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/fintoc.svg" alt="Finctoc" class="w-full h-full object-contain"> </div> <p class="text-gray-400 text-sm mb-4">Solución de pagos moderna con tecnología avanzada y excelente experiencia de usuario.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ API moderna</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Pagos recurrentes</div> </div> </div> <!-- Sección de beneficios --> <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl p-8"> <h3 class="text-2xl md:text-3xl font-bold text-center mb-10">¿Por qué integrar múltiples pasarelas de pago?</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center"> <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "chart", "class": "w-8 h-8 text-[#4CD6C0]" })} </div> <h4 class="text-xl font-medium mb-3">Mayor Conversión</h4> <p class="text-gray-400">Ofrece múltiples opciones de pago para que tus clientes elijan su método preferido y completen la compra.</p> </div> <div class="text-center"> <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "code", "class": "w-8 h-8 text-[#4CD6C0]" })} </div> <h4 class="text-xl font-medium mb-3">Redundancia</h4> <p class="text-gray-400">Si una pasarela tiene problemas técnicos, tus ventas continúan funcionando con las alternativas disponibles.</p> </div> <div class="text-center"> <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "browser", "class": "w-8 h-8 text-[#4CD6C0]" })} </div> <h4 class="text-xl font-medium mb-3">Flexibilidad</h4> <p class="text-gray-400">Adapta los métodos de pago según tu mercado objetivo y las preferencias de tus clientes.</p> </div> </div> <div class="text-center mt-10"> <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
Implementamos las integraciones de forma segura y optimizada, asegurándonos de que cada transacción sea rápida y confiable para tus clientes.
</p> <a href="#contact" class="inline-flex items-center px-6 py-3 bg-[#4CD6C0] hover:bg-[#09b397] transition-colors rounded-lg text-black font-medium">
Consulta sobre integraciones
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Integrations.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kreadium - Construimos tu presencia digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "Aurora", null, { "client:only": true, "colorStops": ["#A5DEDC", "#60D2AE", "#A5DEDC"], "blend": 0.5, "amplitude": 1.1, "speed": 0.5, "client:component-hydration": "only", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/hero/Aurora.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, {})} </div> ${renderComponent($$result2, "ServicesItems", $$ServicesItems, {})} <div class="py-0 md:py-[100px]"> ${renderComponent($$result2, "ScrollVelocity", null, { "client:only": true, "texts": ["DESARROLLAMOS EXPERIENCIAS \xDANICAS", "PARA QUE TU MARCA DESTAQUE"], "velocity": 100, "className": "custom-scroll-text", "client:component-hydration": "only", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/scroll-velocity/ScrollVelocity", "client:component-export": "default" })} </div>  ${renderComponent($$result2, "Shopify", $$Shopify, {})} ${renderComponent($$result2, "Integrations", $$Integrations, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "ContactForm", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/contact-form/ContactForm", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/pages/index.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
