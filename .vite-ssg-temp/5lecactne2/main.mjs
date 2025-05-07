import { createHead } from "@unhead/vue/server";
import { defineComponent, ref, onMounted, createSSRApp, useSSRContext, unref, withCtx, createTextVNode, mergeProps, resolveComponent, createVNode, computed, openBlock, createBlock } from "vue";
import { createRouter, createMemoryHistory, RouterView, RouterLink, useRoute, createWebHistory } from "vue-router";
import { createHead as createHead$1 } from "@vueuse/head";
import { createPinia } from "pinia";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
const ClientOnly = defineComponent({
  setup(props, { slots }) {
    const mounted = ref(false);
    onMounted(() => mounted.value = true);
    return () => {
      if (!mounted.value)
        return slots.placeholder && slots.placeholder({});
      return slots.default && slots.default({});
    };
  }
});
function ViteSSG(App, routerOptions, fn, options) {
  const {
    transformState,
    registerComponents = true,
    useHead: useHead2 = true,
    rootContainer = "#app"
  } = {};
  async function createApp$1(_client = false, routePath) {
    const app = createSSRApp(App);
    let head;
    if (useHead2) {
      app.use(head = createHead());
    }
    const router2 = createRouter({
      history: createMemoryHistory(routerOptions.base),
      ...routerOptions
    });
    const { routes: routes2 } = routerOptions;
    if (registerComponents)
      app.component("ClientOnly", ClientOnly);
    const appRenderCallbacks = [];
    const onSSRAppRendered = (cb) => appRenderCallbacks.push(cb);
    const triggerOnSSRAppRendered = () => {
      return Promise.all(appRenderCallbacks.map((cb) => cb()));
    };
    const context = {
      app,
      head,
      isClient: false,
      router: router2,
      routes: routes2,
      onSSRAppRendered,
      triggerOnSSRAppRendered,
      initialState: {},
      transformState,
      routePath
    };
    await (fn == null ? void 0 : fn(context));
    app.use(router2);
    let entryRoutePath;
    let isFirstRoute = true;
    router2.beforeEach((to, from, next) => {
      if (isFirstRoute || entryRoutePath && entryRoutePath === to.path) {
        isFirstRoute = false;
        entryRoutePath = to.path;
        to.meta.state = context.initialState;
      }
      next();
    });
    {
      const route = context.routePath ?? "/";
      router2.push(route);
      await router2.isReady();
      context.initialState = router2.currentRoute.value.meta.state || {};
    }
    const initialState = context.initialState;
    return {
      ...context,
      initialState
    };
  }
  return createApp$1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$n = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: Number,
      required: true,
      validator: (value) => {
        return value !== void 0;
      }
    }
  },
  setup(__props) {
    const isOpen = ref(false);
    const toggleHamburger = () => {
      isOpen.value = !isOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`<div class="${ssrRenderClass({ "space-top": __props.mode != 1 && __props.mode != 2 })}" data-v-29734f3b></div><header class="${ssrRenderClass([{ transparent: __props.mode == 1 || __props.mode == 2 }, "fixed-header"])}" data-v-29734f3b><div class="inside-header" data-v-29734f3b>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/",
        class: ["logo", { "color-white": __props.mode == 1 || __props.mode == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`global connect`);
          } else {
            return [
              createTextVNode("global connect")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="nav-links" data-v-29734f3b>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/work",
        class: ["nav-item", { "hover-white": __props.mode == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`projekti`);
          } else {
            return [
              createTextVNode("projekti")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/services",
        class: ["nav-item", { "hover-white": __props.mode == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`usluge`);
          } else {
            return [
              createTextVNode("usluge")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/people",
        class: ["nav-item", { "hover-white": __props.mode == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ured`);
          } else {
            return [
              createTextVNode("ured")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/refrences",
        class: ["nav-item", { "hover-white": __props.mode == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`reference`);
          } else {
            return [
              createTextVNode("reference")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/contact",
        class: ["nav-item", { "hover-white": __props.mode == 2 }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`kontakt`);
          } else {
            return [
              createTextVNode("kontakt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><header class="header-mobile" data-v-29734f3b><div class="header-wrapper" data-v-29734f3b><div class="header-top" data-v-29734f3b>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`GC`);
          } else {
            return [
              createTextVNode("GC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ open: isOpen.value }, "hamburger"])}" data-v-29734f3b><span class="hamburger-top" data-v-29734f3b></span><span class="hamburger-middle" data-v-29734f3b></span><span class="hamburger-bottom" data-v-29734f3b></span></div></div><div class="${ssrRenderClass([{ open: isOpen.value }, "menu"])}" data-v-29734f3b>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        onClick: toggleHamburger,
        to: "/refrences",
        class: "nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`refrences`);
          } else {
            return [
              createTextVNode("refrences")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        onClick: toggleHamburger,
        to: "/services",
        class: "nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`services`);
          } else {
            return [
              createTextVNode("services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        onClick: toggleHamburger,
        to: "/people",
        class: "nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`people`);
          } else {
            return [
              createTextVNode("people")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        onClick: toggleHamburger,
        to: "/work",
        class: "nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`work`);
          } else {
            return [
              createTextVNode("work")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        onClick: toggleHamburger,
        to: "/contact",
        class: "nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`contact`);
          } else {
            return [
              createTextVNode("contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><!--]-->`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-29734f3b"]]);
const _sfc_main$m = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    info: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.image !== void 0 && value.projectName !== void 0 && value.projectInfo !== void 0 && value.projectDate !== void 0;
      }
    }
  },
  setup(__props) {
    const hover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-container" }, _attrs))} data-v-0a692b69><div class="image-container" data-v-0a692b69><img${ssrRenderAttr("src", __props.info.image)} alt="" class="responsive-image" loading="lazy" data-v-0a692b69><div class="${ssrRenderClass([{ visible: hover.value }, "overlay"])}" data-v-0a692b69></div><div class="${ssrRenderClass([{ visible: hover.value }, "text"])}" data-v-0a692b69><h2 data-v-0a692b69>${ssrInterpolate(__props.info.projectName)}</h2><p data-v-0a692b69>${ssrInterpolate(__props.info.projectDate)}</p><p data-v-0a692b69>${ssrInterpolate(__props.info.projectInfo)}</p></div></div><h3 class="title" data-v-0a692b69>${ssrInterpolate(__props.info.projectName)}</h3></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProjectCard.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const ProjectCard = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-0a692b69"]]);
const _sfc_main$l = {
  __name: "ProjectList",
  __ssrInlineRender: true,
  props: {
    projectList: {
      type: Array,
      required: true,
      validator: (value) => {
        return value !== void 0;
      }
    }
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-wrapper" }, _attrs))} data-v-f3726eb8><!--[-->`);
      ssrRenderList(__props.projectList, (project) => {
        _push(`<div class="project-card" data-v-f3726eb8>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "project", params: { id: project.id } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ProjectCard, { info: project }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(ProjectCard, { info: project }, null, 8, ["info"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProjectList.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-f3726eb8"]]);
const _sfc_main$k = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_1.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_2.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_3.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_4.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_5.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_1.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_2.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_3.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_4.png"
      },
      {
        projectDate: "22-05-1997",
        projectInfo: "Copot kuća renderi",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_5.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RouterView), _attrs, null, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}`);
  }
  return response.json();
}
const Gateway = {
  async getProjectPictures(id) {
    return fetchData(`/projects/pictures/${id}`);
  },
  async getProjectRichText(id) {
    return fetchData(`/projects/richtext/${id}`);
  },
  async getFirstPicturesList() {
    return fetchData(`/projects/firstPictures`);
  },
  async getAllProjectsShortInfo() {
    return fetchData(`/projects/shortInfo`);
  },
  async getAllServicesShortInfo() {
    return fetchData(`/services/shortInfo`);
  },
  async getServicePictures(id) {
    return fetchData(`/services/pictures/${id}`);
  },
  async getServiceRichText(id) {
    return fetchData(`/services/richtext/${id}`);
  },
  async getEmployes() {
    return fetchData(`/employees`);
  },
  async getReferences() {
    return fetchData(`/references`);
  }
};
const _sfc_main$j = {
  __name: "SlideShow",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([
      {
        id: 1,
        image: "/images/copot_kuca_1.png"
      },
      {
        id: 2,
        image: "/images/oc_varazdin_1.png"
      },
      {
        id: 3,
        image: "/images/oc_cakovec_1.png"
      },
      {
        id: 4,
        image: "/images/drustveni_dom_1.jpeg"
      }
    ]);
    const currentIndex = ref(0);
    computed(() => images.value[currentIndex.value]);
    let intervalId = null;
    const startSlideshow = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = setInterval(() => {
        if (images.value.length > 0) {
          currentIndex.value = (currentIndex.value + 1) % images.value.length;
        }
      }, 3e3);
    };
    onMounted(async () => {
      try {
        const response = await Gateway.getFirstPicturesList();
        images.value = response.map((item, index) => ({
          id: index,
          image: item.image
        }));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      startSlideshow();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slideshow" }, _attrs))} data-v-e8f397dc><!--[-->`);
      ssrRenderList(images.value, (image, index) => {
        _push(`<div data-v-e8f397dc>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "project", params: { id: image.id } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", image.image)} class="${ssrRenderClass([{ "show-class": index == currentIndex.value, "hide-class": index != currentIndex.value }, "background-image"])}" data-v-e8f397dc${_scopeId}>`);
            } else {
              return [
                (openBlock(), createBlock("img", {
                  src: image.image,
                  key: index,
                  class: ["background-image", { "show-class": index == currentIndex.value, "hide-class": index != currentIndex.value }]
                }, null, 10, ["src"]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="dots" data-v-e8f397dc><!--[-->`);
      ssrRenderList(images.value, (image, index) => {
        _push(`<span class="${ssrRenderClass([{ active: index === currentIndex.value }, "dot"])}" data-v-e8f397dc></span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SlideShow.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const SlideShow = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-e8f397dc"]]);
const _sfc_main$i = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home - Global Connect",
      meta: [
        {
          name: "description",
          content: "See all of our projects"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, { mode: "1" }, null, _parent));
      _push(ssrRenderComponent(SlideShow, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="d-flex"> Copyright © 2025 | All rights reserved </div><div></div><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$g = {
  __name: "Work",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Work - Our Projects",
      meta: [
        {
          name: "description",
          content: "Look at a more detailed version of each of our projects"
        }
      ]
    });
    const projectList = ref([
      {
        id: 1,
        projectDate: "22-05-1997",
        projectInfo: "Zagreb",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_1.png"
      },
      {
        id: 2,
        projectDate: "12-07-2012",
        projectInfo: "Varaždin",
        projectName: "Obiteljski centar Varaždin ",
        image: "/images/oc_varazdin_1.png"
      },
      {
        id: 3,
        projectDate: "10-10-2005",
        projectInfo: "Čakovec",
        projectName: "Obiteljski centar Čakovec ",
        image: "/images/oc_cakovec_1.png"
      },
      {
        id: 4,
        projectDate: "22-06-2022",
        projectInfo: "Zagreb",
        projectName: "Društveni dom",
        image: "/images/drustveni_dom_1.jpeg"
      },
      {
        id: 1,
        projectDate: "22-05-1997",
        projectInfo: "Zagreb",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_1.png"
      },
      {
        id: 2,
        projectDate: "12-07-2012",
        projectInfo: "Varaždin",
        projectName: "Obiteljski centar Varaždin ",
        image: "/images/oc_varazdin_1.png"
      },
      {
        id: 3,
        projectDate: "10-10-2005",
        projectInfo: "Čakovec",
        projectName: "Obiteljski centar Čakovec ",
        image: "/images/oc_cakovec_1.png"
      },
      {
        id: 4,
        projectDate: "22-06-2022",
        projectInfo: "Zagreb",
        projectName: "Društveni dom",
        image: "/images/drustveni_dom_1.jpeg"
      },
      {
        id: 1,
        projectDate: "22-05-1997",
        projectInfo: "Zagreb",
        projectName: "Copot kuća ",
        image: "/images/copot_kuca_1.png"
      },
      {
        id: 2,
        projectDate: "12-07-2012",
        projectInfo: "Varaždin",
        projectName: "Obiteljski centar Varaždin ",
        image: "/images/oc_varazdin_1.png"
      },
      {
        id: 3,
        projectDate: "10-10-2005",
        projectInfo: "Čakovec",
        projectName: "Obiteljski centar Čakovec ",
        image: "/images/oc_cakovec_1.png"
      },
      {
        id: 4,
        projectDate: "22-06-2022",
        projectInfo: "Zagreb",
        projectName: "Društveni dom",
        image: "/images/drustveni_dom_1.jpeg"
      }
      // repeat or extend this array as needed
    ]);
    onMounted(async () => {
      try {
        const response = await Gateway.getAllProjectsShortInfo();
        projectList.value = response.map((item) => ({
          id: item.id,
          projectDate: item.projectDate,
          projectInfo: item.projectInfo,
          projectName: item.projectName,
          image: item.image
          // Adjust if your field names are different
        }));
      } catch (error) {
        console.error("Failed to fetch projects, using fallback data:", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(ProjectList, { projectList: projectList.value }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Work.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "DropdownCheckbox",
  __ssrInlineRender: true,
  props: {
    title: String,
    items: Array,
    isOpen: Boolean
  },
  emits: ["toggle-dropdown", "checkbox-changed"],
  setup(__props, { emit: __emit }) {
    const checkedItems = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dropdown", { "open": __props.isOpen }]
      }, _attrs))} data-v-ecd9ab00><div class="${ssrRenderClass([{ "opened": __props.isOpen }, "dropdown-container"])}" data-v-ecd9ab00><button class="dropdown-button" data-v-ecd9ab00><span class="dropdown-title" data-v-ecd9ab00>${ssrInterpolate(__props.title)}</span><span class="${ssrRenderClass([{ "right": __props.isOpen, "down": !__props.isOpen }, "chevron"])}" data-v-ecd9ab00></span></button><div class="dropdown-menu" data-v-ecd9ab00><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<label class="dropdown-item" data-v-ecd9ab00><input type="checkbox"${ssrRenderAttr("value", item)}${ssrIncludeBooleanAttr(Array.isArray(checkedItems.value) ? ssrLooseContain(checkedItems.value, item) : checkedItems.value) ? " checked" : ""} data-v-ecd9ab00><span class="custom-checkbox" data-v-ecd9ab00>`);
        if (checkedItems.value.includes(item)) {
          _push(`<span class="checkmark" data-v-ecd9ab00>✔</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><span class="item-text" data-v-ecd9ab00>${ssrInterpolate(item)}</span></label>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DropdownCheckbox.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "ReferenceList",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const selectedFilters = ref({
      year: [],
      investor: [],
      solution: [],
      project: []
    });
    ref(null);
    computed(() => Array.from(new Set(props.items.map((item) => item.year))).sort());
    computed(() => Array.from(new Set(props.items.map((item) => item.investor))).sort());
    computed(() => Array.from(new Set(props.items.map((item) => item.solution))).sort());
    computed(() => Array.from(new Set(props.items.map((item) => item.project))).sort());
    const filteredItems = computed(() => {
      return props.items.filter((item) => {
        return (selectedFilters.value.year.length === 0 || selectedFilters.value.year.includes(item.year)) && (selectedFilters.value.investor.length === 0 || selectedFilters.value.investor.includes(item.investor)) && (selectedFilters.value.solution.length === 0 || selectedFilters.value.solution.includes(item.solution)) && (selectedFilters.value.project.length === 0 || selectedFilters.value.project.includes(item.project));
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-a2c87a1b><ul class="reference-list" data-v-a2c87a1b><!--[-->`);
      ssrRenderList(filteredItems.value, (item) => {
        _push(`<li class="reference-item" data-v-a2c87a1b><span class="year" data-v-a2c87a1b>${ssrInterpolate(item.year)}</span><span class="title" data-v-a2c87a1b>${ssrInterpolate(item.title)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ReferenceList.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ReferenceList = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-a2c87a1b"]]);
const _sfc_main$d = {
  __name: "Refrences",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Refrences - All Our Projects",
      meta: [
        {
          name: "description",
          content: "List of everything you need to know about our projects"
        }
      ]
    });
    const referenceData = ref([
      { year: "2021.", title: "Eco-Friendly Housing - Private Investor - Main Solution - Main Project" },
      { year: "2020.", title: "Urban Park Revitalization - State Investor - Solution Idea - Main and Idea Project" },
      { year: "2019.", title: "Sustainable Skyscraper - Multiple Investors - Main Solution - Main Project" },
      { year: "2021.", title: "Green Roof Initiative - Private Investor - Main Solution - Project Idea" },
      { year: "2020.", title: "Community Center Design - State Investor - Main Solution - Main Project" },
      { year: "2019.", title: "Smart City Infrastructure - Multiple Investors - Solution Idea - Main and Idea Project" },
      { year: "2021.", title: "Waterfront Development - Private Investor - Main Solution - Project Idea" },
      { year: "2020.", title: "Affordable Housing Project - State Investor - Main Solution - Main Project" },
      { year: "2019.", title: "Cultural Heritage Restoration - Multiple Investors - Solution Idea - Main and Idea Project" },
      { year: "2021.", title: "Smart Parking Solutions - Private Investor - Main Solution - Main Project" },
      { year: "2020.", title: "Innovative Public Transit - State Investor - Solution Idea - Project Idea" },
      { year: "2019.", title: "Energy-Efficient Buildings - Multiple Investors - Main Solution - Main Project" },
      { year: "2021.", title: "Mixed-Use Development - Private Investor - Main Solution - Main Project" },
      { year: "2020.", title: "Sustainable Urban Drainage - State Investor - Solution Idea - Project Idea" },
      { year: "2019.", title: "Smart Home Technology - Multiple Investors - Main Solution - Main Project" },
      { year: "2021.", title: "Urban Green Spaces - Private Investor - Main Solution - Main and Idea Project" },
      { year: "2020.", title: "High-Rise Greenery - State Investor - Main Solution - Main Project" },
      { year: "2019.", title: "Resilient Coastal Design - Multiple Investors - Solution Idea - Project Idea" },
      { year: "2021.", title: "Community Resilience Projects - Private Investor - Main Solution - Main and Idea Project" },
      { year: "2020.", title: "Historical Building Preservation - State Investor - Main Solution - Main Project" },
      { year: "2019.", title: "Tech-Enabled Infrastructure - Multiple Investors - Solution Idea - Main Project" },
      { year: "2021.", title: "Urban Farming Initiatives - Private Investor - Main Solution - Project Idea" },
      { year: "2020.", title: "Inclusive Community Design - State Investor - Main Solution - Main Project" },
      { year: "2019.", title: "Public Space Activation - Multiple Investors - Solution Idea - Main and Idea Project" },
      { year: "2021.", title: "Sustainable Transportation - Private Investor - Main Solution - Main Project" },
      { year: "2020.", title: "Eco-Friendly Retail Spaces - State Investor - Solution Idea - Project Idea" },
      { year: "2019.", title: "Digital Twins in Architecture - Multiple Investors - Main Solution - Main Project" }
    ]);
    onMounted(async () => {
      try {
        const response = await Gateway.getReferences();
        if (Array.isArray(response)) {
          referenceData.value = response;
        }
      } catch (error) {
        console.error("Failed to fetch references:", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(ReferenceList, { items: referenceData.value }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Refrences.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "BlogText",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-e201a2ef><div data-v-e201a2ef>${__props.content ?? ""}</div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BlogText.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const BlogText = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-e201a2ef"]]);
const _sfc_main$b = {
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      requiwhite: true
    },
    mode: {
      type: String,
      required: false,
      validator: (value) => {
        return value !== void 0;
      }
    }
  },
  setup(__props) {
    const currentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "gallery-container-service": __props.mode == "2", "gallery-container": __props.mode == "1" }
      }, _attrs))} data-v-6952f94c><div class="left" data-v-6952f94c><button class="chevron left-one" data-v-6952f94c></button></div><div class="image-container" style="${ssrRenderStyle({ backgroundImage: `url(${__props.images[currentIndex.value]})` })}" data-v-6952f94c></div><div class="right" data-v-6952f94c><button class="chevron right-one" data-v-6952f94c></button></div><div class="counter" data-v-6952f94c>${ssrInterpolate(currentIndex.value + 1)} / ${ssrInterpolate(__props.images.length)}</div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Gallery.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-6952f94c"]]);
const defaultContent = `
  <h2>Beginning of the Project</h2>
  <p>
    The initial phase of the project commenced with an in-depth analysis of user requirements. The team conducted surveys and focus groups to gather insights and understand the core needs of our target audience. This foundational research guided the subsequent design decisions and project scope.
  </p>
  <br>
  <p>
    During this stage, we also outlined the project timeline and key milestones. Each team member was assigned specific roles and responsibilities to ensure a smooth workflow. Collaboration tools were put in place to facilitate communication and document sharing among the team members.
  </p>
  <br>

  <h2>Implementation</h2>
  <p>
    The implementation phase involved translating our designs into a functional product. Our developers worked diligently to build the application, utilizing modern technologies that ensured scalability and performance. Regular testing was integrated into the development cycle to catch and address issues early.
  </p>
  <br>
  <p>
    We also held weekly check-ins to assess progress and align on goals. Feedback from stakeholders was gathered continuously, allowing us to make necessary adjustments to the project plan. This iterative approach proved vital in refining our final product and meeting user expectations.
  </p>
  <br>

  <h2>Current Use</h2>
  <p>
    Currently, the project has been deployed and is being actively used by our target audience. Users have reported positive feedback regarding its usability and features. We are continuously monitoring usage patterns and gathering user feedback to identify areas for improvement and additional functionalities.
  </p>
  <br>
  <p>
    The project has already begun to show tangible benefits, including increased efficiency and user engagement. Future updates are planned based on the insights we've gained, ensuring that the application evolves in response to user needs and technological advancements.
  </p>
  <br>
`;
const defaultServiceContent$1 = `
  <h2>Conceptual Design</h2>
  <p>
    The conceptual design phase marks the beginning of our architectural projects, where we work closely with our clients to understand their vision, goals, and functional requirements. Through site analysis, zoning assessments, and discussions with stakeholders, we define the essential aspects of the design. This phase ensures that the project's objectives are aligned with the client's expectations, budget, and desired aesthetic.
  </p>
  <br>
  <p>
    During this phase, our team produces preliminary sketches, mood boards, and conceptual renderings to visualize the potential of the project. These early designs serve as a foundation for further development and help us refine the project's scope and design direction, ensuring a smooth transition into detailed planning.
  </p>
  <br>

  <h2>Design Development</h2>
  <p>
    In the design development phase, we transform conceptual ideas into detailed plans and models. Our team works on architectural drawings, material specifications, and structural plans while ensuring compliance with building codes and regulations. This stage involves close collaboration with engineers, consultants, and contractors to refine every detail, ensuring feasibility and cost-effectiveness.
  </p>
  <br>
  <p>
    We also engage with clients during this phase to gather feedback on the design direction. This allows for modifications and adjustments, ensuring that the project stays on track and reflects the client's vision. At this point, we create realistic 3D visualizations, offering clients a comprehensive view of the final product and how it will interact with the surrounding environment.
  </p>
  <br>

  <h2>Project Execution</h2>
  <p>
    The project execution phase is where the design comes to life. Our team manages the construction process, coordinating with contractors, suppliers, and other stakeholders to ensure the project is built according to the approved plans. We monitor progress, quality, and safety, while maintaining a clear line of communication with the client to address any concerns or changes that may arise.
  </p>
  <br>
  <p>
    Throughout this stage, we ensure that the project is completed on time, within budget, and to the highest standards of craftsmanship. Once construction is complete, we conduct a thorough inspection and make final adjustments before handing over the space to our clients. We also offer post-project support to ensure ongoing satisfaction and functionality of the space.
  </p>
  <br>
`;
const _sfc_main$a = {
  __name: "Project",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Project - A Specific Project",
      meta: [
        {
          name: "description",
          content: "Look at a more detailed version of a certain project"
        }
      ]
    });
    const route = useRoute();
    const workId = parseInt(route.params.id);
    const imagesList = ref([
      {
        list: [
          "/images/copot_kuca_1.png",
          "/images/copot_kuca_2.png",
          "/images/copot_kuca_3.png",
          "/images/copot_kuca_4.png",
          "/images/copot_kuca_5.png"
        ],
        id: 1
      },
      {
        list: [
          "/images/oc_varazdin_1.png",
          "/images/oc_varazdin_2.png",
          "/images/oc_varazdin_3.png",
          "/images/oc_varazdin_4.png",
          "/images/oc_varazdin_5.png",
          "/images/oc_varazdin_6.png",
          "/images/oc_varazdin_7.png",
          "/images/oc_varazdin_8.png"
        ],
        id: 2
      },
      {
        list: [
          "/images/oc_cakovec_1.png",
          "/images/oc_cakovec_2.png",
          "/images/oc_cakovec_3.png",
          "/images/oc_cakovec_4.png",
          "/images/oc_cakovec_5.png",
          "/images/oc_cakovec_6.png"
        ],
        id: 3
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 4
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 5
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 6
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 7
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 8
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 9
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 10
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 11
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 12
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 13
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 14
      }
    ]);
    function getListById(id) {
      const item = imagesList.value.find((image) => image.id === id);
      return item ? item.list : null;
    }
    const foundList = ref(getListById(workId));
    const content = ref(route.path.includes("service") ? defaultServiceContent$1 : defaultContent);
    onMounted(async () => {
      try {
        const images = await Gateway.getProjectPictures(workId);
        if (images && images.length) {
          foundList.value = images;
        }
        const textResponse = await Gateway.getProjectRichText(workId);
        if (textResponse && textResponse.text) {
          content.value = textResponse.text;
        }
      } catch (err) {
        console.warn("Using fallback content and images due to fetch error:", err);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Gallery, {
        images: foundList.value,
        mode: "1"
      }, null, _parent));
      _push(ssrRenderComponent(BlogText, { content: content.value }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Project.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0 = "/images/global_connect_zgrada.jpg";
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Ul.+Milana+Pavelica+1b,+10000,+Zagreb`;
const _sfc_main$9 = {
  __name: "ContactPage",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-982caeee><div class="wrapper" data-v-982caeee><div class="contact-page" data-v-982caeee><div class="contact-info" data-v-982caeee><div class="info-content" data-v-982caeee><h1 data-v-982caeee>Kontakt</h1><h2 data-v-982caeee>Nazovite nas:</h2><div class="phone-numbers" data-v-982caeee><a${ssrRenderAttr("href", "tel:+385994554118")} data-v-982caeee>Deni Pavić +385 994554118</a><a${ssrRenderAttr("href", "tel:+385981608322")} data-v-982caeee>Vedran Vuletić +385 981608322</a></div><h2 data-v-982caeee>Naš e-mail:</h2><div class="emails" data-v-982caeee><a${ssrRenderAttr("href", "mailto:d.arhitektura@globalconnect-doo.com")} data-v-982caeee>d.arhitektura@globalconnect-doo.com</a><a${ssrRenderAttr("href", "mailto:v.urbanizam@globalconnect-doo.com")} data-v-982caeee>v.urbanizam@globalconnect-doo.com</a></div><h2 data-v-982caeee>Adresa:</h2><a${ssrRenderAttr("href", "https://maps.app.goo.gl/FLbBYHk4qaqHwy1w5")} target="_blank" data-v-982caeee> Srebernjak 126, 10 000, Zagreb </a><h2 data-v-982caeee>Adresa ureda:</h2><a${ssrRenderAttr("href", "https://www.google.com/maps/search/?api=1&query=Ul.+Milana+Pavelica+1b,+10000,+Zagreb")} target="_blank" data-v-982caeee> Milana Pavelića 1B, 10 000, Zagreb </a></div></div><div class="contact-form" data-v-982caeee><label for="name" data-v-982caeee>Ime i prezime*</label><input type="text" id="name"${ssrRenderAttr("value", formData.value.name)} data-v-982caeee><label for="email" data-v-982caeee>Vaš email*</label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} data-v-982caeee><label for="phone" data-v-982caeee>Mobitel</label><input type="tel" id="phone"${ssrRenderAttr("value", formData.value.phone)} data-v-982caeee><label for="message" data-v-982caeee>Vaša poruka</label><textarea id="message" data-v-982caeee>${ssrInterpolate(formData.value.message)}</textarea><button data-v-982caeee>Pošalji</button></div></div><div class="google-map" data-v-982caeee><iframe width="100%" height="400" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}"${ssrRenderAttr("src", mapSrc)} allowfullscreen data-v-982caeee></iframe></div></div><div class="map-container" data-v-982caeee><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.9648223157096!2d16.0188304!3d45.8119629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7cc68b52cd5%3A0xdc8de2b8ee42f88!2sUl.%20Milana%20Paveli%C4%87a%201b%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1733090219416!5m2!1shr!2shr" width="100%" height="450" style="${ssrRenderStyle({ "border": "0", "margin-top": "20px" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-982caeee></iframe></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactPage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ContactPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-982caeee"]]);
const _sfc_main$8 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact - Get in Touch",
      meta: [
        {
          name: "description",
          content: "Learn more about our company e-mails and contact."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, { mode: "2" }, null, _parent));
      _push(ssrRenderComponent(ContactPage, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Contact.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true,
      validator: (value) => {
        return "image" in value && "title" in value;
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-card" }, _attrs))} data-v-6fbd4133><img${ssrRenderAttr("src", __props.data.image)}${ssrRenderAttr("alt", __props.data.title)} class="image" data-v-6fbd4133><h2 class="title" data-v-6fbd4133>${ssrInterpolate(__props.data.title)}</h2></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ServiceCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6fbd4133"]]);
const _sfc_main$6 = {
  __name: "ServiceCardList",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((item) => "image" in item && "title" in item && "id" in item);
      }
    }
  },
  setup(__props) {
    const props = __props;
    const rows = computed(() => {
      const rowsArray = [];
      for (let i = 0; i < props.items.length; i += 4) {
        rowsArray.push(props.items.slice(i, i + 4));
      }
      return rowsArray;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-card-list" }, _attrs))} data-v-b96343df><!--[-->`);
      ssrRenderList(rows.value, (row, rowIndex) => {
        _push(`<div class="row" data-v-b96343df><!--[-->`);
        ssrRenderList(row, (item) => {
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "service", params: { id: item.id } },
            key: item.id,
            class: "card-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(ServiceCard, { data: item }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(ServiceCard, { data: item }, null, 8, ["data"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceCardList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ServiceCardList = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b96343df"]]);
const _sfc_main$5 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Services - Our services",
      meta: [
        {
          name: "description",
          content: "Learn more about the services we offer."
        }
      ]
    });
    const cardData = ref([
      { id: 1, image: "/images/drustveni_dom_1.jpeg", title: "Idejna rješenja" },
      { id: 2, image: "/images/drustveni_dom_2.jpeg", title: "Idejni projekti" },
      { id: 3, image: "/images/drustveni_dom_3.jpeg", title: "Glavni projekti" },
      { id: 7, image: "/images/drustveni_dom_4.jpeg", title: "Građevinski projekt" },
      { id: 10, image: "/images/drustveni_dom_5.jpeg", title: "Strojarski projekt" },
      { id: 5, image: "/images/drustveni_dom_6.jpeg", title: "Elektrotehnički projekt" },
      { id: 4, image: "/images/drustveni_dom_7.jpeg", title: "Izvedbeni projekti" },
      { id: 6, image: "/images/drustveni_dom_8.jpeg", title: "Troškovnici" },
      { id: 8, image: "/images/drustveni_dom_1.jpeg", title: "Prostorni prikazi" },
      { id: 9, image: "/images/drustveni_dom_2.jpeg", title: "Projekti interijera" },
      { id: 11, image: "/images/drustveni_dom_9.jpeg", title: "Projekti krajobraznog uređenja" },
      { id: 12, image: "/images/drustveni_dom_4.jpeg", title: "Geodetski elaborati" },
      { id: 13, image: "/images/drustveni_dom_5.jpeg", title: "Prostorni planovi uređenja grada ili općina" },
      { id: 14, image: "/images/drustveni_dom_6.jpeg", title: "Urbanistički planovi uređenja" },
      { id: 15, image: "/images/drustveni_dom_7.jpeg", title: "Urbanistička rješenja zahvata u prostoru" },
      { id: 16, image: "/images/drustveni_dom_8.jpeg", title: "Elaborati etažiranja" },
      { id: 17, image: "/images/drustveni_dom_9.jpeg", title: "Ispitivanje zrakopropusnosti" },
      { id: 18, image: "/images/drustveni_dom_1.jpeg", title: "Energetski certifikati" }
    ]);
    onMounted(async () => {
      try {
        const response = await Gateway.getAllServicesShortInfo();
        if (Array.isArray(response)) {
          cardData.value = response;
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(ServiceCardList, { items: cardData.value }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const defaultProjectContent = `
  <h2>Beginning of the Project</h2>
  <p>
    The initial phase of the project commenced with an in-depth analysis of user requirements. The team conducted surveys and focus groups to gather insights and understand the core needs of our target audience. This foundational research guided the subsequent design decisions and project scope.
  </p>
  <br>
  <p>
    During this stage, we also outlined the project timeline and key milestones. Each team member was assigned specific roles and responsibilities to ensure a smooth workflow. Collaboration tools were put in place to facilitate communication and document sharing among the team members.
  </p>
  <br>
  <h2>Implementation</h2>
  <p>
    The implementation phase involved translating our designs into a functional product. Our developers worked diligently to build the application, utilizing modern technologies that ensured scalability and performance. Regular testing was integrated into the development cycle to catch and address issues early.
  </p>
  <br>
  <p>
    We also held weekly check-ins to assess progress and align on goals. Feedback from stakeholders was gathered continuously, allowing us to make necessary adjustments to the project plan. This iterative approach proved vital in refining our final product and meeting user expectations.
  </p>
  <br>
  <h2>Current Use</h2>
  <p>
    Currently, the project has been deployed and is being actively used by our target audience. Users have reported positive feedback regarding its usability and features. We are continuously monitoring usage patterns and gathering user feedback to identify areas for improvement and additional functionalities.
  </p>
  <br>
  <p>
    The project has already begun to show tangible benefits, including increased efficiency and user engagement. Future updates are planned based on the insights we've gained, ensuring that the application evolves in response to user needs and technological advancements.
  </p>
  <br>
`;
const defaultServiceContent = `
  <h2>Idejna rješenja</h2>
  <p>
    Faza idejnog rješenja označava početak naših arhitektonskih projekata, u kojoj blisko surađujemo s našim klijentima kako bismo razumjeli njihovu viziju, ciljeve i funkcionalne zahtjeve. Kroz analizu lokacije, procjenu zona i razgovore s dionicima, definiramo ključne aspekte dizajna. Ova faza osigurava da su ciljevi projekta usklađeni s očekivanjima klijenta, budžetom i željenom estetikom.
  </p>
  <br>
  <p>
    Tijekom ove faze naš tim izrađuje preliminarne skice, mood boardove i idejne prikaze kako bi vizualizirao potencijal projekta. Ovi rani dizajni služe kao osnova za daljnji razvoj i pomažu nam u finom usklađivanju opsega projekta i smjera dizajna, osiguravajući glatki prijelaz u detaljno planiranje.
  </p>
  <br>
  <h2>Razrada dizajna</h2>
  <p>
    U fazi razrade dizajna, transformiramo idejne prijedloge u detaljne planove i modele. Naš tim radi na arhitektonskim crtežima, specifikacijama materijala i konstrukcijskim planovima, pritom osiguravajući usklađenost s građevinskim propisima i regulativama. Ova faza uključuje blisku suradnju s inženjerima, konzultantima i izvođačima kako bi se usavršio svaki detalj, osiguravajući izvedivost i ekonomičnost.
  </p>
  <br>
  <p>
    Također surađujemo s klijentima tijekom ove faze kako bismo prikupili povratne informacije o smjeru dizajna. To omogućava modifikacije i prilagodbe, osiguravajući da projekt ostane na pravom putu i odražava viziju klijenta. U ovoj fazi izrađujemo realistične 3D vizualizacije, pružajući klijentima sveobuhvatan prikaz konačnog proizvoda i njegove interakcije s okolnim prostorom.
  </p>
  <br>
  <h2>Izvedba projekta</h2>
  <p>
    Faza izvedbe projekta je trenutak kada dizajn oživljava. Naš tim upravlja procesom gradnje, koordinirajući s izvođačima, dobavljačima i ostalim dionicima kako bi se osiguralo da projekt bude izgrađen prema odobrenim planovima. Pratimo napredak, kvalitetu i sigurnost, održavajući jasnu komunikaciju s klijentom kako bismo riješili bilo kakve brige ili promjene koje se mogu pojaviti.
  </p>
  <br>
  <p>
    Tijekom ove faze osiguravamo da projekt bude dovršen na vrijeme, unutar budžeta i prema najvišim standardima izrade. Nakon završetka gradnje, provodimo detaljan pregled i obavljamo završne prilagodbe prije nego što prostor predamo klijentima. Također pružamo podršku nakon završetka projekta kako bismo osigurali trajnu funkcionalnost i zadovoljstvo korisnika prostora.
  </p>
  <br>
`;
const _sfc_main$4 = {
  __name: "Service",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Service - A Specific Service",
      meta: [
        {
          name: "description",
          content: "Learn more about a specific service."
        }
      ]
    });
    const route = useRoute();
    const workId = parseInt(route.params.id);
    const imagesList = ref([
      {
        list: [
          "/images/copot_kuca_1.png",
          "/images/copot_kuca_2.png",
          "/images/copot_kuca_3.png",
          "/images/copot_kuca_4.png",
          "/images/copot_kuca_5.png"
        ],
        id: 1
      },
      {
        list: [
          "/images/oc_varazdin_1.png",
          "/images/oc_varazdin_2.png",
          "/images/oc_varazdin_3.png",
          "/images/oc_varazdin_4.png",
          "/images/oc_varazdin_5.png",
          "/images/oc_varazdin_6.png",
          "/images/oc_varazdin_7.png",
          "/images/oc_varazdin_8.png"
        ],
        id: 2
      },
      {
        list: [
          "/images/oc_cakovec_1.png",
          "/images/oc_cakovec_2.png",
          "/images/oc_cakovec_3.png",
          "/images/oc_cakovec_4.png",
          "/images/oc_cakovec_5.png",
          "/images/oc_cakovec_6.png"
        ],
        id: 3
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 4
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 5
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 6
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 7
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 8
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 9
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 10
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 11
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 12
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 13
      },
      {
        list: [
          "/images/drustveni_dom_1.jpeg",
          "/images/drustveni_dom_2.jpeg",
          "/images/drustveni_dom_3.jpeg",
          "/images/drustveni_dom_4.jpeg",
          "/images/drustveni_dom_5.jpeg",
          "/images/drustveni_dom_6.jpeg",
          "/images/drustveni_dom_7.jpeg",
          "/images/drustveni_dom_8.jpeg",
          "/images/drustveni_dom_9.jpeg"
        ],
        id: 14
      }
    ]);
    function getListById(id) {
      const item = imagesList.value.find((image) => image.id === id);
      return item ? item.list : null;
    }
    const foundList = ref(getListById(workId));
    const content = ref(route.path.includes("service") ? defaultServiceContent : defaultProjectContent);
    onMounted(async () => {
      try {
        const [images, text] = await Promise.all([
          Gateway.getServicePictures(workId),
          Gateway.getServiceRichText(workId)
        ]);
        if (images && images.length > 0) {
          foundList.value = images;
        }
        if (text && text.text) {
          content.value = text.text;
        }
      } catch (error) {
        console.warn("Failed to fetch service data, using hardcoded content.", error);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Gallery, {
        images: foundList.value,
        mode: "2"
      }, null, _parent));
      _push(ssrRenderComponent(BlogText, { content: content.value }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Service.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "PersonCard",
  __ssrInlineRender: true,
  props: {
    profile: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.image && typeof value.image === "string" && value.name && typeof value.name === "string" && value.title && typeof value.title === "string";
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-card" }, _attrs))} data-v-d70dfc5c><img${ssrRenderAttr("src", __props.profile.image)} alt="Profile Picture" class="profile-image" loading="lazy" data-v-d70dfc5c><p class="profile-name" data-v-d70dfc5c>${ssrInterpolate(__props.profile.name)}</p><p class="profile-title" data-v-d70dfc5c>${__props.profile.title ?? ""}</p></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PersonCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PersonCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d70dfc5c"]]);
const _sfc_main$2 = {
  __name: "PersonList",
  __ssrInlineRender: true,
  setup(__props) {
    const profilesBosses = ref([]);
    const profiles = ref([]);
    const fallbackBosses = [
      {
        image: "/images/deni_pavic.jpg",
        name: "Deni Pavić",
        title: `Vlasnik tvrtke, direktor`
      },
      {
        image: "/images/vedran_vuletic.jpg",
        name: "Vedran Vuletić",
        title: `Voditelj ureda, direktor, <br> Ovlašteni arhitekt, Ovl. arhitekt urbanist`
      }
    ];
    const fallbackProfiles = [
      {
        image: "/images/deni_pavic.jpg",
        name: "Vedran Roljić",
        title: "Projektant suradnik"
      },
      {
        image: "/images/zvonimir_jurkovic.jpg",
        name: "Matija Pucak",
        title: "Ovlašteni arhitekt"
      },
      {
        image: "/images/vedran_vuletic.jpg",
        name: "Mislav Klarić",
        title: "Arhitekt pripravnik"
      },
      {
        image: "/images/vedran_vuletic.jpg",
        name: "Igor Višić",
        title: "Ovlašteni inženjer geodezije i geoinformatike"
      },
      {
        image: "/images/igor_visic.jpg",
        name: "Tomislav Jagodić",
        title: "Geodet suradnik"
      },
      {
        image: "/images/zvonimir_jurkovic.jpg",
        name: "Tomislav Češljaš",
        title: "Ovlašteni inženjer građevinarstva"
      },
      {
        image: "/images/igor_visic.jpg",
        name: "Siniša Kahrić",
        title: "Ovlašteni inženjer građevinarstva"
      },
      {
        image: "/images/vedran_vuletic.jpg",
        name: "Darko Magić",
        title: "Strojar suradnik"
      },
      {
        image: "/images/zvonimir_jurkovic.jpg",
        name: "Srećko Lačen",
        title: "Ovlašteni inženjer stroj."
      },
      {
        image: "/images/vedran_vuletic.jpg",
        name: "Boris Kramarić",
        title: "Ovlašteni inženjer elektr."
      }
    ];
    onMounted(async () => {
      try {
        const data = await Gateway.getEmployes();
        if (Array.isArray(data) && data.length > 0) {
          profilesBosses.value = data.slice(0, 2);
          profiles.value = data.slice(2);
        } else {
          profilesBosses.value = fallbackBosses;
          profiles.value = fallbackProfiles;
        }
      } catch (error) {
        console.error("Failed to fetch employees:", error);
        profilesBosses.value = fallbackBosses;
        profiles.value = fallbackProfiles;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="person-list" data-v-6abfcbc4><!--[-->`);
      ssrRenderList(profilesBosses.value, (profile, index) => {
        _push(`<div class="person-card-wrapper" data-v-6abfcbc4>`);
        _push(ssrRenderComponent(PersonCard, { profile }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="person-list" data-v-6abfcbc4><!--[-->`);
      ssrRenderList(profiles.value, (profile, index) => {
        _push(`<div class="person-card-wrapper" data-v-6abfcbc4>`);
        _push(ssrRenderComponent(PersonCard, { profile }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PersonList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PersonList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6abfcbc4"]]);
const _sfc_main$1 = {
  __name: "BigPicture",
  __ssrInlineRender: true,
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "Your Title Here"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-container" }, _attrs))} data-v-1a54578f><div class="image-wrapper" data-v-1a54578f>`);
      if (__props.imageUrl) {
        _push(`<img${ssrRenderAttr("src", __props.imageUrl)} alt="Uploaded Image" class="full-image" data-v-1a54578f>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="overlay" data-v-1a54578f></div>`);
      if (__props.imageUrl) {
        _push(`<div class="title" data-v-1a54578f>${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BigPicture.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BigPicture = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1a54578f"]]);
const _sfc_main = {
  __name: "People",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Us - Our people",
      meta: [
        {
          name: "description",
          content: "Learn more about our company and people."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BigPicture, {
        class: "big-picture",
        imageUrl: "/images/office_deal.jpg",
        title: "People"
      }, null, _parent));
      _push(ssrRenderComponent(PersonList, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/People.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const People = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f3c1311"]]);
const routes = [
  {
    path: "/",
    name: "home",
    component: _sfc_main$i,
    meta: {
      title: "Home - Global Connect",
      description: "See all of our projects"
    }
  },
  {
    path: "/refrences",
    name: "refrences",
    component: _sfc_main$d,
    meta: {
      title: "Refrences - all our projects at one point",
      description: "List of everything you need to know about our projects"
    }
  },
  {
    path: "/work",
    name: "work",
    component: _sfc_main$g,
    meta: {
      title: "Work - our projects in their glorious form",
      description: "Look at a more detailed version of each of our projects"
    }
  },
  {
    path: "/project/:id",
    name: "project",
    component: _sfc_main$a,
    meta: {
      title: "Project - a detailed view of a specific project",
      description: "Look at a more detailed version of a certain project"
    }
  },
  {
    path: "/people",
    name: "people",
    component: People,
    meta: {
      title: "About Us - learn more about our people",
      description: "Learn more about our company and people."
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: _sfc_main$8,
    meta: {
      title: "Contact - here is how to get in touch with us",
      description: "Learn more about our company e-mails and contact."
    }
  },
  {
    path: "/services",
    name: "services",
    component: _sfc_main$5,
    meta: {
      title: "Services - all our services at one place",
      description: "Learn more about the services we offer."
    }
  },
  {
    path: "/service/:id",
    name: "service",
    component: _sfc_main$4,
    meta: {
      title: "Service - a specific service",
      description: "Learn more about a specific service."
    }
  }
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});
const createApp = ViteSSG(
  _sfc_main$k,
  {
    routes: router.options.routes
    // if router is already created
  },
  ({ app, router: router2, initialState }) => {
    const head = createHead$1();
    app.use(createPinia());
    app.use(router2);
    app.use(head);
  }
);
export {
  createApp
};
