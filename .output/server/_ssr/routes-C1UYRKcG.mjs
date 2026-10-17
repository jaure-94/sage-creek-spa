import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { _ as Download, a as ShieldCheck, b as Award, c as Menu, d as Linkedin, f as Instagram, g as Droplets, h as Facebook, i as Truck, l as MapPin, m as FileText, n as X, o as Pickaxe, p as HardHat, r as Wrench, s as Phone, t as Zap, u as Mail, v as Building2, x as ArrowRight, y as Boxes } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C1UYRKcG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-cgFL5ZD2.jpg";
var bits_default = "/assets/bits-C65Rqfzh.jpg";
var pipes_default = "/assets/pipes-sUJd_Ljz.jpg";
var adapters_default = "/assets/adapters-DIJf2I6D.jpg";
var Sage_Creek_Catalogue_2026_default = "/assets/Sage-Creek-Catalogue-2026-DNhOD2CD.pdf";
var sage_creek_no_bg_default = "/assets/sage-creek-no-bg-QjIRqP1H.png";
var air_hose_and_fittings_default = "/assets/air-hose-and-fittings-DWjwfy6T.jpeg";
var cavern_team_default = "/assets/cavern-team-ByDCDz5X.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var PHONE = "+263 71 818 6989";
var EMAIL = "sales@sagecreek.co.zw";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: .5 }
	}
};
var stagger = {
	hidden: {},
	show: { transition: { staggerChildren: .1 } }
};
function Reveal({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: stagger,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		className,
		children
	});
}
var Item = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
	variants: fadeUp,
	className,
	children
});
var btn = "inline-flex min-h-12 h-auto items-center justify-center gap-2 whitespace-normal rounded px-5 py-3 text-center text-sm font-bold uppercase transition-transform hover:scale-[1.02] active:scale-[0.97]";
var btnLime = `${btn} bg-lime text-teal-deep`;
var btnGhost = `${btn} border-2 border-background/40 text-background hover:border-lime hover:text-lime`;
var btnTeal = `${btn} bg-teal text-secondary-foreground`;
var nav = [
	["Products", "products"],
	["Sectors", "sectors"],
	["About Us", "about"],
	["Why Choose Us", "why"],
	["Contact", "contact"]
];
var sectors = [
	{
		icon: Droplets,
		t: "Commercial Water Wells",
		d: "Bits, hammers and pipes for reliable borehole yields, from domestic to municipal."
	},
	{
		icon: Pickaxe,
		t: "Mining & Exploration",
		d: "Tough consumables for blast-hole, RC and exploration drilling in hard rock."
	},
	{
		icon: HardHat,
		t: "Construction & Civil",
		d: "Foundation, anchoring and geotechnical drilling tools built for site conditions."
	},
	{
		icon: Building2,
		t: "Infrastructure Projects",
		d: "Dependable supply for roads, dams and public works across the region."
	}
];
var categories = [
	{
		id: "bits",
		name: "DTH Hammers & Drill Bits",
		img: bits_default,
		w: 1024,
		h: 1024,
		fit: "cover",
		items: [
			"Rock drill bits",
			"Tri-cone bits",
			"High-pressure DTH hammers",
			"Mission, DHD & Khaishan shanks"
		]
	},
	{
		id: "pipes",
		name: "Drill Pipes & Rods",
		img: pipes_default,
		w: 1024,
		h: 1024,
		fit: "cover",
		items: ["Heavy-duty drill pipes", "Drill Rods"]
	},
	{
		id: "adapters",
		name: "Adapters & Couplings",
		img: adapters_default,
		w: 1024,
		h: 1024,
		fit: "cover",
		items: [
			"Sub-adapters",
			"Female-to-female adapters",
			"Male-to-male adapters"
		]
	},
	{
		id: "hoses",
		name: "Air Hoses & Fittings",
		img: air_hose_and_fittings_default,
		w: 511,
		h: 574,
		fit: "contain",
		items: ["High-pressure air hoses"]
	}
];
var why = [
	{
		icon: ShieldCheck,
		t: "High Durability Equipment",
		d: "Built for harsh Southern African geology — granite, basalt and banded ironstone."
	},
	{
		icon: Boxes,
		t: "Reliable Stock in Zimbabwe",
		d: "Local inventory means no waiting on imports when your rig is on the clock."
	},
	{
		icon: Wrench,
		t: "Technical Support & On-Site Expertise",
		d: "We help match the right bit, hammer and thread to your formation and rig."
	},
	{
		icon: Zap,
		t: "Rapid Order Fulfillment",
		d: "Quotes turned around fast and orders dispatched promptly across the country."
	}
];
function Index() {
	const [tab, setTab] = (0, import_react.useState)("bits");
	const [open, setOpen] = (0, import_react.useState)(false);
	const cat = categories.find((c) => c.id === tab) ?? categories[0];
	if (!cat) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-teal-deep text-secondary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 text-xs font-semibold sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex min-w-0 items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-lime" }), " Harare, Zimbabwe"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE.replace(/\s/g, "")}`,
						className: "inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded bg-lime px-2 py-1 text-teal-deep transition-transform hover:scale-[1.02] sm:px-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "Call Sales"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden sm:inline",
								children: ["Call Sales · ", PHONE]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-1 sm:px-6 lg:flex lg:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							"aria-label": "Sage Creek home",
							className: "min-w-0 w-fit shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: sage_creek_no_bg_default,
								alt: "Sage Creek",
								width: 933,
								height: 414,
								className: "h-16 w-40 object-contain sm:h-20 sm:w-48"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-5 lg:flex",
							children: [nav.map(([l, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${id}`,
								className: "text-sm font-semibold text-teal transition-colors hover:text-foreground",
								children: l
							}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: `${btnLime} px-4 py-2.5`,
								children: "Get a Quote"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "h-11 w-11 shrink-0 text-teal lg:hidden",
							onClick: () => setOpen(!open),
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							"aria-controls": "mobile-navigation",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "mobile-navigation",
					className: "flex max-h-[calc(100dvh-8rem)] flex-col gap-1 overflow-y-auto border-t border-border px-4 py-3 lg:hidden",
					children: nav.map(([l, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${id}`,
						onClick: () => setOpen(false),
						className: "min-h-11 py-3 font-semibold text-teal",
						children: l
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative overflow-hidden bg-teal-deep text-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Borehole drilling rig at dusk in Zimbabwe",
						width: 1600,
						height: 1008,
						className: "absolute inset-0 h-full w-full object-cover opacity-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-16 lg:py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded bg-lime px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-teal-deep sm:px-3 sm:text-xs",
									children: "Zimbabwe's Drilling Supply Partner"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-4 max-w-[19ch] font-display text-[1.3rem] uppercase leading-[1.3] sm:mt-5 sm:max-w-none sm:text-4xl sm:leading-[1.15] lg:text-5xl",
									children: [
										"Heavy-Duty Drilling ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lime",
											children: "Consumables"
										}),
										" & Accessories Across Zimbabwe"
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3.5 max-w-lg text-[0.8rem] leading-relaxed text-background/80 sm:mt-5 sm:max-w-xl sm:text-lg",
									children: "Reliable bits, hammers, pipes and fittings — matched to your formation by people who know drilling, and supplied fast from local stock."
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
									className: "mt-5 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap sm:gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#products",
										className: btnLime,
										children: ["Explore Catalogue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: btnGhost,
										children: "Request a Quote"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									className: "mt-6 grid gap-2.5 text-xs font-semibold sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-sm",
									children: [
										[Truck, "Fast Zimbabwe Delivery"],
										[ShieldCheck, "Heavy-Duty Grade Materials"],
										[Award, "Mining & Water Industry Certified"]
									].map(([I, t]) => {
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex min-w-0 items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4 shrink-0 text-lime sm:h-5 sm:w-5" }), t]
										}, t);
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard relative h-3" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sectors",
				className: "scroll-mt-24 bg-muted py-14 sm:py-18 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						kicker: "Sectors We Serve",
						title: "Built for every borehole, pit and site"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-8 grid sm:mt-10 gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: sectors.map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -6 },
							className: "group h-full rounded border border-border bg-card p-5 sm:p-7 transition-shadow hover:shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded bg-teal text-lime transition-colors group-hover:bg-lime group-hover:text-teal-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-lg uppercase text-teal",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: d
								})
							]
						}) }, t))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "products",
				className: "scroll-mt-24 py-14 sm:py-18 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Product Range",
							title: "Core inventory lines"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "tablist",
							"aria-label": "Product categories",
							className: "mt-8 flex gap-2 overflow-x-auto pb-2 md:flex-wrap",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								role: "tab",
								id: `tab-${c.id}`,
								"aria-selected": tab === c.id,
								"aria-controls": "product-panel",
								onClick: () => setTab(c.id),
								className: `h-auto min-h-12 shrink-0 whitespace-normal rounded px-4 py-3 text-sm font-bold transition-all active:scale-[0.97] ${tab === c.id ? "bg-secondary text-lime hover:bg-secondary hover:text-lime" : "bg-muted text-teal hover:bg-border"}`,
								children: c.name
							}, c.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-6 lg:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								role: "tabpanel",
								id: "product-panel",
								"aria-labelledby": `tab-${cat.id}`,
								initial: {
									opacity: 0,
									scale: .98
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: { duration: .4 },
								className: "grid overflow-hidden rounded border border-border bg-card md:grid-cols-2 lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cat.img,
									alt: cat.name,
									loading: "lazy",
									width: cat.w,
									height: cat.h,
									className: `aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-80 ${cat.fit === "contain" ? "bg-white object-contain p-3 sm:p-6" : "bg-muted object-cover"}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 p-5 sm:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl uppercase text-teal",
											children: cat.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
											variants: stagger,
											initial: "hidden",
											animate: "show",
											className: "mt-6 space-y-3",
											children: cat.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
												variants: fadeUp,
												className: "flex min-w-0 items-center gap-3 break-words border-b border-border pb-3 text-sm font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 shrink-0 bg-lime" }), i]
											}, i))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											className: `${btnTeal} mt-8`,
											children: "Quote this range"
										})
									]
								})]
							}, cat.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid-lines relative flex flex-col justify-between overflow-hidden rounded bg-teal p-5 sm:p-8 text-secondary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-10 w-10 text-lime" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-2xl uppercase",
										children: "Full Product Catalogue 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-secondary-foreground/75",
										children: "Specs, sizes and spline options for every line we stock. PDF, ~9.6 MB."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: Sage_Creek_Catalogue_2026_default,
									download: "Sage-Creek-Catalogue-2026.pdf",
									target: "_blank",
									rel: "noreferrer",
									className: `${btnLime} mt-8`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Catalogue PDF"]
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "scroll-mt-24 bg-teal-deep py-14 sm:py-18 lg:py-24 text-secondary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase text-lime",
										children: "About Sage Creek"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-2xl uppercase sm:text-3xl lg:text-4xl",
										children: "The right tools for every drilling requirement"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base font-semibold leading-relaxed text-secondary-foreground sm:text-lg lg:text-xl",
										children: "Sage Creek Pvt Ltd is a Zimbabwean-based supplier of borehole drilling consumables and accessories, serving the water, mining, construction and infrastructure sectors."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
								className: "min-w-0 space-y-4 text-sm leading-relaxed text-secondary-foreground/80 sm:text-base",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We specialize in providing high-quality, durable and cost-effective drilling solutions that meet the demands of challenging operating environments." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With a strong focus on reliability, technical suitability and timely delivery, Sage Creek supports contractors, NGOs and drilling professionals in executing projects efficiently and sustainably." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We combine industry knowledge with dependable supply chains to ensure our clients always have access to the right tools for every drilling requirement." })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mt-10 border-t border-secondary-foreground/15 pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase text-lime",
								children: "Our Product Portfolio"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								className: "mt-4 flex flex-wrap gap-2",
								children: [
									"Rock Drill Bits",
									"DTH Hammers",
									"Drill Pipes",
									"Adapters",
									"Air Hoses",
									"Related Consumables"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded border border-lime/40 bg-teal/40 px-3 py-1.5 text-xs font-bold uppercase text-secondary-foreground sm:text-sm",
									children: p
								}, p))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "mt-8 grid gap-4 sm:grid-cols-3",
							children: [
								"Quality Commitment",
								"Customer Reliability",
								"Integrity & Accountability"
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								className: "min-w-0 border-l-2 border-lime pl-3 text-sm font-bold text-secondary-foreground",
								children: v
							}, v))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "why",
				className: "scroll-mt-24 py-14 sm:py-18 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						kicker: "Why Choose Us",
						title: "Less downtime. More metres drilled."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-8 grid sm:mt-10 gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2",
						children: why.map(({ icon: Icon, t, d }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							className: "group bg-card p-5 sm:p-8 transition-colors hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 font-display text-3xl text-lime sm:text-4xl [-webkit-text-stroke:1px_var(--teal)]",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-teal" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-lg uppercase text-teal",
										children: t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: d
									})
								] })]
							})
						}, t))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-teal-deep text-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cavern_team_default,
						alt: "",
						"aria-hidden": true,
						loading: "lazy",
						width: 1022,
						height: 672,
						className: "absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-45"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-teal-deep/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded bg-lime px-3 py-1 text-xs font-bold uppercase text-teal-deep",
									children: "Talk to the Team"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-2xl uppercase leading-[1.15] sm:text-3xl lg:text-4xl",
									children: "Keep your rigs turning — talk to someone who knows drilling"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-background/85 sm:text-base",
									children: "Tell us your formation, rig and hole size. We'll match the right consumables and get them moving fast, from stock in Harare."
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
									className: "mt-7 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: btnLime,
										children: ["Get a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${PHONE.replace(/\s/g, "")}`,
										className: btnGhost,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Sales"]
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard relative h-3" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-teal-deep text-secondary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard h-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#top",
									"aria-label": "Sage Creek home",
									className: "inline-block rounded bg-background px-2 py-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: sage_creek_no_bg_default,
										alt: "Sage Creek",
										width: 933,
										height: 414,
										loading: "lazy",
										className: "h-20 w-48 object-contain"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-secondary-foreground/70",
									children: "Borehole drilling consumables & accessories. Harare, Zimbabwe."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-5 inline-block rounded border border-lime/50 px-3 py-1 text-xs font-bold uppercase text-lime",
									children: "Powered by Local Drilling Expertise"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2 text-sm",
								children: nav.map(([l, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${id}`,
									className: "text-secondary-foreground/80 hover:text-lime",
									children: l
								}, id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3 sm:col-span-2 lg:col-span-1 lg:justify-end",
								children: [
									Facebook,
									Linkedin,
									Instagram
								].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Social link",
									className: "grid h-10 w-10 place-items-center rounded bg-teal transition-colors hover:bg-lime hover:text-teal-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-secondary-foreground/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-secondary-foreground/60",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Sage Creek Pvt Ltd. All rights reserved. Product specifications and availability are subject to change; please confirm details with our sales team before ordering."
							]
						})
					})
				]
			})
		]
	});
}
function SectionHead({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-xs font-bold uppercase text-teal",
		children: ["— ", kicker]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-3 max-w-2xl font-display text-2xl uppercase text-teal-deep sm:text-3xl lg:text-4xl",
		children: title
	}) })] });
}
var field = "min-w-0 w-full rounded border border-input bg-background px-4 py-3 text-base outline-none focus:border-teal focus:ring-2 focus:ring-lime";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const msg = `Quote request\n\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nSector: ${f.get("sector")}\nProducts: ${f.get("category")}\nPhone: ${f.get("phone")}\nNotes: ${f.get("notes")}`;
		window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote request — Sage Creek")}&body=${encodeURIComponent(msg)}`;
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 bg-muted py-14 sm:py-18 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: "Request a Quote",
				title: "Tell us what your rig needs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-8 grid sm:mt-10 gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "grid gap-4 rounded border border-border bg-card p-5 sm:grid-cols-2 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								placeholder: "Full name",
								className: field
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "company",
								placeholder: "Company name",
								className: field
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: true,
								name: "sector",
								defaultValue: "",
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select sector"
								}), sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.t }, s.t))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: true,
								name: "category",
								defaultValue: "",
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Product category"
								}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c.name }, c.id))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "phone",
								type: "tel",
								placeholder: "Phone number",
								className: `${field} sm:col-span-2`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "notes",
								rows: 4,
								placeholder: "Quantities, sizes, thread types, delivery location…",
								className: `${field} sm:col-span-2`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:col-span-2 sm:flex sm:flex-wrap sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: btnLime,
									children: ["Send Quote Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-teal",
									children: "Thanks — your email draft has opened. Hit send to reach our sales team."
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex h-full flex-col gap-5 rounded bg-teal p-5 sm:p-8 text-secondary-foreground",
					children: [[
						[
							Phone,
							PHONE,
							`tel:${PHONE.replace(/\s/g, "")}`
						],
						[
							Mail,
							EMAIL,
							`mailto:${EMAIL}`
						],
						[
							MapPin,
							"Harare, Zimbabwe",
							void 0
						]
					].map(([I, t, h]) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: h,
							className: "flex min-w-0 items-center gap-3 break-words border-b border-secondary-foreground/15 pb-4 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5 shrink-0 text-lime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 break-words",
								children: t
							})]
						}, t);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto text-xs text-secondary-foreground/60",
						children: "Mon–Fri 08:00–17:00 · Sat 08:00–13:00"
					})]
				}) })]
			})]
		})
	});
}
//#endregion
export { Index as component };
